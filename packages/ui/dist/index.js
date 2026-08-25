//#region ../../node_modules/.pnpm/svelte@5.56.8_@typescript-eslint+types@8.65.0/node_modules/svelte/src/internal/disclose-version.js
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.56.8_@typescript-eslint+types@8.65.0/node_modules/svelte/src/constants.js
var e = {}, t = Symbol("uninitialized"), n = "http://www.w3.org/1999/xhtml", r = "http://www.w3.org/2000/svg", i = "http://www.w3.org/1998/Math/MathML", a = "@attach", o = Array.isArray, s = Array.prototype.indexOf, c = Array.prototype.includes, l = Array.from, u = Object.keys, d = Object.defineProperty, f = Object.getOwnPropertyDescriptor, p = Object.getOwnPropertyDescriptors, m = Object.prototype, h = Array.prototype, g = Object.getPrototypeOf, _ = Object.isExtensible;
function v(e) {
	return typeof e == "function";
}
var y = () => {};
function b(e) {
	return e();
}
function x(e) {
	for (var t = 0; t < e.length; t++) e[t]();
}
function S() {
	var e, t;
	return {
		promise: new Promise((n, r) => {
			e = n, t = r;
		}),
		resolve: e,
		reject: t
	};
}
function C(e, t, n = !1) {
	return e === void 0 ? n ? t() : t : e;
}
function w(e, t) {
	if (Array.isArray(e)) return e;
	if (t === void 0 || !(Symbol.iterator in e)) return Array.from(e);
	let n = [];
	for (let r of e) if (n.push(r), n.length === t) break;
	return n;
}
function T(e, t) {
	var n = {};
	for (var r in e) t.includes(r) || (n[r] = e[r]);
	for (var i of Object.getOwnPropertySymbols(e)) Object.propertyIsEnumerable.call(e, i) && !t.includes(i) && (n[i] = e[i]);
	return n;
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.56.8_@typescript-eslint+types@8.65.0/node_modules/svelte/src/internal/client/constants.js
var E = 1 << 24, D = 1024, ee = 2048, te = 4096, ne = 8192, re = 16384, ie = 32768, ae = 1 << 25, oe = 65536, se = 1 << 18, ce = 1 << 19, le = 1 << 20, ue = 1 << 25, de = 65536, fe = 1 << 21, pe = 1 << 22, me = 1 << 23, he = Symbol("$state"), ge = Symbol("legacy props"), _e = Symbol(""), ve = Symbol("attributes"), ye = Symbol("class"), be = Symbol("style"), xe = Symbol("text"), Se = Symbol("form reset"), Ce = new class extends Error {
	name = "StaleReactionError";
	message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), we = !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml");
function Te(e) {
	throw Error("https://svelte.dev/e/lifecycle_outside_component");
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.56.8_@typescript-eslint+types@8.65.0/node_modules/svelte/src/internal/client/errors.js
function Ee() {
	throw Error("https://svelte.dev/e/async_derived_orphan");
}
function De(e, t, n) {
	throw Error("https://svelte.dev/e/each_key_duplicate");
}
function Oe(e) {
	throw Error("https://svelte.dev/e/effect_in_teardown");
}
function ke() {
	throw Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ae(e) {
	throw Error("https://svelte.dev/e/effect_orphan");
}
function je() {
	throw Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Me() {
	throw Error("https://svelte.dev/e/hydration_failed");
}
function Ne(e) {
	throw Error("https://svelte.dev/e/props_invalid_value");
}
function Pe() {
	throw Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Fe() {
	throw Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ie() {
	throw Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Le() {
	throw Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Re() {
	console.warn("https://svelte.dev/e/derived_inert");
}
function ze(e) {
	console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Be() {
	console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Ve() {
	console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.56.8_@typescript-eslint+types@8.65.0/node_modules/svelte/src/internal/client/dom/hydration.js
var O = !1;
function He(e) {
	O = e;
}
var k;
function Ue(t) {
	if (t === null) throw ze(), e;
	return k = t;
}
function We() {
	return Ue(/* @__PURE__ */ Nn(k));
}
function A(t) {
	if (O) {
		if (/* @__PURE__ */ Nn(k) !== null) throw ze(), e;
		k = t;
	}
}
function j(e = 1) {
	if (O) {
		for (var t = e, n = k; t--;) n = /* @__PURE__ */ Nn(n);
		k = n;
	}
}
function Ge(e = !0) {
	for (var t = 0, n = k;;) {
		if (n.nodeType === 8) {
			var r = n.data;
			if (r === "]") {
				if (t === 0) return n;
				--t;
			} else (r === "[" || r === "[!" || r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1);
		}
		var i = /* @__PURE__ */ Nn(n);
		e && n.remove(), n = i;
	}
}
function Ke(t) {
	if (!t || t.nodeType !== 8) throw ze(), e;
	return t.data;
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.56.8_@typescript-eslint+types@8.65.0/node_modules/svelte/src/internal/client/reactivity/equality.js
function qe(e) {
	return e === this.v;
}
function Je(e, t) {
	return e == e ? e !== t || typeof e == "object" && !!e || typeof e == "function" : t == t;
}
function Ye(e) {
	return !Je(e, this.v);
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.56.8_@typescript-eslint+types@8.65.0/node_modules/svelte/src/internal/flags/index.js
var Xe = !1;
function Ze() {
	Xe = !0;
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.56.8_@typescript-eslint+types@8.65.0/node_modules/svelte/src/internal/shared/clone.js
var Qe = [];
function $e(e, t = !1, n = !1) {
	return et(e, /* @__PURE__ */ new Map(), "", Qe, null, n);
}
function et(e, t, n, r, i = null, a = !1) {
	if (typeof e == "object" && e) {
		var s = t.get(e);
		if (s !== void 0) return s;
		if (e instanceof Map) return new Map(e);
		if (e instanceof Set) return new Set(e);
		if (o(e)) {
			var c = Array(e.length);
			t.set(e, c), i !== null && t.set(i, c);
			for (var l = 0; l < e.length; l += 1) {
				var u = e[l];
				l in e && (c[l] = et(u, t, n, r, null, a));
			}
			return c;
		}
		if (g(e) === m) {
			c = {}, t.set(e, c), i !== null && t.set(i, c);
			for (var d of Object.keys(e)) c[d] = et(e[d], t, n, r, null, a);
			return c;
		}
		if (e instanceof Date) return structuredClone(e);
		if (typeof e.toJSON == "function" && !a) return et(e.toJSON(), t, n, r, e);
	}
	if (e instanceof EventTarget) return e;
	try {
		return structuredClone(e);
	} catch {
		return e;
	}
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.56.8_@typescript-eslint+types@8.65.0/node_modules/svelte/src/internal/client/context.js
var tt = null;
function nt(e) {
	tt = e;
}
function rt(e) {
	return ct("getContext").get(e);
}
function it(e, t) {
	return ct("setContext").set(e, t), t;
}
function at(e) {
	return ct("hasContext").has(e);
}
function ot() {
	return ct("getAllContexts");
}
function M(e, t = !1, n) {
	tt = {
		p: tt,
		i: !1,
		c: null,
		e: null,
		s: e,
		x: null,
		r: vr,
		l: Xe && !t ? {
			s: null,
			u: null,
			$: []
		} : null
	};
}
function N(e) {
	var t = tt, n = t.e;
	if (n !== null) {
		t.e = null;
		for (var r of n) Wn(r);
	}
	return e !== void 0 && (t.x = e), t.i = !0, tt = t.p, e ?? {};
}
function st() {
	return !Xe || tt !== null && tt.l === null;
}
function ct(e) {
	return tt === null && Te(e), tt.c ??= new Map(lt(tt) || void 0);
}
function lt(e) {
	let t = e.p;
	for (; t !== null;) {
		let e = t.c;
		if (e !== null) return e;
		t = t.p;
	}
	return null;
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.56.8_@typescript-eslint+types@8.65.0/node_modules/svelte/src/internal/client/dom/task.js
var ut = [];
function dt() {
	var e = ut;
	ut = [], x(e);
}
function ft(e) {
	if (ut.length === 0 && !Zt) {
		var t = ut;
		queueMicrotask(() => {
			t === ut && dt();
		});
	}
	ut.push(e);
}
function pt() {
	for (; ut.length > 0;) dt();
}
function mt(e) {
	var t = vr;
	if (t === null) return hr.f |= me, e;
	if (!(t.f & 32768) && !(t.f & 4)) throw e;
	ht(e, t);
}
function ht(e, t) {
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
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.56.8_@typescript-eslint+types@8.65.0/node_modules/svelte/src/internal/client/reactivity/status.js
var gt = ~(ee | te | D);
function _t(e, t) {
	e.f = e.f & gt | t;
}
function vt(e) {
	e.f & 512 || e.deps === null ? _t(e, D) : _t(e, te);
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.56.8_@typescript-eslint+types@8.65.0/node_modules/svelte/src/internal/client/reactivity/utils.js
function yt(e) {
	if (e !== null) for (let t of e) !(t.f & 2) || !(t.f & 65536) || (t.f ^= de, yt(t.deps));
}
function bt(e, t, n) {
	e.f & 2048 ? t.add(e) : e.f & 4096 && n.add(e), yt(e.deps), _t(e, D);
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.56.8_@typescript-eslint+types@8.65.0/node_modules/svelte/src/internal/client/reactivity/store.js
var xt = !1;
function St(e) {
	var t = xt;
	try {
		return xt = !1, [e(), xt];
	} finally {
		xt = t;
	}
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.56.8_@typescript-eslint+types@8.65.0/node_modules/svelte/src/internal/client/dom/elements/misc.js
function Ct(e, t) {
	if (t) {
		let t = document.body;
		e.autofocus = !0, ft(() => {
			document.activeElement === t && e.focus();
		});
	}
}
function wt(e) {
	O && /* @__PURE__ */ Mn(e) !== null && Pn(e);
}
var Tt = !1;
function Et() {
	Tt || (Tt = !0, document.addEventListener("reset", (e) => {
		Promise.resolve().then(() => {
			if (!e.defaultPrevented) for (let t of e.target.elements) t[Se]?.();
		});
	}, { capture: !0 }));
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.56.8_@typescript-eslint+types@8.65.0/node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js
function Dt(e) {
	var t = hr, n = vr;
	_r(null), yr(null);
	try {
		return e();
	} finally {
		_r(t), yr(n);
	}
}
function Ot(e, t, n, r = n) {
	e.addEventListener(t, () => Dt(n));
	let i = e[Se];
	i ? e[Se] = () => {
		i(), r(!0);
	} : e[Se] = () => r(!0), Et();
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.56.8_@typescript-eslint+types@8.65.0/node_modules/svelte/src/reactivity/create-subscriber.js
function kt(e) {
	let t = 0, n = gn(0), r;
	return () => {
		Vn() && (H(n), Xn(() => (t === 0 && (r = Br(() => e(() => xn(n)))), t += 1, () => {
			ft(() => {
				--t, t === 0 && (r?.(), r = void 0, xn(n));
			});
		})));
	};
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.56.8_@typescript-eslint+types@8.65.0/node_modules/svelte/src/internal/client/dom/blocks/boundary.js
var At = oe | ce;
function jt(e, t, n, r) {
	new Mt(e, t, n, r);
}
var Mt = class {
	parent;
	is_pending = !1;
	transform_error;
	#e;
	#t = O ? k : null;
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
	#h = kt(() => (this.#m = gn(this.#l), () => {
		this.#m = null;
	}));
	constructor(e, t, n, r) {
		this.#e = e, this.#n = t, this.#r = (e) => {
			var t = vr;
			t.b = this, t.f |= 128, n(e);
		}, this.parent = vr.b, this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e), this.#i = Zn(() => {
			if (O) {
				let e = this.#t;
				We();
				let t = e.data === "[!";
				if (e.data.startsWith("[?")) {
					let t = JSON.parse(e.data.slice(2));
					this.#_(t);
				} else t ? this.#y() : this.#g();
			} else this.#b();
		}, At), O && (this.#e = k);
	}
	#g() {
		try {
			this.#a = $n(() => this.#r(this.#e));
		} catch (e) {
			this.error(e);
		}
	}
	#_(e) {
		let t = this.#n.failed, { reset: n, invoke_onerror: r } = this.#v(e);
		ft(r), t && (this.#s = $n(() => {
			t(this.#e, () => e, () => n);
		}));
	}
	#v(e) {
		var t = !1, n = !1;
		let r = () => {
			if (t) {
				Ve();
				return;
			}
			t = !0, n && Le(), this.#s !== null && or(this.#s, () => {
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
					ht(e, this.#i && this.#i.parent);
				}
			}
		};
	}
	#y() {
		let e = this.#n.pending;
		e && (this.is_pending = !0, this.#o = $n(() => e(this.#e)), ft(() => {
			var e = this.#c = document.createDocumentFragment(), t = jn();
			e.append(t), this.#a = this.#S(() => $n(() => this.#r(t))), this.#u === 0 && (this.#e.before(e), this.#c = null, or(this.#o, () => {
				this.#o = null;
			}), this.#x(qt));
		}));
	}
	#b() {
		try {
			if (this.is_pending = this.has_pending_snippet(), this.#u = 0, this.#l = 0, this.#a = $n(() => {
				this.#r(this.#e);
			}), this.#u > 0) {
				var e = this.#c = document.createDocumentFragment();
				ur(this.#a, e);
				let t = this.#n.pending;
				this.#o = $n(() => t(this.#e));
			} else this.#x(qt);
		} catch (e) {
			this.error(e);
		}
	}
	#x(e) {
		this.is_pending = !1, e.transfer_effects(this.#f, this.#p);
	}
	defer_effect(e) {
		bt(e, this.#f, this.#p);
	}
	is_rendered() {
		return !this.is_pending && (!this.parent || this.parent.is_rendered());
	}
	has_pending_snippet() {
		return !!this.#n.pending;
	}
	#S(e) {
		var t = vr, n = hr, r = tt;
		yr(this.#i), _r(this.#i), nt(this.#i.ctx);
		try {
			return rn.ensure(), e();
		} catch (e) {
			return mt(e), null;
		} finally {
			yr(t), _r(n), nt(r);
		}
	}
	#C(e, t) {
		if (!this.has_pending_snippet()) {
			this.parent && this.parent.#C(e, t);
			return;
		}
		this.#u += e, this.#u === 0 && (this.#x(t), this.#o && or(this.#o, () => {
			this.#o = null;
		}), this.#c &&= (this.#e.before(this.#c), null));
	}
	update_pending_count(e, t) {
		this.#C(e, t), this.#l += e, !(!this.#m || this.#d) && (this.#d = !0, ft(() => {
			this.#d = !1, this.#m && vn(this.#m, this.#l);
		}));
	}
	get_effect_pending() {
		return this.#h(), H(this.#m);
	}
	error(e) {
		if (!this.#n.onerror && !this.#n.failed) throw e;
		qt?.is_fork ? (this.#a && qt.skip_effect(this.#a), this.#o && qt.skip_effect(this.#o), this.#s && qt.skip_effect(this.#s), qt.oncommit(() => {
			this.#w(e);
		})) : this.#w(e);
	}
	#w(e) {
		this.#a &&= (rr(this.#a), null), this.#o &&= (rr(this.#o), null), this.#s &&= (rr(this.#s), null), O && (Ue(this.#t), j(), Ue(Ge()));
		let t = this.#n.failed, n = (e) => {
			let { reset: n, invoke_onerror: r } = this.#v(e);
			r(), t && (this.#s = this.#S(() => {
				try {
					return $n(() => {
						var r = vr;
						r.b = this, r.f |= 128, t(this.#e, () => e, () => n);
					});
				} catch (e) {
					return ht(e, this.#i.parent), null;
				}
			}));
		};
		ft(() => {
			var t;
			try {
				t = this.transform_error(e);
			} catch (e) {
				ht(e, this.#i && this.#i.parent);
				return;
			}
			typeof t == "object" && t && typeof t.then == "function" ? t.then(n, (e) => ht(e, this.#i && this.#i.parent)) : n(t);
		});
	}
};
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.56.8_@typescript-eslint+types@8.65.0/node_modules/svelte/src/internal/client/reactivity/async.js
function Nt(e, t, n, r) {
	let i = st() ? Lt : Bt;
	var a = e.filter((e) => !e.settled), o = t.map(i);
	if (n.length === 0 && a.length === 0) {
		r(o);
		return;
	}
	var s = vr, c = Pt(), l = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((e) => e.promise)) : null;
	function u(e) {
		if (!(s.f & 16384)) {
			c();
			try {
				r([...o, ...e]);
			} catch (e) {
				ht(e, s);
			}
			Ft();
		}
	}
	var d = It();
	if (n.length === 0) {
		l.then(() => u([])).finally(d);
		return;
	}
	function f() {
		Promise.all(n.map((e) => /* @__PURE__ */ zt(e))).then(u).catch((e) => ht(e, s)).finally(d);
	}
	l ? l.then(() => {
		c(), f(), Ft();
	}) : f();
}
function Pt() {
	var e = vr, t = hr, n = tt, r = qt;
	return function(i = !0) {
		yr(e), _r(t), nt(n), i && !(e.f & 16384) && (r?.activate(), r?.apply());
	};
}
function Ft(e = !0) {
	yr(null), _r(null), nt(null), e && qt?.deactivate();
}
function It() {
	var e = vr, t = e.b, n = qt, r = !!t?.is_rendered();
	return t?.update_pending_count(1, n), n.increment(r, e), () => {
		t?.update_pending_count(-1, n), n.decrement(r, e);
	};
}
/*#__NO_SIDE_EFFECTS__*/
function Lt(e) {
	var n = 2 | ee;
	return vr !== null && (vr.f |= ce), {
		ctx: tt,
		deps: null,
		effects: null,
		equals: qe,
		f: n,
		fn: e,
		reactions: null,
		rv: 0,
		v: t,
		wv: 0,
		parent: vr,
		ac: null
	};
}
var Rt = Symbol("obsolete");
/*#__NO_SIDE_EFFECTS__*/
function zt(e, n, r) {
	let i = vr;
	i === null && Ee();
	var a = void 0, o = gn(t), s = !hr, c = /* @__PURE__ */ new Set();
	return Yn(() => {
		var t = vr, n = S();
		a = n.promise;
		try {
			Promise.resolve(e()).then(n.resolve, (e) => {
				e !== Ce && n.reject(e);
			}).finally(Ft);
		} catch (e) {
			n.reject(e), Ft();
		}
		var r = qt;
		if (s) {
			if (t.f & 32768) var l = It();
			if (i.b?.is_rendered()) r.async_deriveds.get(t)?.reject(Rt);
			else for (let e of c.values()) e.reject(Rt);
			c.add(n), r.async_deriveds.set(t, n);
		}
		let u = (e, t = void 0) => {
			l?.(), c.delete(n), t !== Rt && (r.activate(), t ? (o.f |= me, vn(o, t)) : (o.f & 8388608 && (o.f ^= me), vn(o, e)), r.deactivate());
		};
		n.promise.then(u, (e) => u(null, e || "unknown"));
	}), Hn(() => {
		for (let e of c) e.reject(Rt);
	}), new Promise((e) => {
		function t(n) {
			function r() {
				n === a ? e(o) : t(a);
			}
			n.then(r, r);
		}
		t(a);
	});
}
/*#__NO_SIDE_EFFECTS__*/
function P(e) {
	let t = /* @__PURE__ */ Lt(e);
	return xr(t), t;
}
/*#__NO_SIDE_EFFECTS__*/
function Bt(e) {
	let t = /* @__PURE__ */ Lt(e);
	return t.equals = Ye, t;
}
function Vt(e) {
	var t = e.effects;
	if (t !== null) {
		e.effects = null;
		for (var n = 0; n < t.length; n += 1) rr(t[n]);
	}
}
function Ht(e) {
	var n, r = vr, i = e.parent;
	if (!pr && i !== null && e.v !== t && i.f & 24576) return Re(), e.v;
	yr(i);
	try {
		e.f &= ~de, Vt(e), n = Nr(e);
	} finally {
		yr(r);
	}
	return n;
}
function Ut(e) {
	var t = Ht(e);
	if (!e.equals(t) && (e.wv = Ar(), (!qt?.is_fork || e.deps === null) && (qt === null ? e.v = t : (qt.capture(e, t, !0), Jt?.capture(e, t, !0)), e.deps === null))) {
		_t(e, D);
		return;
	}
	pr || (Yt === null ? vt(e) : (Vn() || qt?.is_fork) && Yt.set(e, t));
}
function Wt(e) {
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac !== null && Dt(() => {
		t.ac.abort(Ce), t.ac = null;
	}), t.fn !== null && (t.teardown = y), Fr(t, 0), tr(t));
}
function Gt(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && t.fn !== null && Ir(t);
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.56.8_@typescript-eslint+types@8.65.0/node_modules/svelte/src/internal/client/reactivity/batch.js
var Kt = null, qt = null, Jt = null, Yt = null, Xt = null, Zt = !1, Qt = !1, $t = null, en = null, tn = 0, nn = 1, rn = class e {
	id = nn++;
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
		Kt === null ? Kt = this : (Kt.#n = this, this.#t = Kt), Kt = this;
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
			for (var r of n.d) _t(r, ee), t(r);
			for (r of n.m) _t(r, te), t(r);
		}
		this.#p.add(e);
	}
	#g() {
		this.#e = !0, tn++ > 1e3 && (this.#x(), an());
		for (let e of this.#u) this.#d.delete(e), _t(e, ee), this.schedule(e);
		for (let e of this.#d) _t(e, te), this.schedule(e);
		let t = this.#c;
		this.#c = [], this.apply();
		var n = $t = [], r = [], i = en = [];
		for (let e of t) try {
			this.#_(e, n, r);
		} catch (t) {
			throw fn(e), this.#h() || this.discard(), t;
		}
		if (qt = null, i.length > 0) {
			var a = e.ensure();
			for (let e of i) a.schedule(e);
		}
		if ($t = null, en = null, this.#h()) {
			this.#b(r), this.#b(n);
			for (let [e, t] of this.#f) dn(e, t);
			i.length > 0 && qt.#g();
			return;
		}
		let o = this.#v();
		if (o) {
			this.#b(r), this.#b(n), o.#y(this);
			return;
		}
		this.#u.clear(), this.#d.clear();
		for (let e of this.#r) e(this);
		this.#r.clear(), Jt = this, sn(r), sn(n), Jt = null, this.#s?.resolve();
		var s = qt;
		if (this.#a === 0 && (this.#c.length === 0 || s !== null) && this.#x(), this.#c.length > 0) if (s !== null) {
			let e = s;
			e.#c.push(...this.#c.filter((t) => !e.#c.includes(t)));
		} else s = this;
		s !== null && s.#g();
	}
	#_(e, t, n) {
		e.f ^= D;
		for (var r = e.first; r !== null;) {
			var i = r.f, a = (i & 96) != 0;
			if (!(a && i & 1024 || i & 8192 || this.#f.has(r)) && r.fn !== null) {
				a ? r.f ^= D : i & 4 ? t.push(r) : jr(r) && (i & 16 && this.#d.add(r), Ir(r));
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
					r & 4194320 && !this.async_deriveds.has(i) && (this.#d.delete(i), _t(i, ee), this.schedule(i));
				}
			}
		};
		for (let e of this.current.keys()) t(e);
		this.oncommit(() => e.discard()), e.#x(), qt = this, this.#g();
	}
	#b(e) {
		for (var t = 0; t < e.length; t += 1) bt(e[t], this.#u, this.#d);
	}
	capture(e, n, r = !1) {
		e.v !== t && !this.previous.has(e) && this.previous.set(e, e.v), e.f & 8388608 || (this.current.set(e, [n, r]), Yt?.set(e, n)), this.is_fork || (e.v = n);
	}
	activate() {
		qt = this;
	}
	deactivate() {
		qt = null, Yt = null;
	}
	flush() {
		try {
			Qt = !0, qt = this, this.#g();
		} finally {
			tn = 0, Xt = null, $t = null, en = null, Qt = !1, qt = null, Yt = null, mn.clear();
		}
	}
	discard() {
		for (let e of this.#i) e(this);
		this.#i.clear();
		for (let e of this.async_deriveds.values()) e.reject(Rt);
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
		this.#m || (this.#m = !0, ft(() => {
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
		return (this.#s ??= S()).promise;
	}
	static ensure() {
		if (qt === null) {
			let t = qt = new e();
			!Qt && !Zt && ft(() => {
				t.#e || t.flush();
			});
		}
		return qt;
	}
	apply() {
		Yt = null;
	}
	schedule(e) {
		if (Xt = e, e.b?.is_pending && e.f & 16777228 && !(e.f & 32768)) {
			e.b.defer_effect(e);
			return;
		}
		for (var t = e; t.parent !== null;) {
			t = t.parent;
			var n = t.f;
			if ($t !== null && t === vr && (hr === null || !(hr.f & 2))) return;
			if (n & 96) {
				if (!(n & 1024)) return;
				t.f ^= D;
			}
		}
		this.#c.push(t);
	}
	#x() {
		if (this.linked) {
			var e = this.#t, t = this.#n;
			e === null || (e.#n = t), t === null ? Kt = e : t.#t = e, this.linked = !1;
		}
	}
};
function F(e) {
	var t = Zt;
	Zt = !0;
	try {
		var n;
		for (e && (qt !== null && !qt.is_fork && qt.flush(), n = e());;) {
			if (pt(), qt === null) return n;
			qt.flush();
		}
	} finally {
		Zt = t;
	}
}
function an() {
	try {
		je();
	} catch (e) {
		ht(e, Xt);
	}
}
var on = null;
function sn(e) {
	var t = e.length;
	if (t !== 0) {
		for (var n = 0; n < t;) {
			var r = e[n++];
			if (!(r.f & 24576) && jr(r) && (on = /* @__PURE__ */ new Set(), Ir(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && ar(r), on?.size > 0)) {
				mn.clear();
				for (let e of on) {
					if (e.f & 24576) continue;
					let t = [e], n = e.parent;
					for (; n !== null;) on.has(n) && (on.delete(n), t.push(n)), n = n.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						n.f & 24576 || Ir(n);
					}
				}
				on.clear();
			}
		}
		on = null;
	}
}
function cn(e, t, n, r) {
	if (!n.has(e) && (n.add(e), e.reactions !== null)) for (let i of e.reactions) {
		let e = i.f;
		e & 2 ? cn(i, t, n, r) : e & 4194320 && !(e & 2048) && ln(i, t, r) && (_t(i, ee), un(i));
	}
}
function ln(e, t, n) {
	let r = n.get(e);
	if (r !== void 0) return r;
	if (e.deps !== null) for (let r of e.deps) {
		if (c.call(t, r)) return !0;
		if (r.f & 2 && ln(r, t, n)) return n.set(r, !0), !0;
	}
	return n.set(e, !1), !1;
}
function un(e) {
	qt.schedule(e);
}
function dn(e, t) {
	if (!(e.f & 32 && e.f & 1024)) {
		e.f & 2048 ? t.d.push(e) : e.f & 4096 && t.m.push(e), _t(e, D);
		for (var n = e.first; n !== null;) dn(n, t), n = n.next;
	}
}
function fn(e) {
	_t(e, D);
	for (var t = e.first; t !== null;) fn(t), t = t.next;
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.56.8_@typescript-eslint+types@8.65.0/node_modules/svelte/src/internal/client/reactivity/sources.js
var pn = /* @__PURE__ */ new Set(), mn = /* @__PURE__ */ new Map(), hn = !1;
function gn(e, t) {
	return {
		f: 0,
		v: e,
		reactions: null,
		equals: qe,
		rv: 0,
		wv: 0
	};
}
/*#__NO_SIDE_EFFECTS__*/
function I(e, t) {
	let n = gn(e, t);
	return xr(n), n;
}
/*#__NO_SIDE_EFFECTS__*/
function _n(e, t = !1, n = !0) {
	let r = gn(e);
	return t || (r.equals = Ye), Xe && n && tt !== null && tt.l !== null && (tt.l.s ??= []).push(r), r;
}
function L(e, t, n = !1) {
	return hr !== null && (!gr || hr.f & 131072) && st() && hr.f & 4325394 && (br === null || !br.has(e)) && Ie(), vn(e, n ? Cn(t) : t, en);
}
function vn(e, t, n = null) {
	if (!e.equals(t)) {
		mn.set(e, pr ? t : e.v);
		var r = rn.ensure();
		if (r.capture(e, t), e.f & 2) {
			let t = e;
			e.f & 2048 && Ht(t), Yt === null && vt(t);
		}
		e.wv = Ar(), Sn(e, ee, n), st() && vr !== null && vr.f & 1024 && !(vr.f & 96) && (wr === null ? Tr([e]) : wr.push(e)), !r.is_fork && pn.size > 0 && !hn && yn();
	}
	return t;
}
function yn() {
	hn = !1;
	for (let e of pn) {
		e.f & 1024 && _t(e, te);
		let t;
		try {
			t = jr(e);
		} catch {
			t = !0;
		}
		t && Ir(e);
	}
	pn.clear();
}
function bn(e, t = 1) {
	var n = H(e), r = t === 1 ? n++ : n--;
	return L(e, n), r;
}
function xn(e) {
	L(e, e.v + 1);
}
function Sn(e, t, n) {
	var r = e.reactions;
	if (r !== null) for (var i = st(), a = r.length, o = 0; o < a; o++) {
		var s = r[o], c = s.f;
		if (!(!i && s === vr)) {
			var l = (c & ee) === 0;
			if (l && _t(s, t), c & 131072) pn.add(s);
			else if (c & 2) {
				var u = s;
				Yt?.delete(u), c & 65536 || (c & 512 && (vr === null || !(vr.f & 2097152)) && (s.f |= de), Sn(u, te, n));
			} else if (l) {
				var d = s;
				c & 16 && on !== null && on.add(d), n === null ? un(d) : n.push(d);
			}
		}
	}
}
function Cn(e) {
	if (typeof e != "object" || !e || he in e) return e;
	let n = g(e);
	if (n !== m && n !== h) return e;
	var r = /* @__PURE__ */ new Map(), i = o(e), a = /* @__PURE__ */ I(0), s = null, c = Or, l = (e) => {
		if (Or === c) return e();
		var t = hr, n = Or;
		_r(null), kr(c);
		var r = e();
		return _r(t), kr(n), r;
	};
	return i && r.set("length", /* @__PURE__ */ I(e.length, s)), new Proxy(e, {
		defineProperty(e, t, n) {
			(!("value" in n) || n.configurable === !1 || n.enumerable === !1 || n.writable === !1) && Pe();
			var i = r.get(t);
			return i === void 0 ? l(() => {
				var e = /* @__PURE__ */ I(n.value, s);
				return r.set(t, e), e;
			}) : L(i, n.value, !0), !0;
		},
		deleteProperty(e, n) {
			var i = r.get(n);
			if (i === void 0) {
				if (n in e) {
					let e = l(() => /* @__PURE__ */ I(t, s));
					r.set(n, e), xn(a);
				}
			} else L(i, t), xn(a);
			return !0;
		},
		get(n, i, a) {
			if (i === he) return e;
			var o = r.get(i), c = i in n;
			if (o === void 0 && (!c || f(n, i)?.writable) && (o = l(() => /* @__PURE__ */ I(Cn(c ? n[i] : t), s)), r.set(i, o)), o !== void 0) {
				var u = H(o);
				return u === t ? void 0 : u;
			}
			return Reflect.get(n, i, a);
		},
		getOwnPropertyDescriptor(e, n) {
			var i = Reflect.getOwnPropertyDescriptor(e, n);
			if (i && "value" in i) {
				var a = r.get(n);
				a && (i.value = H(a));
			} else if (i === void 0) {
				var o = r.get(n), s = o?.v;
				if (o !== void 0 && s !== t) return {
					enumerable: !0,
					configurable: !0,
					value: s,
					writable: !0
				};
			}
			return i;
		},
		has(e, n) {
			if (n === he) return !0;
			var i = r.get(n), a = i !== void 0 && i.v !== t || Reflect.has(e, n);
			return (i !== void 0 || vr !== null && (!a || f(e, n)?.writable)) && (i === void 0 && (i = l(() => /* @__PURE__ */ I(a ? Cn(e[n]) : t, s)), r.set(n, i)), H(i) === t) ? !1 : a;
		},
		set(e, n, o, c) {
			var u = r.get(n), d = n in e;
			if (i && n === "length") for (var p = o; p < u.v; p += 1) {
				var m = r.get(p + "");
				m === void 0 ? p in e && (m = l(() => /* @__PURE__ */ I(t, s)), r.set(p + "", m)) : L(m, t);
			}
			if (u === void 0) (!d || f(e, n)?.writable) && (u = l(() => /* @__PURE__ */ I(void 0, s)), L(u, Cn(o)), r.set(n, u));
			else {
				d = u.v !== t;
				var h = l(() => Cn(o));
				L(u, h);
			}
			var g = Reflect.getOwnPropertyDescriptor(e, n);
			if (g?.set && g.set.call(c, o), !d) {
				if (i && typeof n == "string") {
					var _ = r.get("length"), v = Number(n);
					Number.isInteger(v) && v >= _.v && L(_, v + 1);
				}
				xn(a);
			}
			return !0;
		},
		ownKeys(e) {
			H(a);
			var n = Reflect.ownKeys(e).filter((e) => {
				var n = r.get(e);
				return n === void 0 || n.v !== t;
			});
			for (var [i, o] of r) o.v !== t && !(i in e) && n.push(i);
			return n;
		},
		setPrototypeOf() {
			Fe();
		}
	});
}
function wn(e) {
	try {
		if (typeof e == "object" && e && he in e) return e[he];
	} catch {}
	return e;
}
function Tn(e, t) {
	return Object.is(wn(e), wn(t));
}
var En, Dn, On, kn;
function An() {
	if (En === void 0) {
		En = window, Dn = /Firefox/.test(navigator.userAgent);
		var e = Element.prototype, t = Node.prototype, n = Text.prototype;
		On = f(t, "firstChild").get, kn = f(t, "nextSibling").get, _(e) && (e[ye] = void 0, e[ve] = null, e[be] = void 0, e.__e = void 0), _(n) && (n[xe] = void 0);
	}
}
function jn(e = "") {
	return document.createTextNode(e);
}
/*@__NO_SIDE_EFFECTS__*/
function Mn(e) {
	return On.call(e);
}
/*@__NO_SIDE_EFFECTS__*/
function Nn(e) {
	return kn.call(e);
}
function R(e, t) {
	if (!O) return /* @__PURE__ */ Mn(e);
	var n = /* @__PURE__ */ Mn(k);
	if (n === null) n = k.appendChild(jn());
	else if (t && n.nodeType !== 3) {
		var r = jn();
		return n?.before(r), Ue(r), r;
	}
	return t && Ln(n), Ue(n), n;
}
function z(e, t = !1) {
	if (!O) {
		var n = /* @__PURE__ */ Mn(e);
		return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Nn(n) : n;
	}
	if (t) {
		if (k?.nodeType !== 3) {
			var r = jn();
			return k?.before(r), Ue(r), r;
		}
		Ln(k);
	}
	return k;
}
function B(e, t = 1, n = !1) {
	let r = O ? k : e;
	for (var i; t--;) i = r, r = /* @__PURE__ */ Nn(r);
	if (!O) return r;
	if (n) {
		if (r?.nodeType !== 3) {
			var a = jn();
			return r === null ? i?.after(a) : r.before(a), Ue(a), a;
		}
		Ln(r);
	}
	return Ue(r), r;
}
function Pn(e) {
	e.textContent = "";
}
function Fn() {
	return !1;
}
function In(e, t, n) {
	return t == null || t === "http://www.w3.org/1999/xhtml" ? n ? document.createElement(e, { is: n }) : document.createElement(e) : n ? document.createElementNS(t, e, { is: n }) : document.createElementNS(t, e);
}
function Ln(e) {
	if (e.nodeValue.length < 65536) return;
	let t = e.nextSibling;
	for (; t !== null && t.nodeType === 3;) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling;
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.56.8_@typescript-eslint+types@8.65.0/node_modules/svelte/src/internal/client/reactivity/effects.js
function Rn(e) {
	vr === null && (hr === null && Ae(e), ke()), pr && Oe(e);
}
function zn(e, t) {
	var n = t.last;
	n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Bn(e, t) {
	var n = vr;
	n !== null && n.f & 8192 && (e |= ne);
	var r = {
		ctx: tt,
		deps: null,
		nodes: null,
		f: e | ee | 512,
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
	qt?.register_created_effect(r);
	var i = r;
	if (e & 4) $t === null ? rn.ensure().schedule(r) : $t.push(r);
	else if (t !== null) {
		try {
			Ir(r);
		} catch (e) {
			throw rr(r), e;
		}
		i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && !(i.f & 524288) && (i = i.first, e & 16 && e & 65536 && i !== null && (i.f |= oe));
	}
	if (i !== null && (i.parent = n, n !== null && zn(i, n), hr !== null && hr.f & 2 && !(e & 64))) {
		var a = hr;
		(a.effects ??= []).push(i);
	}
	return r;
}
function Vn() {
	return hr !== null && !gr;
}
function Hn(e) {
	let t = Bn(8, null);
	return _t(t, D), t.teardown = e, t;
}
function Un(e) {
	Rn("$effect");
	var t = vr.f;
	if (!hr && t & 32 && tt !== null && !tt.i) {
		var n = tt;
		(n.e ??= []).push(e);
	} else return Wn(e);
}
function Wn(e) {
	return Bn(4 | le, e);
}
function Gn(e) {
	return Rn("$effect.pre"), Bn(8 | le, e);
}
function Kn(e) {
	rn.ensure();
	let t = Bn(64 | ce, e);
	return () => {
		rr(t);
	};
}
function qn(e) {
	rn.ensure();
	let t = Bn(64 | ce, e);
	return (e = {}) => new Promise((n) => {
		e.outro ? or(t, () => {
			rr(t), n(void 0);
		}) : (rr(t), n(void 0));
	});
}
function Jn(e) {
	return Bn(4, e);
}
function Yn(e) {
	return Bn(pe | ce, e);
}
function Xn(e, t = 0) {
	return Bn(8 | t, e);
}
function V(e, t = [], n = [], r = []) {
	Nt(r, t, n, (t) => {
		Bn(8, () => {
			e(...t.map(H));
		});
	});
}
function Zn(e, t = 0) {
	return Bn(16 | t, e);
}
function Qn(e, t = 0) {
	return Bn(E | t, e);
}
function $n(e) {
	return Bn(32 | ce, e);
}
function er(e) {
	var t = e.teardown;
	if (t !== null) {
		let e = pr, n = hr;
		mr(!0), _r(null);
		try {
			t.call(null);
		} finally {
			mr(e), _r(n);
		}
	}
}
function tr(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; n !== null;) {
		let e = n.ac;
		e !== null && Dt(() => {
			e.abort(Ce);
		});
		var r = n.next;
		n.f & 64 ? n.parent = null : rr(n, t), n = r;
	}
}
function nr(e) {
	for (var t = e.first; t !== null;) {
		var n = t.next;
		t.f & 32 || rr(t), t = n;
	}
}
function rr(e, t = !0) {
	var n = !1;
	(t || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (ir(e.nodes.start, e.nodes.end), n = !0), e.f |= ae, tr(e, t && !n), Fr(e, 0);
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (let e of r) e.stop();
	er(e), e.f ^= ae, e.f |= re;
	var i = e.parent;
	i !== null && i.first !== null && ar(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function ir(e, t) {
	for (; e !== null;) {
		var n = e === t ? null : /* @__PURE__ */ Nn(e);
		e.remove(), e = n;
	}
}
function ar(e) {
	var t = e.parent, n = e.prev, r = e.next;
	n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function or(e, t, n = !0) {
	var r = [];
	sr(e, r, !0);
	var i = () => {
		n && rr(e), t && t();
	}, a = r.length;
	if (a > 0) {
		var o = () => --a || i();
		for (var s of r) s.out(o);
	} else i();
}
function sr(e, t, n) {
	if (!(e.f & 8192)) {
		e.f ^= ne;
		var r = e.nodes && e.nodes.t;
		if (r !== null) for (let e of r) (e.is_global || n) && t.push(e);
		for (var i = e.first; i !== null;) {
			var a = i.next;
			if (!(i.f & 64)) {
				var o = (i.f & 65536) != 0 || (i.f & 32) != 0 && (e.f & 16) != 0;
				sr(i, t, o ? n : !1);
			}
			i = a;
		}
	}
}
function cr(e) {
	lr(e, !0);
}
function lr(e, t) {
	if (e.f & 8192) {
		e.f ^= ne, e.f & 1024 || (_t(e, ee), rn.ensure().schedule(e));
		for (var n = e.first; n !== null;) {
			var r = n.next, i = (n.f & 65536) != 0 || (n.f & 32) != 0;
			lr(n, i ? t : !1), n = r;
		}
		var a = e.nodes && e.nodes.t;
		if (a !== null) for (let e of a) (e.is_global || t) && e.in();
	}
}
function ur(e, t) {
	if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
		var i = n === r ? null : /* @__PURE__ */ Nn(n);
		t.append(n), n = i;
	}
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.56.8_@typescript-eslint+types@8.65.0/node_modules/svelte/src/internal/client/legacy.js
var dr = null, fr = !1, pr = !1;
function mr(e) {
	pr = e;
}
var hr = null, gr = !1;
function _r(e) {
	hr = e;
}
var vr = null;
function yr(e) {
	vr = e;
}
var br = null;
function xr(e) {
	hr !== null && (br ??= /* @__PURE__ */ new Set()).add(e);
}
var Sr = null, Cr = 0, wr = null;
function Tr(e) {
	wr = e;
}
var Er = 1, Dr = 0, Or = Dr;
function kr(e) {
	Or = e;
}
function Ar() {
	return ++Er;
}
function jr(e) {
	var t = e.f;
	if (t & 2048) return !0;
	if (t & 2 && (e.f &= ~de), t & 4096) {
		for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
			var a = n[i];
			if (jr(a) && Ut(a), a.wv > e.wv) return !0;
		}
		t & 512 && Yt === null && _t(e, D);
	}
	return !1;
}
function Mr(e, t, n = !0) {
	var r = e.reactions;
	if (r !== null && !(br !== null && br.has(e))) for (var i = 0; i < r.length; i++) {
		var a = r[i];
		a.f & 2 ? Mr(a, t, !1) : t === a && (n ? _t(a, ee) : a.f & 1024 && _t(a, te), un(a));
	}
}
function Nr(e) {
	var t = Sr, n = Cr, r = wr, i = hr, a = br, o = tt, s = gr, c = Or, l = e.f;
	Sr = null, Cr = 0, wr = null, hr = l & 96 ? null : e, br = null, nt(e.ctx), gr = !1, Or = ++Dr, e.ac !== null && (Dt(() => {
		e.ac.abort(Ce);
	}), e.ac = null);
	try {
		e.f |= fe;
		var u = e.fn, d = u();
		e.f |= ie;
		var f = e.deps, p = qt?.is_fork;
		if (Sr !== null) {
			var m;
			if (p || Fr(e, Cr), f !== null && Cr > 0) for (f.length = Cr + Sr.length, m = 0; m < Sr.length; m++) f[Cr + m] = Sr[m];
			else e.deps = f = Sr;
			if (Vn() && e.f & 512) for (m = Cr; m < f.length; m++) (f[m].reactions ??= []).push(e);
		} else !p && f !== null && Cr < f.length && (Fr(e, Cr), f.length = Cr);
		if (st() && wr !== null && !gr && f !== null && !(e.f & 6146)) for (m = 0; m < wr.length; m++) Mr(wr[m], e);
		if (i !== null && i !== e) {
			if (Dr++, i.deps !== null) for (let e = 0; e < n; e += 1) i.deps[e].rv = Dr;
			if (t !== null) for (let e of t) e.rv = Dr;
			wr !== null && (r === null ? r = wr : r.push(...wr));
		}
		return e.f & 8388608 && (e.f ^= me), d;
	} catch (e) {
		return mt(e);
	} finally {
		e.f ^= fe, Sr = t, Cr = n, wr = r, hr = i, br = a, nt(o), gr = s, Or = c;
	}
}
function Pr(e, n) {
	let r = n.reactions;
	if (r !== null) {
		var i = s.call(r, e);
		if (i !== -1) {
			var a = r.length - 1;
			a === 0 ? r = n.reactions = null : (r[i] = r[a], r.pop());
		}
	}
	if (r === null && n.f & 2 && (Sr === null || !c.call(Sr, n))) {
		var o = n;
		o.f & 512 && (o.f ^= 512, o.f &= ~de), o.v !== t && vt(o), o.ac !== null && Dt(() => {
			o.ac.abort(Ce), o.ac = null, _t(o, ee);
		}), Wt(o), Fr(o, 0);
	}
}
function Fr(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) Pr(e, n[r]);
}
function Ir(e) {
	var t = e.f;
	if (!(t & 16384)) {
		_t(e, D);
		var n = vr, r = fr;
		vr = e, fr = (t & 96) == 0;
		try {
			t & 16777232 ? nr(e) : tr(e), er(e);
			var i = Nr(e);
			e.teardown = typeof i == "function" ? i : null, e.wv = Er;
		} finally {
			fr = r, vr = n;
		}
	}
}
async function Lr() {
	await Promise.resolve(), F();
}
function H(e) {
	var t = (e.f & 2) != 0;
	if (dr?.add(e), hr !== null && !gr && !(vr !== null && vr.f & 16384) && (br === null || !br.has(e))) {
		var n = hr.deps;
		if (hr.f & 2097152) e.rv < Dr && (e.rv = Dr, Sr === null && n !== null && n[Cr] === e ? Cr++ : Sr === null ? Sr = [e] : Sr.push(e));
		else {
			hr.deps ??= [], c.call(hr.deps, e) || hr.deps.push(e);
			var r = e.reactions;
			r === null ? e.reactions = [hr] : c.call(r, hr) || r.push(hr);
		}
	}
	if (pr && mn.has(e)) return mn.get(e);
	if (t) {
		var i = e;
		if (pr) {
			var a = i.v;
			return (!(i.f & 1024) && i.reactions !== null || zr(i)) && (a = Ht(i)), mn.set(i, a), a;
		}
		var o = (i.f & 512) == 0 && !gr && hr !== null && (fr || (hr.f & 512) != 0), s = (i.f & ie) === 0;
		jr(i) && (o && (i.f |= 512), Ut(i)), o && !s && (Gt(i), Rr(i));
	}
	if (Yt?.has(e)) return Yt.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function Rr(e) {
	if (e.f |= 512, e.deps !== null) for (let t of e.deps) (t.reactions ??= []).push(e), t.f & 2 && !(t.f & 512) && (Gt(t), Rr(t));
}
function zr(e) {
	if (e.v === t) return !0;
	if (e.deps === null) return !1;
	for (let t of e.deps) if (mn.has(t) || t.f & 2 && zr(t)) return !0;
	return !1;
}
function Br(e) {
	var t = gr;
	try {
		return gr = !0, e();
	} finally {
		gr = t;
	}
}
function Vr(e) {
	if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
		if (he in e) Hr(e);
		else if (!Array.isArray(e)) for (let t in e) {
			let n = e[t];
			typeof n == "object" && n && he in n && Hr(n);
		}
	}
}
function Hr(e, t = /* @__PURE__ */ new Set()) {
	if (typeof e == "object" && e && !(e instanceof EventTarget) && !t.has(e)) {
		t.add(e), e instanceof Date && e.getTime();
		for (let n in e) try {
			Hr(e[n], t);
		} catch {}
		let n = g(e);
		if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
			let t = p(n);
			for (let n in t) {
				let r = t[n].get;
				if (r) try {
					r.call(e);
				} catch {}
			}
		}
	}
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.56.8_@typescript-eslint+types@8.65.0/node_modules/svelte/src/internal/client/dom/elements/events.js
var Ur = Symbol("events"), Wr = /* @__PURE__ */ new Set(), Gr = /* @__PURE__ */ new Set();
function Kr(e, t, n, r = {}) {
	function i(e) {
		if (r.capture || Qr.call(t, e), !e.cancelBubble) return Dt(() => n?.call(this, e));
	}
	return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? ft(() => {
		t.addEventListener(e, i, r);
	}) : t.addEventListener(e, i, r), i;
}
function qr(e, t, n, r = {}) {
	var i = Kr(t, e, n, r);
	return () => {
		e.removeEventListener(t, i, r);
	};
}
function Jr(e, t, n, r, i) {
	var a = {
		capture: r,
		passive: i
	}, o = Kr(e, t, n, a);
	(t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && Hn(() => {
		t.removeEventListener(e, o, a);
	});
}
function Yr(e, t, n) {
	(t[Ur] ??= {})[e] = n;
}
function Xr(e) {
	for (var t = 0; t < e.length; t++) Wr.add(e[t]);
	for (var n of Gr) n(e);
}
var Zr = null;
function Qr(e) {
	var t = this, n = t.ownerDocument, r = e.type, i = e.composedPath?.() || [], a = i[0] || e.target;
	Zr = e;
	var o = 0, s = Zr === e && e[Ur];
	if (s) {
		var c = i.indexOf(s);
		if (c !== -1 && (t === document || t === window)) {
			e[Ur] = t;
			return;
		}
		var l = i.indexOf(t);
		if (l === -1) return;
		c <= l && (o = c);
	}
	if (a = i[o] || e.target, a !== t) {
		d(e, "currentTarget", {
			configurable: !0,
			get() {
				return a || n;
			}
		});
		var u = hr, f = vr;
		_r(null), yr(null);
		try {
			for (var p, m = []; a !== null && a !== t;) {
				try {
					var h = a[Ur]?.[r];
					h != null && (!a.disabled || e.target === a) && h.call(a, e);
				} catch (e) {
					p ? m.push(e) : p = e;
				}
				if (e.cancelBubble) break;
				o++, a = o < i.length ? i[o] : null;
			}
			if (p) {
				for (let e of m) queueMicrotask(() => {
					throw e;
				});
				throw p;
			}
		} finally {
			e[Ur] = t, delete e.currentTarget, _r(u), yr(f);
		}
	}
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.56.8_@typescript-eslint+types@8.65.0/node_modules/svelte/src/internal/client/dom/reconciler.js
var $r = globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function ei(e) {
	return $r?.createHTML(e) ?? e;
}
function ti(e) {
	var t = In("template");
	return t.innerHTML = ei(e.replaceAll("<!>", "<!---->")), t.content;
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.56.8_@typescript-eslint+types@8.65.0/node_modules/svelte/src/internal/client/dom/template.js
function ni(e, t) {
	var n = vr;
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
		if (O) return ni(k, null), k;
		i === void 0 && (i = ti(a ? e : "<!>" + e), n || (i = /* @__PURE__ */ Mn(i)));
		var t = r || Dn ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = /* @__PURE__ */ Mn(t), s = t.lastChild;
			ni(o, s);
		} else ni(t, t);
		return t;
	};
}
/*#__NO_SIDE_EFFECTS__*/
function ri(e, t, n = "svg") {
	var r = !e.startsWith("<!>"), i = (t & 1) != 0, a = `<${n}>${r ? e : "<!>" + e}</${n}>`, o;
	return () => {
		if (O) return ni(k, null), k;
		if (!o) {
			var e = /* @__PURE__ */ Mn(ti(a));
			if (i) for (o = document.createDocumentFragment(); /* @__PURE__ */ Mn(e);) o.appendChild(/* @__PURE__ */ Mn(e));
			else o = /* @__PURE__ */ Mn(e);
		}
		var t = o.cloneNode(!0);
		if (i) {
			var n = /* @__PURE__ */ Mn(t), r = t.lastChild;
			ni(n, r);
		} else ni(t, t);
		return t;
	};
}
/*#__NO_SIDE_EFFECTS__*/
function W(e, t) {
	return /* @__PURE__ */ ri(e, t, "svg");
}
function ii(e = "") {
	if (!O) {
		var t = jn(e + "");
		return ni(t, t), t;
	}
	var n = k;
	return n.nodeType === 3 ? Ln(n) : (n.before(n = jn()), Ue(n)), ni(n, n), n;
}
function G() {
	if (O) return ni(k, null), k;
	var e = document.createDocumentFragment(), t = document.createComment(""), n = jn();
	return e.append(t, n), ni(t, n), e;
}
function K(e, t) {
	if (O) {
		var n = vr;
		(!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = k), We();
		return;
	}
	e !== null && e.before(t);
}
function ai() {
	if (O && k && k.nodeType === 8 && k.textContent?.startsWith("$")) {
		let e = k.textContent.substring(1);
		return We(), e;
	}
	return (window.__svelte ??= {}).uid ??= 1, `c${window.__svelte.uid++}`;
}
function oi(e) {
	return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
var si = [
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
function ci(e) {
	return si.includes(e);
}
var li = /* @__PURE__ */ "allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback".split("."), ui = {
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
function di(e) {
	return e = e.toLowerCase(), ui[e] ?? e;
}
[...li];
var fi = ["touchstart", "touchmove"];
function pi(e) {
	return fi.includes(e);
}
var mi = [
	"textarea",
	"script",
	"style",
	"title"
];
function hi(e) {
	return mi.includes(e);
}
function gi(e, t) {
	var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
	n !== (e[xe] ??= e.nodeValue) && (e[xe] = n, e.nodeValue = `${n}`);
}
function _i(e, t) {
	return bi(e, t);
}
function vi(t, n) {
	An(), n.intro = n.intro ?? !1;
	let r = n.target, i = O, a = k;
	try {
		for (var o = /* @__PURE__ */ Mn(r); o && (o.nodeType !== 8 || o.data !== "[");) o = /* @__PURE__ */ Nn(o);
		if (!o) throw e;
		He(!0), Ue(o);
		let i = bi(t, {
			...n,
			anchor: o
		});
		return He(!1), i;
	} catch (i) {
		if (i instanceof Error && i.message.split("\n").some((e) => e.startsWith("https://svelte.dev/e/"))) throw i;
		return i !== e && console.warn("Failed to hydrate: ", i), n.recover === !1 && Me(), An(), Pn(r), He(!1), _i(t, n);
	} finally {
		He(i), Ue(a);
	}
}
var yi = /* @__PURE__ */ new Map();
function bi(t, { target: n, anchor: r, props: i = {}, events: a, context: o, intro: s = !0, transformError: c }) {
	An();
	var u = void 0, d = qn(() => {
		var s = r ?? n.appendChild(jn());
		jt(s, { pending: () => {} }, (n) => {
			M({});
			var r = tt;
			if (o && (r.c = o), a && (i.$$events = a), O && ni(n, null), u = t(n, i) || {}, O && (vr.nodes.end = k, k === null || k.nodeType !== 8 || k.data !== "]")) throw ze(), e;
			N();
		}, c);
		var d = /* @__PURE__ */ new Set(), f = (e) => {
			for (var t = 0; t < e.length; t++) {
				var r = e[t];
				if (!d.has(r)) {
					d.add(r);
					var i = pi(r);
					for (let e of [n, document]) {
						var a = yi.get(e);
						a === void 0 && (a = /* @__PURE__ */ new Map(), yi.set(e, a));
						var o = a.get(r);
						o === void 0 ? (e.addEventListener(r, Qr, { passive: i }), a.set(r, 1)) : a.set(r, o + 1);
					}
				}
			}
		};
		return f(l(Wr)), Gr.add(f), () => {
			for (var e of d) for (let r of [n, document]) {
				var t = yi.get(r), i = t.get(e);
				--i == 0 ? (r.removeEventListener(e, Qr), t.delete(e), t.size === 0 && yi.delete(r)) : t.set(e, i);
			}
			Gr.delete(f), s !== r && s.parentNode?.removeChild(s);
		};
	});
	return xi.set(u, d), u;
}
var xi = /* @__PURE__ */ new WeakMap();
function Si(e, t) {
	let n = xi.get(e);
	return n ? (xi.delete(e), n(t)) : Promise.resolve();
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.56.8_@typescript-eslint+types@8.65.0/node_modules/svelte/src/internal/client/dom/blocks/branches.js
var Ci = class {
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
			if (n) cr(n), this.#r.delete(t);
			else {
				var r = this.#n.get(t);
				r && (cr(r.effect), this.#t.set(t, r.effect), this.#n.delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), n = r.effect);
			}
			for (let [t, n] of this.#e) {
				if (this.#e.delete(t), t === e) break;
				let r = this.#n.get(n);
				r && (rr(r.effect), this.#n.delete(n));
			}
			for (let [e, r] of this.#t) {
				if (e === t || this.#r.has(e)) continue;
				let i = () => {
					if (Array.from(this.#e.values()).includes(e)) {
						var t = document.createDocumentFragment();
						ur(r, t), t.append(jn()), this.#n.set(e, {
							effect: r,
							fragment: t
						});
					} else rr(r);
					this.#r.delete(e), this.#t.delete(e);
				};
				this.#i || !n ? (this.#r.add(e), or(r, i, !1)) : i();
			}
		}
	};
	#o = (e) => {
		this.#e.delete(e);
		let t = Array.from(this.#e.values());
		for (let [e, n] of this.#n) t.includes(e) || (rr(n.effect), this.#n.delete(e));
	};
	ensure(e, t) {
		var n = qt, r = Fn();
		if (t && !this.#t.has(e) && !this.#n.has(e)) if (r) {
			var i = document.createDocumentFragment(), a = jn();
			i.append(a), this.#n.set(e, {
				effect: $n(() => t(a)),
				fragment: i
			});
		} else this.#t.set(e, $n(() => t(this.anchor)));
		if (this.#e.set(n, e), r) {
			for (let [t, r] of this.#t) t === e ? n.unskip_effect(r) : n.skip_effect(r);
			for (let [t, r] of this.#n) t === e ? n.unskip_effect(r.effect) : n.skip_effect(r.effect);
			n.oncommit(this.#a), n.ondiscard(this.#o);
		} else O && (this.anchor = k), this.#a(n);
	}
};
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.56.8_@typescript-eslint+types@8.65.0/node_modules/svelte/src/internal/client/dom/blocks/snippet.js
function q(e, t, ...n) {
	var r = new Ci(e);
	Zn(() => {
		let e = t() ?? null;
		r.ensure(e, e && ((t) => e(t, ...n)));
	}, oe);
}
function wi(e) {
	tt === null && Te("onMount"), Xe && tt.l !== null ? Ei(tt).m.push(e) : Un(() => {
		let t = Br(e);
		if (typeof t == "function") return t;
	});
}
function Ti(e) {
	tt === null && Te("onDestroy"), wi(() => () => Br(e));
}
function Ei(e) {
	var t = e.l;
	return t.u ??= {
		a: [],
		b: [],
		m: []
	};
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.56.8_@typescript-eslint+types@8.65.0/node_modules/svelte/src/attachments/index.js
function Di() {
	return Symbol(a);
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.56.8_@typescript-eslint+types@8.65.0/node_modules/svelte/src/internal/client/dom/blocks/if.js
function J(e, t, n = !1) {
	var r;
	O && (r = k, We());
	var i = new Ci(e), a = n ? oe : 0;
	function o(e, t) {
		if (O) {
			var n = Ke(r);
			if (e !== parseInt(n.substring(1))) {
				var a = Ge();
				Ue(a), i.anchor = a, He(!1), i.ensure(e, t), He(!0);
				return;
			}
		}
		i.ensure(e, t);
	}
	Zn(() => {
		var e = !1;
		t((t, n = 0) => {
			e = !0, o(n, t);
		}), e || o(-1, null);
	}, a);
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.56.8_@typescript-eslint+types@8.65.0/node_modules/svelte/src/internal/client/dom/blocks/key.js
var Oi = Symbol("NaN");
function ki(e, t, n) {
	O && We();
	var r = new Ci(e), i = !st();
	Zn(() => {
		var e = t();
		e !== e && (e = Oi), i && typeof e == "object" && e && (e = {}), r.ensure(e, n);
	});
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.56.8_@typescript-eslint+types@8.65.0/node_modules/svelte/src/internal/client/dom/blocks/css-props.js
function Ai(e, t) {
	O && Ue(/* @__PURE__ */ Mn(e)), Xn(() => {
		var n = t();
		for (var r in n) {
			var i = n[r];
			i ? e.style.setProperty(r, i) : e.style.removeProperty(r);
		}
	});
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.56.8_@typescript-eslint+types@8.65.0/node_modules/svelte/src/internal/client/dom/blocks/each.js
function ji(e, t) {
	return t;
}
function Mi(e, t, n) {
	for (var r = [], i = t.length, a, o = t.length, s = 0; s < i; s++) {
		let n = t[s];
		or(n, () => {
			if (a) {
				if (a.pending.delete(n), a.done.add(n), a.pending.size === 0) {
					var t = e.outrogroups;
					Ni(e, l(a.done)), t.delete(a), t.size === 0 && (e.outrogroups = null);
				}
			} else --o;
		}, !1);
	}
	if (o === 0) {
		var c = r.length === 0 && n !== null;
		if (c) {
			var u = n, d = u.parentNode;
			Pn(d), d.append(u), e.items.clear();
		}
		Ni(e, t, !c);
	} else a = {
		pending: new Set(t),
		done: /* @__PURE__ */ new Set()
	}, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(a);
}
function Ni(e, t, n = !0) {
	var r;
	if (e.pending.size > 0) {
		r = /* @__PURE__ */ new Set();
		for (let t of e.pending.values()) for (let n of t) r.add(e.items.get(n).e);
	}
	for (var i = 0; i < t.length; i++) {
		var a = t[i];
		r?.has(a) ? (a.f |= ue, ur(a, document.createDocumentFragment())) : rr(t[i], n);
	}
}
var Pi;
function Fi(e, t, n, r, i, a = null) {
	var s = e, c = /* @__PURE__ */ new Map();
	if (t & 4) {
		var u = e;
		s = O ? Ue(/* @__PURE__ */ Mn(u)) : u.appendChild(jn());
	}
	O && We();
	var d = null, f = /* @__PURE__ */ Bt(() => {
		var e = n();
		return o(e) ? e : e == null ? [] : l(e);
	}), p, m = /* @__PURE__ */ new Map(), h = !0;
	function g(e) {
		v.effect.f & 16384 || (v.pending.delete(e), v.fallback = d, Li(v, p, s, t, r), d !== null && (p.length === 0 ? d.f & 33554432 ? (d.f ^= ue, zi(d, null, s)) : cr(d) : or(d, () => {
			d = null;
		})));
	}
	function _(e) {
		v.pending.delete(e);
	}
	var v = {
		effect: Zn(() => {
			p = H(f);
			var e = p.length;
			let o = !1;
			O && Ke(s) === "[!" != (e === 0) && (s = Ge(), Ue(s), He(!1), o = !0);
			for (var l = /* @__PURE__ */ new Set(), u = qt, v = Fn(), y = 0; y < e; y += 1) {
				O && k.nodeType === 8 && k.data === "]" && (s = k, o = !0, He(!1));
				var b = p[y], x = r(b, y), S = h ? null : c.get(x);
				S ? (S.v && vn(S.v, b), S.i && vn(S.i, y), v && u.unskip_effect(S.e)) : (S = Ri(c, h ? s : Pi ??= jn(), b, x, y, i, t, n), h || (S.e.f |= ue), c.set(x, S)), l.add(x);
			}
			if (e === 0 && a && !d && (h ? d = $n(() => a(s)) : (d = $n(() => a(Pi ??= jn())), d.f |= ue)), e > l.size && De("", "", ""), O && e > 0 && Ue(Ge()), !h) if (m.set(u, l), v) {
				for (let [e, t] of c) l.has(e) || u.skip_effect(t.e);
				u.oncommit(g), u.ondiscard(_);
			} else g(u);
			o && He(!0), H(f);
		}),
		flags: t,
		items: c,
		pending: m,
		outrogroups: null,
		fallback: d
	};
	h = !1, O && (s = k);
}
function Ii(e) {
	for (; e !== null && !(e.f & 32);) e = e.next;
	return e;
}
function Li(e, t, n, r, i) {
	var a = (r & 8) != 0, o = t.length, s = e.items, c = Ii(e.effect.first), u, d = null, f, p = [], m = [], h, g, _, v;
	if (a) for (v = 0; v < o; v += 1) h = t[v], g = i(h, v), _ = s.get(g).e, _.f & 33554432 || (_.nodes?.a?.measure(), (f ??= /* @__PURE__ */ new Set()).add(_));
	for (v = 0; v < o; v += 1) {
		if (h = t[v], g = i(h, v), _ = s.get(g).e, e.outrogroups !== null) for (let t of e.outrogroups) t.pending.delete(_), t.done.delete(_);
		if (_.f & 8192 && (cr(_), a && (_.nodes?.a?.unfix(), (f ??= /* @__PURE__ */ new Set()).delete(_))), _.f & 33554432) if (_.f ^= ue, _ === c) zi(_, null, n);
		else {
			var y = d ? d.next : c;
			_ === e.effect.last && (e.effect.last = _.prev), _.prev && (_.prev.next = _.next), _.next && (_.next.prev = _.prev), Bi(e, d, _), Bi(e, _, y), zi(_, y, n), d = _, p = [], m = [], c = Ii(d.next);
			continue;
		}
		if (_ !== c) {
			if (u !== void 0 && u.has(_)) {
				if (p.length < m.length) {
					var b = m[0], x;
					d = b.prev;
					var S = p[0], C = p[p.length - 1];
					for (x = 0; x < p.length; x += 1) zi(p[x], b, n);
					for (x = 0; x < m.length; x += 1) u.delete(m[x]);
					Bi(e, S.prev, C.next), Bi(e, d, S), Bi(e, C, b), c = b, d = C, --v, p = [], m = [];
				} else u.delete(_), zi(_, c, n), Bi(e, _.prev, _.next), Bi(e, _, d === null ? e.effect.first : d.next), Bi(e, d, _), d = _;
				continue;
			}
			for (p = [], m = []; c !== null && c !== _;) (u ??= /* @__PURE__ */ new Set()).add(c), m.push(c), c = Ii(c.next);
			if (c === null) continue;
		}
		_.f & 33554432 || p.push(_), d = _, c = Ii(_.next);
	}
	if (e.outrogroups !== null) {
		for (let t of e.outrogroups) t.pending.size === 0 && (Ni(e, l(t.done)), e.outrogroups?.delete(t));
		e.outrogroups.size === 0 && (e.outrogroups = null);
	}
	if (c !== null || u !== void 0) {
		var w = [];
		if (u !== void 0) for (_ of u) _.f & 8192 || w.push(_);
		for (; c !== null;) !(c.f & 8192) && c !== e.fallback && w.push(c), c = Ii(c.next);
		var T = w.length;
		if (T > 0) {
			var E = r & 4 && o === 0 ? n : null;
			if (a) {
				for (v = 0; v < T; v += 1) w[v].nodes?.a?.measure();
				for (v = 0; v < T; v += 1) w[v].nodes?.a?.fix();
			}
			Mi(e, w, E);
		}
	}
	a && ft(() => {
		if (f !== void 0) for (_ of f) _.nodes?.a?.apply();
	});
}
function Ri(e, t, n, r, i, a, o, s) {
	var c = o & 1 ? o & 16 ? gn(n) : /* @__PURE__ */ _n(n, !1, !1) : null, l = o & 2 ? gn(i) : null;
	return {
		v: c,
		i: l,
		e: $n(() => (a(t, c ?? n, l ?? i, s), () => {
			e.delete(r);
		}))
	};
}
function zi(e, t, n) {
	if (e.nodes) for (var r = e.nodes.start, i = e.nodes.end, a = t && !(t.f & 33554432) ? t.nodes.start : n; r !== null;) {
		var o = /* @__PURE__ */ Nn(r);
		if (a.before(r), r === i) return;
		r = o;
	}
}
function Bi(e, t, n) {
	t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function Vi(t, n, a = !1, o = !1, s = !1, c = !1) {
	var l = t, u = "";
	if (a) {
		var d = t;
		O && (l = Ue(/* @__PURE__ */ Mn(d)));
	}
	V(() => {
		var t = vr;
		if (u === (u = n() ?? "")) {
			O && We();
			return;
		}
		if (a && !O) {
			t.nodes = null, d.innerHTML = u, u !== "" && ni(/* @__PURE__ */ Mn(d), d.lastChild);
			return;
		}
		if (t.nodes !== null && (ir(t.nodes.start, t.nodes.end), t.nodes = null), u !== "") {
			if (O) {
				for (var c = k.data, f = We(), p = f; f !== null && (f.nodeType !== 8 || f.data !== "");) p = f, f = /* @__PURE__ */ Nn(f);
				if (f === null) throw ze(), e;
				ni(k, p), l = Ue(f);
				return;
			}
			var m = In(o ? "svg" : s ? "math" : "template", o ? r : s ? i : void 0);
			m.innerHTML = u;
			var h = o || s ? m : m.content;
			if (ni(/* @__PURE__ */ Mn(h), h.lastChild), o || s) for (; /* @__PURE__ */ Mn(h);) l.before(/* @__PURE__ */ Mn(h));
			else l.before(h);
		}
	});
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.56.8_@typescript-eslint+types@8.65.0/node_modules/svelte/src/internal/client/dom/blocks/svelte-component.js
function Hi(e, t, n) {
	var r;
	O && (r = k, We());
	var i = new Ci(e);
	Zn(() => {
		var e = t() ?? null;
		if (O && Ke(r) === "[" != (e !== null)) {
			var a = Ge();
			Ue(a), i.anchor = a, He(!1), i.ensure(e, e && ((t) => n(t, e))), He(!0);
			return;
		}
		i.ensure(e, e && ((t) => n(t, e)));
	}, oe);
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.56.8_@typescript-eslint+types@8.65.0/node_modules/svelte/src/internal/client/dom/blocks/svelte-element.js
function Ui(e, t, n, i, a, o) {
	let s = O;
	O && We();
	var c = null;
	O && k.nodeType === 1 && (c = k, We());
	var l = O ? k : e, u = new Ci(l, !1);
	Zn(() => {
		let e = t() || null;
		var o = a ? a() : n || e === "svg" ? r : void 0;
		if (e === null) {
			u.ensure(null, null);
			return;
		}
		return u.ensure(e, (t) => {
			if (e) {
				if (c = O ? c : In(e, o), ni(c, c), i) {
					var n = null;
					O && hi(e) && c.append(n = document.createComment(""));
					var r = O ? /* @__PURE__ */ Mn(c) : c.appendChild(jn());
					O && (r === null ? He(!1) : Ue(r)), i(c, r), n?.remove();
				}
				vr.nodes.end = c, t.before(c);
			}
			O && Ue(t);
		}), () => {};
	}, oe), Hn(() => {}), s && (He(!0), Ue(l));
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.56.8_@typescript-eslint+types@8.65.0/node_modules/svelte/src/internal/client/dom/blocks/svelte-head.js
function Wi(e, t) {
	let n = null, r = O;
	var i;
	if (O) {
		n = k;
		for (var a = /* @__PURE__ */ Mn(document.head); a !== null && (a.nodeType !== 8 || a.data !== e);) a = /* @__PURE__ */ Nn(a);
		if (a === null) He(!1);
		else {
			var o = /* @__PURE__ */ Nn(a);
			a.remove(), Ue(o);
		}
	}
	O || (i = document.head.appendChild(jn()));
	try {
		Zn(() => {
			var e = $n(() => t(i));
			e.f |= se;
		});
	} finally {
		r && (He(!0), Ue(n));
	}
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.56.8_@typescript-eslint+types@8.65.0/node_modules/svelte/src/internal/client/dom/css.js
function Gi(e, t) {
	Jn(() => {
		var n = e.getRootNode(), r = n.host ? n : n.head ?? n.ownerDocument.head;
		if (!r.querySelector("#" + t.hash)) {
			let e = In("style");
			e.id = t.hash, e.textContent = t.code, r.appendChild(e);
		}
	});
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.56.8_@typescript-eslint+types@8.65.0/node_modules/svelte/src/internal/client/dom/elements/actions.js
function Ki(e, t, n) {
	Jn(() => {
		var r = Br(() => t(e, n?.()) || {});
		if (n && r?.update) {
			var i = !1, a = {};
			Xn(() => {
				var e = n();
				Vr(e), i && Je(a, e) && (a = e, r.update(e));
			}), i = !0;
		}
		if (r?.destroy) return () => r.destroy();
	});
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.56.8_@typescript-eslint+types@8.65.0/node_modules/svelte/src/internal/client/dom/elements/attachments.js
function qi(e, t) {
	var n = void 0, r;
	Qn(() => {
		n !== (n = t()) && (r &&= (rr(r), null), n && (r = $n(() => {
			Jn(() => n(e));
		})));
	});
}
//#endregion
//#region ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
function Ji(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") if (Array.isArray(e)) {
		var i = e.length;
		for (t = 0; t < i; t++) e[t] && (n = Ji(e[t])) && (r && (r += " "), r += n);
	} else for (n in e) e[n] && (r && (r += " "), r += n);
	return r;
}
function Yi() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = Ji(e)) && (r && (r += " "), r += t);
	return r;
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.56.8_@typescript-eslint+types@8.65.0/node_modules/svelte/src/internal/shared/attributes.js
function Xi(e) {
	return typeof e == "object" ? Yi(e) : e ?? "";
}
var Zi = [..." 	\n\r\f\xA0\v﻿"];
function Qi(e, t, n) {
	var r = e == null ? "" : "" + e;
	if (t && (r = r ? r + " " + t : t), n) {
		for (var i of Object.keys(n)) if (n[i]) r = r ? r + " " + i : i;
		else if (r.length) for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0;) {
			var s = o + a;
			(o === 0 || Zi.includes(r[o - 1])) && (s === r.length || Zi.includes(r[s])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(s + 1) : o = s;
		}
	}
	return r === "" ? null : r;
}
function $i(e, t = !1) {
	var n = t ? " !important;" : ";", r = "";
	for (var i of Object.keys(e)) {
		var a = e[i];
		a != null && a !== "" && (r += " " + i + ": " + a + n);
	}
	return r;
}
function ea(e) {
	return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function ta(e, t) {
	if (t) {
		var n = "", r, i;
		if (Array.isArray(t) ? (r = t[0], i = t[1]) : r = t, e) {
			e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
			var a = !1, o = 0, s = !1, c = [];
			r && c.push(...Object.keys(r).map(ea)), i && c.push(...Object.keys(i).map(ea));
			var l = 0, u = -1;
			let t = e.length;
			for (var d = 0; d < t; d++) {
				var f = e[d];
				if (s ? f === "/" && e[d - 1] === "*" && (s = !1) : a ? a === f && (a = !1) : f === "/" && e[d + 1] === "*" ? s = !0 : f === "\"" || f === "'" ? a = f : f === "(" ? o++ : f === ")" && o--, !s && a === !1 && o === 0) {
					if (f === ":" && u === -1) u = d;
					else if (f === ";" || d === t - 1) {
						if (u !== -1) {
							var p = ea(e.substring(l, u).trim());
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
		return r && (n += $i(r)), i && (n += $i(i, !0)), n = n.trim(), n === "" ? null : n;
	}
	return e == null ? null : String(e);
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.56.8_@typescript-eslint+types@8.65.0/node_modules/svelte/src/internal/client/dom/elements/class.js
function na(e, t, n, r, i, a) {
	var o = e[ye];
	if (O || o !== n || o === void 0) {
		var s = Qi(n, r, a);
		(!O || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e[ye] = n;
	} else if (a && i !== a) for (var c in a) {
		var l = !!a[c];
		(i == null || l !== !!i[c]) && e.classList.toggle(c, l);
	}
	return a;
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.56.8_@typescript-eslint+types@8.65.0/node_modules/svelte/src/internal/client/dom/elements/style.js
function ra(e, t = {}, n, r) {
	for (var i in n) {
		var a = n[i];
		t[i] !== a && (n[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, a, r));
	}
}
function ia(e, t, n, r) {
	var i = e[be];
	if (O || i !== t) {
		var a = ta(t, r);
		(!O || a !== e.getAttribute("style")) && (a == null ? e.removeAttribute("style") : e.style.cssText = a), e[be] = t;
	} else r && (Array.isArray(r) ? (ra(e, n?.[0], r[0]), ra(e, n?.[1], r[1], "important")) : ra(e, n, r));
	return r;
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.56.8_@typescript-eslint+types@8.65.0/node_modules/svelte/src/internal/client/dom/elements/bindings/select.js
function aa(e, t, n = !1) {
	if (e.multiple) {
		if (t == null) return;
		if (!o(t)) return Be();
		for (var r of e.options) r.selected = t.includes(sa(r));
		return;
	}
	for (r of e.options) if (Tn(sa(r), t)) {
		r.selected = !0;
		return;
	}
	(!n || t !== void 0) && (e.selectedIndex = -1);
}
function oa(e) {
	var t = new MutationObserver(() => {
		"__value" in e && aa(e, e.__value);
	});
	t.observe(e, {
		childList: !0,
		subtree: !0,
		attributes: !0,
		attributeFilter: ["value"]
	}), Hn(() => {
		t.disconnect();
	});
}
function sa(e) {
	return "__value" in e ? e.__value : e.value;
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.56.8_@typescript-eslint+types@8.65.0/node_modules/svelte/src/internal/client/dom/elements/attributes.js
var ca = Symbol("class"), la = Symbol("style"), ua = Symbol("is custom element"), da = Symbol("is html"), fa = we ? "link" : "LINK", pa = we ? "input" : "INPUT", ma = we ? "option" : "OPTION", ha = we ? "select" : "SELECT", ga = we ? "progress" : "PROGRESS";
function _a(e) {
	if (O) {
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
		e[Se] = n, ft(n), Et();
	}
}
function va(e, t) {
	var n = Ca(e);
	n.value === (n.value = t ?? void 0) || e.value === t && (t !== 0 || e.nodeName !== ga) || (e.value = t ?? "");
}
function ya(e, t) {
	var n = Ca(e);
	n.checked !== (n.checked = t ?? void 0) && (e.checked = t);
}
function ba(e, t) {
	t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function Y(e, t, n, r) {
	var i = Ca(e);
	O && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === fa) || i[t] !== (i[t] = n) && (t === "loading" && (e[_e] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Ta(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function xa(e, n, r, i, a = !1, o = !1) {
	if (O && a && e.nodeName === pa) {
		var s = e;
		(s.type === "checkbox" ? "defaultChecked" : "defaultValue") in r || _a(s);
	}
	var c = Ca(e), l = c[ua], u = !c[da];
	let d = O && l;
	d && He(!1);
	var f = n || {}, p = e.nodeName === ma;
	for (var m in n) m in r || (r[m] = null);
	r.class ? r.class = Xi(r.class) : (i || r[ca]) && (r.class = null), r[la] && (r.style ??= null);
	var h = Ta(e);
	if (e.nodeName === pa && "type" in r && ("value" in r || "__value" in r)) {
		var g = r.type;
		(g !== f.type || g === void 0 && e.hasAttribute("type")) && (f.type = g, Y(e, "type", g, o));
	}
	for (let a in r) {
		let s = r[a];
		if (p && a === "value" && s == null) {
			e.value = e.__value = "", f[a] = s;
			continue;
		}
		if (a === "class") {
			na(e, e.namespaceURI === "http://www.w3.org/1999/xhtml", s, i, n?.[ca], r[ca]), f[a] = s, f[ca] = r[ca];
			continue;
		}
		if (a === "style") {
			ia(e, s, n?.[la], r[la]), f[a] = s, f[la] = r[la];
			continue;
		}
		var _ = f[a];
		if (!(s === _ && !(s === void 0 && e.hasAttribute(a)))) {
			f[a] = s;
			var v = a[0] + a[1];
			if (v !== "$$") if (v === "on") {
				let t = {}, n = "$$" + a, r = a.slice(2);
				var y = ci(r);
				if (oi(r) && (r = r.slice(0, -7), t.capture = !0), !y && _) {
					if (s != null) continue;
					e.removeEventListener(r, f[n], t), f[n] = null;
				}
				if (y) Yr(r, e, s), Xr([r]);
				else if (s != null) {
					function i(e) {
						f[a].call(this, e);
					}
					f[n] = Kr(r, e, i, t);
				}
			} else if (a === "style") Y(e, a, s);
			else if (a === "autofocus") Ct(e, !!s);
			else if (!l && (a === "__value" || a === "value" && s != null)) e.value = e.__value = s;
			else if (a === "selected" && p) ba(e, s);
			else {
				var b = a;
				u || (b = di(b));
				var x = b === "defaultValue" || b === "defaultChecked";
				if (s == null && !l && !x) if (c[a] = null, b === "value" || b === "checked") {
					let t = e, r = n === void 0;
					if (b === "value") {
						let e = t.defaultValue;
						t.removeAttribute(b), t.defaultValue = e, t.value = t.__value = r ? e : null;
					} else {
						let e = t.defaultChecked;
						t.removeAttribute(b), t.defaultChecked = e, t.checked = r ? e : !1;
					}
				} else e.removeAttribute(a);
				else x || h.includes(b) && (l || typeof s != "string") ? (e[b] = s, b in c && (c[b] = t)) : typeof s != "function" && Y(e, b, s, o);
			}
		}
	}
	return d && He(!0), f;
}
function Sa(e, t, n = [], r = [], i = [], a, o = !1, s = !1) {
	Nt(i, n, r, (n) => {
		var r = void 0, i = {}, c = e.nodeName === ha, l = !1;
		if (Qn(() => {
			var u = t(...n.map(H)), d = xa(e, r, u, a, o, s);
			l && c && "value" in u && aa(e, u.value);
			for (let e of Object.getOwnPropertySymbols(i)) u[e] || rr(i[e]);
			for (let t of Object.getOwnPropertySymbols(u)) {
				var f = u[t];
				t.description === "@attach" && (!r || f !== r[t]) && (i[t] && rr(i[t]), i[t] = $n(() => qi(e, () => f))), d[t] = f;
			}
			r = d;
		}), c) {
			var u = e;
			Jn(() => {
				aa(u, r.value, !0), oa(u);
			});
		}
		l = !0;
	});
}
function Ca(e) {
	return e[ve] ??= {
		[ua]: e.nodeName.includes("-"),
		[da]: e.namespaceURI === n
	};
}
var wa = /* @__PURE__ */ new Map();
function Ta(e) {
	var t = e.getAttribute("is") || e.nodeName, n = wa.get(t);
	if (n) return n;
	wa.set(t, n = []);
	for (var r, i = e, a = Element.prototype; a !== i;) {
		for (var o in r = p(i), r) r[o].set && o !== "innerHTML" && o !== "textContent" && o !== "innerText" && n.push(o);
		i = g(i);
	}
	return n;
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.56.8_@typescript-eslint+types@8.65.0/node_modules/svelte/src/internal/client/dom/elements/bindings/input.js
function Ea(e, t, n = t) {
	var r = /* @__PURE__ */ new WeakSet();
	Ot(e, "input", async (i) => {
		var a = i ? e.defaultValue : e.value;
		if (a = Da(e) ? Oa(a) : a, n(a), qt !== null && r.add(qt), await Lr(), a !== (a = t())) {
			var o = e.selectionStart, s = e.selectionEnd, c = e.value.length;
			if (e.value = a ?? "", s !== null) {
				var l = e.value.length;
				o === s && s === c && l > c ? (e.selectionStart = l, e.selectionEnd = l) : (e.selectionStart = o, e.selectionEnd = Math.min(s, l));
			}
		}
	}), (O && e.defaultValue !== e.value || Br(t) == null && e.value) && (n(Da(e) ? Oa(e.value) : e.value), qt !== null && r.add(qt)), Xn(() => {
		var n = t();
		if (e === document.activeElement) {
			var i = qt;
			if (r.has(i)) return;
		}
		Da(e) && n === Oa(e.value) || e.type === "date" && !n && !e.value || n !== e.value && (e.value = n ?? "");
	});
}
function Da(e) {
	var t = e.type;
	return t === "number" || t === "range";
}
function Oa(e) {
	return e === "" ? null : +e;
}
function ka(e, t, n = t) {
	Ot(e, "change", () => {
		n(e.files);
	}), O && e.files && n(e.files), Xn(() => {
		e.files = t();
	});
}
var Aa = /* @__PURE__ */ new class e {
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
function ja(e, t, n) {
	var r = Aa.observe(e, () => n(e[t]));
	Jn(() => (Br(() => n(e[t])), r));
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.56.8_@typescript-eslint+types@8.65.0/node_modules/svelte/src/internal/client/dom/elements/bindings/this.js
function Ma(e, t) {
	return e === t || e?.[he] === t;
}
function Na(e = {}, t, n, r) {
	var i = tt.r, a = vr;
	return Jn(() => {
		var o, s;
		return Xn(() => {
			o = s, s = r?.() || [], Br(() => {
				Ma(n(...s), e) || (t(e, ...s), o && Ma(n(...o), e) && t(null, ...o));
			});
		}), () => {
			let r = a;
			for (; r !== i && r.parent !== null && r.parent.f & 33554432;) r = r.parent;
			let o = () => {
				s && Ma(n(...s), e) && t(null, ...s);
			}, c = r.teardown;
			r.teardown = () => {
				o(), c?.();
			};
		};
	}), e;
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.56.8_@typescript-eslint+types@8.65.0/node_modules/svelte/src/internal/client/dom/legacy/lifecycle.js
function Pa(e = !1) {
	let t = tt, n = t.l.u;
	if (!n) return;
	let r = () => Vr(t.s);
	if (e) {
		let e = 0, n = {}, i = /* @__PURE__ */ Lt(() => {
			let r = !1, i = t.s;
			for (let e in i) i[e] !== n[e] && (n[e] = i[e], r = !0);
			return r && e++, e;
		});
		r = () => H(i);
	}
	n.b.length && Gn(() => {
		Fa(t, r), x(n.b);
	}), Un(() => {
		let e = Br(() => n.m.map(b));
		return () => {
			for (let t of e) typeof t == "function" && t();
		};
	}), n.a.length && Un(() => {
		Fa(t, r), x(n.a);
	});
}
function Fa(e, t) {
	if (e.l.s) for (let t of e.l.s) H(t);
	t();
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.56.8_@typescript-eslint+types@8.65.0/node_modules/svelte/src/internal/client/reactivity/props.js
var Ia = {
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
function La(e, t, n) {
	return new Proxy({
		props: e,
		exclude: t
	}, Ia);
}
var Ra = {
	get(e, t) {
		if (!e.exclude.includes(t)) return H(e.version), t in e.special ? e.special[t]() : e.props[t];
	},
	set(e, t, n) {
		if (!(t in e.special)) {
			var r = vr;
			try {
				yr(e.parent_effect), e.special[t] = X({ get [t]() {
					return e.props[t];
				} }, t, 4);
			} finally {
				yr(r);
			}
		}
		return e.special[t](n), bn(e.version), !0;
	},
	getOwnPropertyDescriptor(e, t) {
		if (!e.exclude.includes(t) && t in e.props) return {
			enumerable: !0,
			configurable: !0,
			value: e.props[t]
		};
	},
	deleteProperty(e, t) {
		return e.exclude.includes(t) ? !0 : (e.exclude.push(t), bn(e.version), !0);
	},
	has(e, t) {
		return !e.exclude.includes(t) && t in e.props;
	},
	ownKeys(e) {
		return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
	}
};
function za(e, t) {
	return new Proxy({
		props: e,
		exclude: t,
		special: {},
		version: gn(0),
		parent_effect: vr
	}, Ra);
}
var Ba = {
	get(e, t) {
		let n = e.props.length;
		for (; n--;) {
			let r = e.props[n];
			if (v(r) && (r = r()), typeof r == "object" && r && t in r) return r[t];
		}
	},
	set(e, t, n) {
		let r = e.props.length;
		for (; r--;) {
			let i = e.props[r];
			v(i) && (i = i());
			let a = f(i, t);
			if (a && a.set) return a.set(n), !0;
		}
		return !1;
	},
	getOwnPropertyDescriptor(e, t) {
		let n = e.props.length;
		for (; n--;) {
			let r = e.props[n];
			if (v(r) && (r = r()), typeof r == "object" && r && t in r) {
				let e = f(r, t);
				return e && !e.configurable && (e.configurable = !0), e;
			}
		}
	},
	has(e, t) {
		if (t === he || t === ge) return !1;
		for (let n of e.props) if (v(n) && (n = n()), n != null && t in n) return !0;
		return !1;
	},
	ownKeys(e) {
		let t = [];
		for (let n of e.props) if (v(n) && (n = n()), n) {
			for (let e in n) t.includes(e) || t.push(e);
			for (let e of Object.getOwnPropertySymbols(n)) t.includes(e) || t.push(e);
		}
		return t;
	}
};
function Va(...e) {
	return new Proxy({ props: e }, Ba);
}
function X(e, t, n, r) {
	var i = !Xe || (n & 2) != 0, a = (n & 8) != 0, o = (n & 16) != 0, s = r, c = !0, l = void 0, u = () => o && i ? (l ??= /* @__PURE__ */ Lt(r), H(l)) : (c && (c = !1, s = o ? Br(r) : r), s);
	let d;
	if (a) {
		var p = he in e || ge in e;
		d = f(e, t)?.set ?? (p && t in e ? (n) => e[t] = n : void 0);
	}
	var m, h = !1;
	a ? [m, h] = St(() => e[t]) : m = e[t], m === void 0 && r !== void 0 && (m = u(), d && (i && Ne(t), d(m)));
	var g = i ? () => {
		var n = e[t];
		return n === void 0 ? u() : (c = !0, n);
	} : () => {
		var n = e[t];
		return n !== void 0 && (s = void 0), n === void 0 ? s : n;
	};
	if (i && !(n & 4)) return g;
	if (d) {
		var _ = e.$$legacy;
		return (function(e, t) {
			return arguments.length > 0 ? ((!i || !t || _ || h) && d(t ? g() : e), e) : g();
		});
	}
	var v = !1, y = (n & 1 ? Lt : Bt)(() => (v = !1, g()));
	a && H(y);
	var b = vr;
	return (function(e, t) {
		if (arguments.length > 0) {
			let n = t ? H(y) : i && a ? Cn(e) : e;
			return L(y, n), v = !0, s !== void 0 && (s = n), e;
		}
		return pr && v || b.f & 16384 ? y.v : H(y);
	});
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.56.8_@typescript-eslint+types@8.65.0/node_modules/svelte/src/legacy/legacy-client.js
function Ha(e) {
	return new Ua(e);
}
var Ua = class {
	#e;
	#t;
	constructor(e) {
		var t = /* @__PURE__ */ new Map(), n = (e, n) => {
			var r = /* @__PURE__ */ _n(n, !1, !1);
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
				return r === ge ? !0 : (H(t.get(r) ?? n(r, Reflect.get(e, r))), Reflect.has(e, r));
			},
			set(e, r, i) {
				return L(t.get(r) ?? n(r, i), i), Reflect.set(e, r, i);
			}
		});
		this.#t = (e.hydrate ? vi : _i)(e.component, {
			target: e.target,
			anchor: e.anchor,
			props: r,
			context: e.context,
			intro: e.intro ?? !1,
			recover: e.recover,
			transformError: e.transformError
		}), (!e?.props?.$$host || e.sync === !1) && F(), this.#e = r.$$events;
		for (let e of Object.keys(this.#t)) e === "$set" || e === "$destroy" || e === "$on" || d(this, e, {
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
			Si(this.#t);
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
}, Wa;
typeof HTMLElement == "function" && (Wa = class extends HTMLElement {
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
					let n = In("slot");
					e !== "default" && (n.name = e), K(t, n);
				};
			}
			let t = {}, n = Ka(this);
			for (let r of this.$$s) r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
			for (let e of this.attributes) {
				let t = this.$$g_p(e.name);
				t in this.$$d || (this.$$d[t] = Ga(t, e.value, this.$$p_d, "toProp"));
			}
			for (let e in this.$$p_d) !(e in this.$$d) && this[e] !== void 0 && (this.$$d[e] = this[e], delete this[e]);
			this.$$c = Ha({
				component: this.$$ctor,
				target: this.$$shadowRoot || this,
				props: {
					...this.$$d,
					$$slots: t,
					$$host: this
				}
			}), this.$$me = Kn(() => {
				Xn(() => {
					this.$$r = !0;
					for (let e of u(this.$$c)) {
						if (!this.$$p_d[e]?.reflect) continue;
						this.$$d[e] = this.$$c[e];
						let t = Ga(e, this.$$d[e], this.$$p_d, "toAttribute");
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
		this.$$r || (e = this.$$g_p(e), this.$$d[e] = Ga(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
	}
	disconnectedCallback() {
		this.$$cn = !1, Promise.resolve().then(() => {
			!this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
		});
	}
	$$g_p(e) {
		return u(this.$$p_d).find((t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e) || e;
	}
});
function Ga(e, t, n, r) {
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
function Ka(e) {
	let t = {};
	return e.childNodes.forEach((e) => {
		t[e.slot || "default"] = !0;
	}), t;
}
function Z(e, t, n, r, i, a) {
	let o = class extends Wa {
		constructor() {
			super(e, n, i), this.$$p_d = t;
		}
		static get observedAttributes() {
			return u(t).map((e) => (t[e].attribute || e).toLowerCase());
		}
	};
	return u(t).forEach((e) => {
		d(o.prototype, e, {
			get() {
				return this.$$c && e in this.$$c ? this.$$c[e] : this.$$d[e];
			},
			set(n) {
				n = Ga(e, n, t), this.$$d[e] = n;
				var r = this.$$c;
				r && (f(r, e)?.get ? r[e] = n : r.$set({ [e]: n }));
			}
		});
	}), r.forEach((e) => {
		d(o.prototype, e, { get() {
			return this.$$c?.[e];
		} });
	}), a && (o = a(o)), e.element = o, o;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-dispatch@3.0.1/node_modules/d3-dispatch/src/dispatch.js
var qa = { value: () => {} };
function Ja() {
	for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
		if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw Error("illegal type: " + r);
		n[r] = [];
	}
	return new Ya(n);
}
function Ya(e) {
	this._ = e;
}
function Xa(e, t) {
	return e.trim().split(/^|\s+/).map(function(e) {
		var n = "", r = e.indexOf(".");
		if (r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), e && !t.hasOwnProperty(e)) throw Error("unknown type: " + e);
		return {
			type: e,
			name: n
		};
	});
}
Ya.prototype = Ja.prototype = {
	constructor: Ya,
	on: function(e, t) {
		var n = this._, r = Xa(e + "", n), i, a = -1, o = r.length;
		if (arguments.length < 2) {
			for (; ++a < o;) if ((i = (e = r[a]).type) && (i = Za(n[i], e.name))) return i;
			return;
		}
		if (t != null && typeof t != "function") throw Error("invalid callback: " + t);
		for (; ++a < o;) if (i = (e = r[a]).type) n[i] = Qa(n[i], e.name, t);
		else if (t == null) for (i in n) n[i] = Qa(n[i], e.name, null);
		return this;
	},
	copy: function() {
		var e = {}, t = this._;
		for (var n in t) e[n] = t[n].slice();
		return new Ya(e);
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
function Za(e, t) {
	for (var n = 0, r = e.length, i; n < r; ++n) if ((i = e[n]).name === t) return i.value;
}
function Qa(e, t, n) {
	for (var r = 0, i = e.length; r < i; ++r) if (e[r].name === t) {
		e[r] = qa, e = e.slice(0, r).concat(e.slice(r + 1));
		break;
	}
	return n != null && e.push({
		name: t,
		value: n
	}), e;
}
var $a = {
	svg: "http://www.w3.org/2000/svg",
	xhtml: "http://www.w3.org/1999/xhtml",
	xlink: "http://www.w3.org/1999/xlink",
	xml: "http://www.w3.org/XML/1998/namespace",
	xmlns: "http://www.w3.org/2000/xmlns/"
};
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/namespace.js
function eo(e) {
	var t = e += "", n = t.indexOf(":");
	return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), $a.hasOwnProperty(t) ? {
		space: $a[t],
		local: e
	} : e;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/creator.js
function to(e) {
	return function() {
		var t = this.ownerDocument, n = this.namespaceURI;
		return n === "http://www.w3.org/1999/xhtml" && t.documentElement.namespaceURI === "http://www.w3.org/1999/xhtml" ? t.createElement(e) : t.createElementNS(n, e);
	};
}
function no(e) {
	return function() {
		return this.ownerDocument.createElementNS(e.space, e.local);
	};
}
function ro(e) {
	var t = eo(e);
	return (t.local ? no : to)(t);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selector.js
function io() {}
function ao(e) {
	return e == null ? io : function() {
		return this.querySelector(e);
	};
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/select.js
function oo(e) {
	typeof e != "function" && (e = ao(e));
	for (var t = this._groups, n = t.length, r = Array(n), i = 0; i < n; ++i) for (var a = t[i], o = a.length, s = r[i] = Array(o), c, l, u = 0; u < o; ++u) (c = a[u]) && (l = e.call(c, c.__data__, u, a)) && ("__data__" in c && (l.__data__ = c.__data__), s[u] = l);
	return new Ys(r, this._parents);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/array.js
function so(e) {
	return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selectorAll.js
function co() {
	return [];
}
function lo(e) {
	return e == null ? co : function() {
		return this.querySelectorAll(e);
	};
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/selectAll.js
function uo(e) {
	return function() {
		return so(e.apply(this, arguments));
	};
}
function fo(e) {
	e = typeof e == "function" ? uo(e) : lo(e);
	for (var t = this._groups, n = t.length, r = [], i = [], a = 0; a < n; ++a) for (var o = t[a], s = o.length, c, l = 0; l < s; ++l) (c = o[l]) && (r.push(e.call(c, c.__data__, l, o)), i.push(c));
	return new Ys(r, i);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/matcher.js
function po(e) {
	return function() {
		return this.matches(e);
	};
}
function mo(e) {
	return function(t) {
		return t.matches(e);
	};
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/selectChild.js
var ho = Array.prototype.find;
function go(e) {
	return function() {
		return ho.call(this.children, e);
	};
}
function _o() {
	return this.firstElementChild;
}
function vo(e) {
	return this.select(e == null ? _o : go(typeof e == "function" ? e : mo(e)));
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/selectChildren.js
var yo = Array.prototype.filter;
function bo() {
	return Array.from(this.children);
}
function xo(e) {
	return function() {
		return yo.call(this.children, e);
	};
}
function So(e) {
	return this.selectAll(e == null ? bo : xo(typeof e == "function" ? e : mo(e)));
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/filter.js
function Co(e) {
	typeof e != "function" && (e = po(e));
	for (var t = this._groups, n = t.length, r = Array(n), i = 0; i < n; ++i) for (var a = t[i], o = a.length, s = r[i] = [], c, l = 0; l < o; ++l) (c = a[l]) && e.call(c, c.__data__, l, a) && s.push(c);
	return new Ys(r, this._parents);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/sparse.js
function wo(e) {
	return Array(e.length);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/enter.js
function To() {
	return new Ys(this._enter || this._groups.map(wo), this._parents);
}
function Eo(e, t) {
	this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Eo.prototype = {
	constructor: Eo,
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
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/constant.js
function Do(e) {
	return function() {
		return e;
	};
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/data.js
function Oo(e, t, n, r, i, a) {
	for (var o = 0, s, c = t.length, l = a.length; o < l; ++o) (s = t[o]) ? (s.__data__ = a[o], r[o] = s) : n[o] = new Eo(e, a[o]);
	for (; o < c; ++o) (s = t[o]) && (i[o] = s);
}
function ko(e, t, n, r, i, a, o) {
	var s, c, l = /* @__PURE__ */ new Map(), u = t.length, d = a.length, f = Array(u), p;
	for (s = 0; s < u; ++s) (c = t[s]) && (f[s] = p = o.call(c, c.__data__, s, t) + "", l.has(p) ? i[s] = c : l.set(p, c));
	for (s = 0; s < d; ++s) p = o.call(e, a[s], s, a) + "", (c = l.get(p)) ? (r[s] = c, c.__data__ = a[s], l.delete(p)) : n[s] = new Eo(e, a[s]);
	for (s = 0; s < u; ++s) (c = t[s]) && l.get(f[s]) === c && (i[s] = c);
}
function Ao(e) {
	return e.__data__;
}
function jo(e, t) {
	if (!arguments.length) return Array.from(this, Ao);
	var n = t ? ko : Oo, r = this._parents, i = this._groups;
	typeof e != "function" && (e = Do(e));
	for (var a = i.length, o = Array(a), s = Array(a), c = Array(a), l = 0; l < a; ++l) {
		var u = r[l], d = i[l], f = d.length, p = Mo(e.call(u, u && u.__data__, l, r)), m = p.length, h = s[l] = Array(m), g = o[l] = Array(m);
		n(u, d, h, g, c[l] = Array(f), p, t);
		for (var _ = 0, v = 0, y, b; _ < m; ++_) if (y = h[_]) {
			for (_ >= v && (v = _ + 1); !(b = g[v]) && ++v < m;);
			y._next = b || null;
		}
	}
	return o = new Ys(o, r), o._enter = s, o._exit = c, o;
}
function Mo(e) {
	return typeof e == "object" && "length" in e ? e : Array.from(e);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/exit.js
function No() {
	return new Ys(this._exit || this._groups.map(wo), this._parents);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/join.js
function Po(e, t, n) {
	var r = this.enter(), i = this, a = this.exit();
	return typeof e == "function" ? (r = e(r), r &&= r.selection()) : r = r.append(e + ""), t != null && (i = t(i), i &&= i.selection()), n == null ? a.remove() : n(a), r && i ? r.merge(i).order() : i;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/merge.js
function Fo(e) {
	for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, i = n.length, a = r.length, o = Math.min(i, a), s = Array(i), c = 0; c < o; ++c) for (var l = n[c], u = r[c], d = l.length, f = s[c] = Array(d), p, m = 0; m < d; ++m) (p = l[m] || u[m]) && (f[m] = p);
	for (; c < i; ++c) s[c] = n[c];
	return new Ys(s, this._parents);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/order.js
function Io() {
	for (var e = this._groups, t = -1, n = e.length; ++t < n;) for (var r = e[t], i = r.length - 1, a = r[i], o; --i >= 0;) (o = r[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
	return this;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/sort.js
function Lo(e) {
	e ||= Ro;
	function t(t, n) {
		return t && n ? e(t.__data__, n.__data__) : !t - !n;
	}
	for (var n = this._groups, r = n.length, i = Array(r), a = 0; a < r; ++a) {
		for (var o = n[a], s = o.length, c = i[a] = Array(s), l, u = 0; u < s; ++u) (l = o[u]) && (c[u] = l);
		c.sort(t);
	}
	return new Ys(i, this._parents).order();
}
function Ro(e, t) {
	return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/call.js
function zo() {
	var e = arguments[0];
	return arguments[0] = this, e.apply(null, arguments), this;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/nodes.js
function Bo() {
	return Array.from(this);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/node.js
function Vo() {
	for (var e = this._groups, t = 0, n = e.length; t < n; ++t) for (var r = e[t], i = 0, a = r.length; i < a; ++i) {
		var o = r[i];
		if (o) return o;
	}
	return null;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/size.js
function Ho() {
	let e = 0;
	for (let t of this) ++e;
	return e;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/empty.js
function Uo() {
	return !this.node();
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/each.js
function Wo(e) {
	for (var t = this._groups, n = 0, r = t.length; n < r; ++n) for (var i = t[n], a = 0, o = i.length, s; a < o; ++a) (s = i[a]) && e.call(s, s.__data__, a, i);
	return this;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/attr.js
function Go(e) {
	return function() {
		this.removeAttribute(e);
	};
}
function Ko(e) {
	return function() {
		this.removeAttributeNS(e.space, e.local);
	};
}
function qo(e, t) {
	return function() {
		this.setAttribute(e, t);
	};
}
function Jo(e, t) {
	return function() {
		this.setAttributeNS(e.space, e.local, t);
	};
}
function Yo(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
	};
}
function Xo(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
	};
}
function Zo(e, t) {
	var n = eo(e);
	if (arguments.length < 2) {
		var r = this.node();
		return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
	}
	return this.each((t == null ? n.local ? Ko : Go : typeof t == "function" ? n.local ? Xo : Yo : n.local ? Jo : qo)(n, t));
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/window.js
function Qo(e) {
	return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/style.js
function $o(e) {
	return function() {
		this.style.removeProperty(e);
	};
}
function es(e, t, n) {
	return function() {
		this.style.setProperty(e, t, n);
	};
}
function ts(e, t, n) {
	return function() {
		var r = t.apply(this, arguments);
		r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
	};
}
function ns(e, t, n) {
	return arguments.length > 1 ? this.each((t == null ? $o : typeof t == "function" ? ts : es)(e, t, n ?? "")) : rs(this.node(), e);
}
function rs(e, t) {
	return e.style.getPropertyValue(t) || Qo(e).getComputedStyle(e, null).getPropertyValue(t);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/property.js
function is(e) {
	return function() {
		delete this[e];
	};
}
function as(e, t) {
	return function() {
		this[e] = t;
	};
}
function os(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		n == null ? delete this[e] : this[e] = n;
	};
}
function ss(e, t) {
	return arguments.length > 1 ? this.each((t == null ? is : typeof t == "function" ? os : as)(e, t)) : this.node()[e];
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/classed.js
function cs(e) {
	return e.trim().split(/^|\s+/);
}
function ls(e) {
	return e.classList || new us(e);
}
function us(e) {
	this._node = e, this._names = cs(e.getAttribute("class") || "");
}
us.prototype = {
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
function ds(e, t) {
	for (var n = ls(e), r = -1, i = t.length; ++r < i;) n.add(t[r]);
}
function fs(e, t) {
	for (var n = ls(e), r = -1, i = t.length; ++r < i;) n.remove(t[r]);
}
function ps(e) {
	return function() {
		ds(this, e);
	};
}
function ms(e) {
	return function() {
		fs(this, e);
	};
}
function hs(e, t) {
	return function() {
		(t.apply(this, arguments) ? ds : fs)(this, e);
	};
}
function gs(e, t) {
	var n = cs(e + "");
	if (arguments.length < 2) {
		for (var r = ls(this.node()), i = -1, a = n.length; ++i < a;) if (!r.contains(n[i])) return !1;
		return !0;
	}
	return this.each((typeof t == "function" ? hs : t ? ps : ms)(n, t));
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/text.js
function _s() {
	this.textContent = "";
}
function vs(e) {
	return function() {
		this.textContent = e;
	};
}
function ys(e) {
	return function() {
		var t = e.apply(this, arguments);
		this.textContent = t ?? "";
	};
}
function bs(e) {
	return arguments.length ? this.each(e == null ? _s : (typeof e == "function" ? ys : vs)(e)) : this.node().textContent;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/html.js
function xs() {
	this.innerHTML = "";
}
function Ss(e) {
	return function() {
		this.innerHTML = e;
	};
}
function Cs(e) {
	return function() {
		var t = e.apply(this, arguments);
		this.innerHTML = t ?? "";
	};
}
function ws(e) {
	return arguments.length ? this.each(e == null ? xs : (typeof e == "function" ? Cs : Ss)(e)) : this.node().innerHTML;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/raise.js
function Ts() {
	this.nextSibling && this.parentNode.appendChild(this);
}
function Es() {
	return this.each(Ts);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/lower.js
function Ds() {
	this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Os() {
	return this.each(Ds);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/append.js
function ks(e) {
	var t = typeof e == "function" ? e : ro(e);
	return this.select(function() {
		return this.appendChild(t.apply(this, arguments));
	});
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/insert.js
function As() {
	return null;
}
function js(e, t) {
	var n = typeof e == "function" ? e : ro(e), r = t == null ? As : typeof t == "function" ? t : ao(t);
	return this.select(function() {
		return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
	});
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/remove.js
function Ms() {
	var e = this.parentNode;
	e && e.removeChild(this);
}
function Ns() {
	return this.each(Ms);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/clone.js
function Ps() {
	var e = this.cloneNode(!1), t = this.parentNode;
	return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Fs() {
	var e = this.cloneNode(!0), t = this.parentNode;
	return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Is(e) {
	return this.select(e ? Fs : Ps);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/datum.js
function Ls(e) {
	return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/on.js
function Rs(e) {
	return function(t) {
		e.call(this, t, this.__data__);
	};
}
function zs(e) {
	return e.trim().split(/^|\s+/).map(function(e) {
		var t = "", n = e.indexOf(".");
		return n >= 0 && (t = e.slice(n + 1), e = e.slice(0, n)), {
			type: e,
			name: t
		};
	});
}
function Bs(e) {
	return function() {
		var t = this.__on;
		if (t) {
			for (var n = 0, r = -1, i = t.length, a; n < i; ++n) a = t[n], (!e.type || a.type === e.type) && a.name === e.name ? this.removeEventListener(a.type, a.listener, a.options) : t[++r] = a;
			++r ? t.length = r : delete this.__on;
		}
	};
}
function Vs(e, t, n) {
	return function() {
		var r = this.__on, i, a = Rs(t);
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
function Hs(e, t, n) {
	var r = zs(e + ""), i, a = r.length, o;
	if (arguments.length < 2) {
		var s = this.node().__on;
		if (s) {
			for (var c = 0, l = s.length, u; c < l; ++c) for (i = 0, u = s[c]; i < a; ++i) if ((o = r[i]).type === u.type && o.name === u.name) return u.value;
		}
		return;
	}
	for (s = t ? Vs : Bs, i = 0; i < a; ++i) this.each(s(r[i], t, n));
	return this;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/dispatch.js
function Us(e, t, n) {
	var r = Qo(e), i = r.CustomEvent;
	typeof i == "function" ? i = new i(t, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(t, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(t, !1, !1)), e.dispatchEvent(i);
}
function Ws(e, t) {
	return function() {
		return Us(this, e, t);
	};
}
function Gs(e, t) {
	return function() {
		return Us(this, e, t.apply(this, arguments));
	};
}
function Ks(e, t) {
	return this.each((typeof t == "function" ? Gs : Ws)(e, t));
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/iterator.js
function* qs() {
	for (var e = this._groups, t = 0, n = e.length; t < n; ++t) for (var r = e[t], i = 0, a = r.length, o; i < a; ++i) (o = r[i]) && (yield o);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/selection/index.js
var Js = [null];
function Ys(e, t) {
	this._groups = e, this._parents = t;
}
function Xs() {
	return new Ys([[document.documentElement]], Js);
}
function Zs() {
	return this;
}
Ys.prototype = Xs.prototype = {
	constructor: Ys,
	select: oo,
	selectAll: fo,
	selectChild: vo,
	selectChildren: So,
	filter: Co,
	data: jo,
	enter: To,
	exit: No,
	join: Po,
	merge: Fo,
	selection: Zs,
	order: Io,
	sort: Lo,
	call: zo,
	nodes: Bo,
	node: Vo,
	size: Ho,
	empty: Uo,
	each: Wo,
	attr: Zo,
	style: ns,
	property: ss,
	classed: gs,
	text: bs,
	html: ws,
	raise: Es,
	lower: Os,
	append: ks,
	insert: js,
	remove: Ns,
	clone: Is,
	datum: Ls,
	on: Hs,
	dispatch: Ks,
	[Symbol.iterator]: qs
};
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/select.js
function Qs(e) {
	return typeof e == "string" ? new Ys([[document.querySelector(e)]], [document.documentElement]) : new Ys([[e]], Js);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/sourceEvent.js
function $s(e) {
	let t;
	for (; t = e.sourceEvent;) e = t;
	return e;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/pointer.js
function ec(e, t) {
	if (e = $s(e), t === void 0 && (t = e.currentTarget), t) {
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
//#endregion
//#region ../../node_modules/.pnpm/d3-drag@3.0.0/node_modules/d3-drag/src/noevent.js
var tc = { passive: !1 }, nc = {
	capture: !0,
	passive: !1
};
function rc(e) {
	e.stopImmediatePropagation();
}
function ic(e) {
	e.preventDefault(), e.stopImmediatePropagation();
}
//#endregion
//#region ../../node_modules/.pnpm/d3-drag@3.0.0/node_modules/d3-drag/src/nodrag.js
function ac(e) {
	var t = e.document.documentElement, n = Qs(e).on("dragstart.drag", ic, nc);
	"onselectstart" in t ? n.on("selectstart.drag", ic, nc) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function oc(e, t) {
	var n = e.document.documentElement, r = Qs(e).on("dragstart.drag", null);
	t && (r.on("click.drag", ic, nc), setTimeout(function() {
		r.on("click.drag", null);
	}, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-drag@3.0.0/node_modules/d3-drag/src/constant.js
var sc = (e) => () => e;
//#endregion
//#region ../../node_modules/.pnpm/d3-drag@3.0.0/node_modules/d3-drag/src/event.js
function cc(e, { sourceEvent: t, subject: n, target: r, identifier: i, active: a, x: o, y: s, dx: c, dy: l, dispatch: u }) {
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
cc.prototype.on = function() {
	var e = this._.on.apply(this._, arguments);
	return e === this._ ? this : e;
};
//#endregion
//#region ../../node_modules/.pnpm/d3-drag@3.0.0/node_modules/d3-drag/src/drag.js
function lc(e) {
	return !e.ctrlKey && !e.button;
}
function uc() {
	return this.parentNode;
}
function dc(e, t) {
	return t ?? {
		x: e.x,
		y: e.y
	};
}
function fc() {
	return navigator.maxTouchPoints || "ontouchstart" in this;
}
function pc() {
	var e = lc, t = uc, n = dc, r = fc, i = {}, a = Ja("start", "drag", "end"), o = 0, s, c, l, u, d = 0;
	function f(e) {
		e.on("mousedown.drag", p).filter(r).on("touchstart.drag", g).on("touchmove.drag", _, tc).on("touchend.drag touchcancel.drag", v).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
	}
	function p(n, r) {
		if (!(u || !e.call(this, n, r))) {
			var i = y(this, t.call(this, n, r), n, r, "mouse");
			i && (Qs(n.view).on("mousemove.drag", m, nc).on("mouseup.drag", h, nc), ac(n.view), rc(n), l = !1, s = n.clientX, c = n.clientY, i("start", n));
		}
	}
	function m(e) {
		if (ic(e), !l) {
			var t = e.clientX - s, n = e.clientY - c;
			l = t * t + n * n > d;
		}
		i.mouse("drag", e);
	}
	function h(e) {
		Qs(e.view).on("mousemove.drag mouseup.drag", null), oc(e.view, l), ic(e), i.mouse("end", e);
	}
	function g(n, r) {
		if (e.call(this, n, r)) {
			var i = n.changedTouches, a = t.call(this, n, r), o = i.length, s, c;
			for (s = 0; s < o; ++s) (c = y(this, a, n, r, i[s].identifier, i[s])) && (rc(n), c("start", n, i[s]));
		}
	}
	function _(e) {
		var t = e.changedTouches, n = t.length, r, a;
		for (r = 0; r < n; ++r) (a = i[t[r].identifier]) && (ic(e), a("drag", e, t[r]));
	}
	function v(e) {
		var t = e.changedTouches, n = t.length, r, a;
		for (u && clearTimeout(u), u = setTimeout(function() {
			u = null;
		}, 500), r = 0; r < n; ++r) (a = i[t[r].identifier]) && (rc(e), a("end", e, t[r]));
	}
	function y(e, t, r, s, c, l) {
		var u = a.copy(), d = ec(l || r, t), p, m, h;
		if ((h = n.call(e, new cc("beforestart", {
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
					d = ec(l || a, t), _ = o;
					break;
			}
			u.call(r, e, new cc(r, {
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
		return arguments.length ? (e = typeof t == "function" ? t : sc(!!t), f) : e;
	}, f.container = function(e) {
		return arguments.length ? (t = typeof e == "function" ? e : sc(e), f) : t;
	}, f.subject = function(e) {
		return arguments.length ? (n = typeof e == "function" ? e : sc(e), f) : n;
	}, f.touchable = function(e) {
		return arguments.length ? (r = typeof e == "function" ? e : sc(!!e), f) : r;
	}, f.on = function() {
		var e = a.on.apply(a, arguments);
		return e === a ? f : e;
	}, f.clickDistance = function(e) {
		return arguments.length ? (d = (e = +e) * e, f) : Math.sqrt(d);
	}, f;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-color@3.1.0/node_modules/d3-color/src/define.js
function mc(e, t, n) {
	e.prototype = t.prototype = n, n.constructor = e;
}
function hc(e, t) {
	var n = Object.create(e.prototype);
	for (var r in t) n[r] = t[r];
	return n;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-color@3.1.0/node_modules/d3-color/src/color.js
function gc() {}
var _c = .7, vc = 1 / _c, yc = "\\s*([+-]?\\d+)\\s*", bc = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", xc = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Sc = /^#([0-9a-f]{3,8})$/, Cc = RegExp(`^rgb\\(${yc},${yc},${yc}\\)$`), wc = RegExp(`^rgb\\(${xc},${xc},${xc}\\)$`), Tc = RegExp(`^rgba\\(${yc},${yc},${yc},${bc}\\)$`), Ec = RegExp(`^rgba\\(${xc},${xc},${xc},${bc}\\)$`), Dc = RegExp(`^hsl\\(${bc},${xc},${xc}\\)$`), Oc = RegExp(`^hsla\\(${bc},${xc},${xc},${bc}\\)$`), kc = {
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
mc(gc, Pc, {
	copy(e) {
		return Object.assign(new this.constructor(), this, e);
	},
	displayable() {
		return this.rgb().displayable();
	},
	hex: Ac,
	formatHex: Ac,
	formatHex8: jc,
	formatHsl: Mc,
	formatRgb: Nc,
	toString: Nc
});
function Ac() {
	return this.rgb().formatHex();
}
function jc() {
	return this.rgb().formatHex8();
}
function Mc() {
	return qc(this).formatHsl();
}
function Nc() {
	return this.rgb().formatRgb();
}
function Pc(e) {
	var t, n;
	return e = (e + "").trim().toLowerCase(), (t = Sc.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Fc(t) : n === 3 ? new zc(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Ic(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Ic(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Cc.exec(e)) ? new zc(t[1], t[2], t[3], 1) : (t = wc.exec(e)) ? new zc(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Tc.exec(e)) ? Ic(t[1], t[2], t[3], t[4]) : (t = Ec.exec(e)) ? Ic(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Dc.exec(e)) ? Kc(t[1], t[2] / 100, t[3] / 100, 1) : (t = Oc.exec(e)) ? Kc(t[1], t[2] / 100, t[3] / 100, t[4]) : kc.hasOwnProperty(e) ? Fc(kc[e]) : e === "transparent" ? new zc(NaN, NaN, NaN, 0) : null;
}
function Fc(e) {
	return new zc(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Ic(e, t, n, r) {
	return r <= 0 && (e = t = n = NaN), new zc(e, t, n, r);
}
function Lc(e) {
	return e instanceof gc || (e = Pc(e)), e ? (e = e.rgb(), new zc(e.r, e.g, e.b, e.opacity)) : new zc();
}
function Rc(e, t, n, r) {
	return arguments.length === 1 ? Lc(e) : new zc(e, t, n, r ?? 1);
}
function zc(e, t, n, r) {
	this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
mc(zc, Rc, hc(gc, {
	brighter(e) {
		return e = e == null ? vc : vc ** +e, new zc(this.r * e, this.g * e, this.b * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? _c : _c ** +e, new zc(this.r * e, this.g * e, this.b * e, this.opacity);
	},
	rgb() {
		return this;
	},
	clamp() {
		return new zc(Wc(this.r), Wc(this.g), Wc(this.b), Uc(this.opacity));
	},
	displayable() {
		return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
	},
	hex: Bc,
	formatHex: Bc,
	formatHex8: Vc,
	formatRgb: Hc,
	toString: Hc
}));
function Bc() {
	return `#${Gc(this.r)}${Gc(this.g)}${Gc(this.b)}`;
}
function Vc() {
	return `#${Gc(this.r)}${Gc(this.g)}${Gc(this.b)}${Gc((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Hc() {
	let e = Uc(this.opacity);
	return `${e === 1 ? "rgb(" : "rgba("}${Wc(this.r)}, ${Wc(this.g)}, ${Wc(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Uc(e) {
	return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Wc(e) {
	return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Gc(e) {
	return e = Wc(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Kc(e, t, n, r) {
	return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Yc(e, t, n, r);
}
function qc(e) {
	if (e instanceof Yc) return new Yc(e.h, e.s, e.l, e.opacity);
	if (e instanceof gc || (e = Pc(e)), !e) return new Yc();
	if (e instanceof Yc) return e;
	e = e.rgb();
	var t = e.r / 255, n = e.g / 255, r = e.b / 255, i = Math.min(t, n, r), a = Math.max(t, n, r), o = NaN, s = a - i, c = (a + i) / 2;
	return s ? (o = t === a ? (n - r) / s + (n < r) * 6 : n === a ? (r - t) / s + 2 : (t - n) / s + 4, s /= c < .5 ? a + i : 2 - a - i, o *= 60) : s = c > 0 && c < 1 ? 0 : o, new Yc(o, s, c, e.opacity);
}
function Jc(e, t, n, r) {
	return arguments.length === 1 ? qc(e) : new Yc(e, t, n, r ?? 1);
}
function Yc(e, t, n, r) {
	this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
mc(Yc, Jc, hc(gc, {
	brighter(e) {
		return e = e == null ? vc : vc ** +e, new Yc(this.h, this.s, this.l * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? _c : _c ** +e, new Yc(this.h, this.s, this.l * e, this.opacity);
	},
	rgb() {
		var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < .5 ? n : 1 - n) * t, i = 2 * n - r;
		return new zc(Qc(e >= 240 ? e - 240 : e + 120, i, r), Qc(e, i, r), Qc(e < 120 ? e + 240 : e - 120, i, r), this.opacity);
	},
	clamp() {
		return new Yc(Xc(this.h), Zc(this.s), Zc(this.l), Uc(this.opacity));
	},
	displayable() {
		return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
	},
	formatHsl() {
		let e = Uc(this.opacity);
		return `${e === 1 ? "hsl(" : "hsla("}${Xc(this.h)}, ${Zc(this.s) * 100}%, ${Zc(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
	}
}));
function Xc(e) {
	return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Zc(e) {
	return Math.max(0, Math.min(1, e || 0));
}
function Qc(e, t, n) {
	return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/constant.js
var $c = (e) => () => e;
//#endregion
//#region ../../node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/color.js
function el(e, t) {
	return function(n) {
		return e + n * t;
	};
}
function tl(e, t, n) {
	return e **= +n, t = t ** +n - e, n = 1 / n, function(r) {
		return (e + r * t) ** +n;
	};
}
function nl(e) {
	return (e = +e) == 1 ? rl : function(t, n) {
		return n - t ? tl(t, n, e) : $c(isNaN(t) ? n : t);
	};
}
function rl(e, t) {
	var n = t - e;
	return n ? el(e, n) : $c(isNaN(e) ? t : e);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/rgb.js
var il = (function e(t) {
	var n = nl(t);
	function r(e, t) {
		var r = n((e = Rc(e)).r, (t = Rc(t)).r), i = n(e.g, t.g), a = n(e.b, t.b), o = rl(e.opacity, t.opacity);
		return function(t) {
			return e.r = r(t), e.g = i(t), e.b = a(t), e.opacity = o(t), e + "";
		};
	}
	return r.gamma = e, r;
})(1);
//#endregion
//#region ../../node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/numberArray.js
function al(e, t) {
	t ||= [];
	var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), i;
	return function(a) {
		for (i = 0; i < n; ++i) r[i] = e[i] * (1 - a) + t[i] * a;
		return r;
	};
}
function ol(e) {
	return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/array.js
function sl(e, t) {
	var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, i = Array(r), a = Array(n), o;
	for (o = 0; o < r; ++o) i[o] = gl(e[o], t[o]);
	for (; o < n; ++o) a[o] = t[o];
	return function(e) {
		for (o = 0; o < r; ++o) a[o] = i[o](e);
		return a;
	};
}
//#endregion
//#region ../../node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/date.js
function cl(e, t) {
	var n = /* @__PURE__ */ new Date();
	return e = +e, t = +t, function(r) {
		return n.setTime(e * (1 - r) + t * r), n;
	};
}
//#endregion
//#region ../../node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/number.js
function ll(e, t) {
	return e = +e, t = +t, function(n) {
		return e * (1 - n) + t * n;
	};
}
//#endregion
//#region ../../node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/object.js
function ul(e, t) {
	var n = {}, r = {}, i;
	for (i in (typeof e != "object" || !e) && (e = {}), (typeof t != "object" || !t) && (t = {}), t) i in e ? n[i] = gl(e[i], t[i]) : r[i] = t[i];
	return function(e) {
		for (i in n) r[i] = n[i](e);
		return r;
	};
}
//#endregion
//#region ../../node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/string.js
var dl = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, fl = new RegExp(dl.source, "g");
function pl(e) {
	return function() {
		return e;
	};
}
function ml(e) {
	return function(t) {
		return e(t) + "";
	};
}
function hl(e, t) {
	var n = dl.lastIndex = fl.lastIndex = 0, r, i, a, o = -1, s = [], c = [];
	for (e += "", t += ""; (r = dl.exec(e)) && (i = fl.exec(t));) (a = i.index) > n && (a = t.slice(n, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, c.push({
		i: o,
		x: ll(r, i)
	})), n = fl.lastIndex;
	return n < t.length && (a = t.slice(n), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? c[0] ? ml(c[0].x) : pl(t) : (t = c.length, function(e) {
		for (var n = 0, r; n < t; ++n) s[(r = c[n]).i] = r.x(e);
		return s.join("");
	});
}
//#endregion
//#region ../../node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/value.js
function gl(e, t) {
	var n = typeof t, r;
	return t == null || n === "boolean" ? $c(t) : (n === "number" ? ll : n === "string" ? (r = Pc(t)) ? (t = r, il) : hl : t instanceof Pc ? il : t instanceof Date ? cl : ol(t) ? al : Array.isArray(t) ? sl : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? ul : ll)(e, t);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/transform/decompose.js
var _l = 180 / Math.PI, vl = {
	translateX: 0,
	translateY: 0,
	rotate: 0,
	skewX: 0,
	scaleX: 1,
	scaleY: 1
};
function yl(e, t, n, r, i, a) {
	var o, s, c;
	return (o = Math.sqrt(e * e + t * t)) && (e /= o, t /= o), (c = e * n + t * r) && (n -= e * c, r -= t * c), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, c /= s), e * r < t * n && (e = -e, t = -t, c = -c, o = -o), {
		translateX: i,
		translateY: a,
		rotate: Math.atan2(t, e) * _l,
		skewX: Math.atan(c) * _l,
		scaleX: o,
		scaleY: s
	};
}
//#endregion
//#region ../../node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/transform/parse.js
var bl;
function xl(e) {
	let t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
	return t.isIdentity ? vl : yl(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Sl(e) {
	return e == null || (bl ||= document.createElementNS("http://www.w3.org/2000/svg", "g"), bl.setAttribute("transform", e), !(e = bl.transform.baseVal.consolidate())) ? vl : (e = e.matrix, yl(e.a, e.b, e.c, e.d, e.e, e.f));
}
//#endregion
//#region ../../node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/transform/index.js
function Cl(e, t, n, r) {
	function i(e) {
		return e.length ? e.pop() + " " : "";
	}
	function a(e, r, i, a, o, s) {
		if (e !== i || r !== a) {
			var c = o.push("translate(", null, t, null, n);
			s.push({
				i: c - 4,
				x: ll(e, i)
			}, {
				i: c - 2,
				x: ll(r, a)
			});
		} else (i || a) && o.push("translate(" + i + t + a + n);
	}
	function o(e, t, n, a) {
		e === t ? t && n.push(i(n) + "rotate(" + t + r) : (e - t > 180 ? t += 360 : t - e > 180 && (e += 360), a.push({
			i: n.push(i(n) + "rotate(", null, r) - 2,
			x: ll(e, t)
		}));
	}
	function s(e, t, n, a) {
		e === t ? t && n.push(i(n) + "skewX(" + t + r) : a.push({
			i: n.push(i(n) + "skewX(", null, r) - 2,
			x: ll(e, t)
		});
	}
	function c(e, t, n, r, a, o) {
		if (e !== n || t !== r) {
			var s = a.push(i(a) + "scale(", null, ",", null, ")");
			o.push({
				i: s - 4,
				x: ll(e, n)
			}, {
				i: s - 2,
				x: ll(t, r)
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
var wl = Cl(xl, "px, ", "px)", "deg)"), Tl = Cl(Sl, ", ", ")", ")"), El = 1e-12;
function Dl(e) {
	return ((e = Math.exp(e)) + 1 / e) / 2;
}
function Ol(e) {
	return ((e = Math.exp(e)) - 1 / e) / 2;
}
function kl(e) {
	return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
var Al = (function e(t, n, r) {
	function i(e, i) {
		var a = e[0], o = e[1], s = e[2], c = i[0], l = i[1], u = i[2], d = c - a, f = l - o, p = d * d + f * f, m, h;
		if (p < El) h = Math.log(u / s) / t, m = function(e) {
			return [
				a + e * d,
				o + e * f,
				s * Math.exp(t * e * h)
			];
		};
		else {
			var g = Math.sqrt(p), _ = (u * u - s * s + r * p) / (2 * s * n * g), v = (u * u - s * s - r * p) / (2 * u * n * g), y = Math.log(Math.sqrt(_ * _ + 1) - _);
			h = (Math.log(Math.sqrt(v * v + 1) - v) - y) / t, m = function(e) {
				var r = e * h, i = Dl(y), c = s / (n * g) * (i * kl(t * r + y) - Ol(y));
				return [
					a + c * d,
					o + c * f,
					s * i / Dl(t * r + y)
				];
			};
		}
		return m.duration = h * 1e3 * t / Math.SQRT2, m;
	}
	return i.rho = function(t) {
		var n = Math.max(.001, +t), r = n * n;
		return e(n, r, r * r);
	}, i;
})(Math.SQRT2, 2, 4), jl = 0, Ml = 0, Nl = 0, Pl = 1e3, Fl, Il, Ll = 0, Rl = 0, zl = 0, Bl = typeof performance == "object" && performance.now ? performance : Date, Vl = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
	setTimeout(e, 17);
};
function Hl() {
	return Rl ||= (Vl(Ul), Bl.now() + zl);
}
function Ul() {
	Rl = 0;
}
function Wl() {
	this._call = this._time = this._next = null;
}
Wl.prototype = Gl.prototype = {
	constructor: Wl,
	restart: function(e, t, n) {
		if (typeof e != "function") throw TypeError("callback is not a function");
		n = (n == null ? Hl() : +n) + (t == null ? 0 : +t), !this._next && Il !== this && (Il ? Il._next = this : Fl = this, Il = this), this._call = e, this._time = n, Xl();
	},
	stop: function() {
		this._call && (this._call = null, this._time = Infinity, Xl());
	}
};
function Gl(e, t, n) {
	var r = new Wl();
	return r.restart(e, t, n), r;
}
function Kl() {
	Hl(), ++jl;
	for (var e = Fl, t; e;) (t = Rl - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
	--jl;
}
function ql() {
	Rl = (Ll = Bl.now()) + zl, jl = Ml = 0;
	try {
		Kl();
	} finally {
		jl = 0, Yl(), Rl = 0;
	}
}
function Jl() {
	var e = Bl.now(), t = e - Ll;
	t > Pl && (zl -= t, Ll = e);
}
function Yl() {
	for (var e, t = Fl, n, r = Infinity; t;) t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Fl = n);
	Il = e, Xl(r);
}
function Xl(e) {
	jl || (Ml &&= clearTimeout(Ml), e - Rl > 24 ? (e < Infinity && (Ml = setTimeout(ql, e - Bl.now() - zl)), Nl &&= clearInterval(Nl)) : (Nl ||= (Ll = Bl.now(), setInterval(Jl, Pl)), jl = 1, Vl(ql)));
}
//#endregion
//#region ../../node_modules/.pnpm/d3-timer@3.0.1/node_modules/d3-timer/src/timeout.js
function Zl(e, t, n) {
	var r = new Wl();
	return t = t == null ? 0 : +t, r.restart((n) => {
		r.stop(), e(n + t);
	}, t, n), r;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/schedule.js
var Ql = Ja("start", "end", "cancel", "interrupt"), $l = [];
function eu(e, t, n, r, i, a) {
	var o = e.__transition;
	if (!o) e.__transition = {};
	else if (n in o) return;
	iu(e, n, {
		name: t,
		index: r,
		group: i,
		on: Ql,
		tween: $l,
		time: a.time,
		delay: a.delay,
		duration: a.duration,
		ease: a.ease,
		timer: null,
		state: 0
	});
}
function tu(e, t) {
	var n = ru(e, t);
	if (n.state > 0) throw Error("too late; already scheduled");
	return n;
}
function nu(e, t) {
	var n = ru(e, t);
	if (n.state > 3) throw Error("too late; already running");
	return n;
}
function ru(e, t) {
	var n = e.__transition;
	if (!n || !(n = n[t])) throw Error("transition not found");
	return n;
}
function iu(e, t, n) {
	var r = e.__transition, i;
	r[t] = n, n.timer = Gl(a, 0, n.time);
	function a(e) {
		n.state = 1, n.timer.restart(o, n.delay, n.time), n.delay <= e && o(e - n.delay);
	}
	function o(a) {
		var l, u, d, f;
		if (n.state !== 1) return c();
		for (l in r) if (f = r[l], f.name === n.name) {
			if (f.state === 3) return Zl(o);
			f.state === 4 ? (f.state = 6, f.timer.stop(), f.on.call("interrupt", e, e.__data__, f.index, f.group), delete r[l]) : +l < t && (f.state = 6, f.timer.stop(), f.on.call("cancel", e, e.__data__, f.index, f.group), delete r[l]);
		}
		if (Zl(function() {
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
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/interrupt.js
function au(e, t) {
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
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/selection/interrupt.js
function ou(e) {
	return this.each(function() {
		au(this, e);
	});
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/tween.js
function su(e, t) {
	var n, r;
	return function() {
		var i = nu(this, e), a = i.tween;
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
function cu(e, t, n) {
	var r, i;
	if (typeof n != "function") throw Error();
	return function() {
		var a = nu(this, e), o = a.tween;
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
function lu(e, t) {
	var n = this._id;
	if (e += "", arguments.length < 2) {
		for (var r = ru(this.node(), n).tween, i = 0, a = r.length, o; i < a; ++i) if ((o = r[i]).name === e) return o.value;
		return null;
	}
	return this.each((t == null ? su : cu)(n, e, t));
}
function uu(e, t, n) {
	var r = e._id;
	return e.each(function() {
		var e = nu(this, r);
		(e.value ||= {})[t] = n.apply(this, arguments);
	}), function(e) {
		return ru(e, r).value[t];
	};
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/interpolate.js
function du(e, t) {
	var n;
	return (typeof t == "number" ? ll : t instanceof Pc ? il : (n = Pc(t)) ? (t = n, il) : hl)(e, t);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/attr.js
function fu(e) {
	return function() {
		this.removeAttribute(e);
	};
}
function pu(e) {
	return function() {
		this.removeAttributeNS(e.space, e.local);
	};
}
function mu(e, t, n) {
	var r, i = n + "", a;
	return function() {
		var o = this.getAttribute(e);
		return o === i ? null : o === r ? a : a = t(r = o, n);
	};
}
function hu(e, t, n) {
	var r, i = n + "", a;
	return function() {
		var o = this.getAttributeNS(e.space, e.local);
		return o === i ? null : o === r ? a : a = t(r = o, n);
	};
}
function gu(e, t, n) {
	var r, i, a;
	return function() {
		var o, s = n(this), c;
		return s == null ? void this.removeAttribute(e) : (o = this.getAttribute(e), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s)));
	};
}
function _u(e, t, n) {
	var r, i, a;
	return function() {
		var o, s = n(this), c;
		return s == null ? void this.removeAttributeNS(e.space, e.local) : (o = this.getAttributeNS(e.space, e.local), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s)));
	};
}
function vu(e, t) {
	var n = eo(e), r = n === "transform" ? Tl : du;
	return this.attrTween(e, typeof t == "function" ? (n.local ? _u : gu)(n, r, uu(this, "attr." + e, t)) : t == null ? (n.local ? pu : fu)(n) : (n.local ? hu : mu)(n, r, t));
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/attrTween.js
function yu(e, t) {
	return function(n) {
		this.setAttribute(e, t.call(this, n));
	};
}
function bu(e, t) {
	return function(n) {
		this.setAttributeNS(e.space, e.local, t.call(this, n));
	};
}
function xu(e, t) {
	var n, r;
	function i() {
		var i = t.apply(this, arguments);
		return i !== r && (n = (r = i) && bu(e, i)), n;
	}
	return i._value = t, i;
}
function Su(e, t) {
	var n, r;
	function i() {
		var i = t.apply(this, arguments);
		return i !== r && (n = (r = i) && yu(e, i)), n;
	}
	return i._value = t, i;
}
function Cu(e, t) {
	var n = "attr." + e;
	if (arguments.length < 2) return (n = this.tween(n)) && n._value;
	if (t == null) return this.tween(n, null);
	if (typeof t != "function") throw Error();
	var r = eo(e);
	return this.tween(n, (r.local ? xu : Su)(r, t));
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/delay.js
function wu(e, t) {
	return function() {
		tu(this, e).delay = +t.apply(this, arguments);
	};
}
function Tu(e, t) {
	return t = +t, function() {
		tu(this, e).delay = t;
	};
}
function Eu(e) {
	var t = this._id;
	return arguments.length ? this.each((typeof e == "function" ? wu : Tu)(t, e)) : ru(this.node(), t).delay;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/duration.js
function Du(e, t) {
	return function() {
		nu(this, e).duration = +t.apply(this, arguments);
	};
}
function Ou(e, t) {
	return t = +t, function() {
		nu(this, e).duration = t;
	};
}
function ku(e) {
	var t = this._id;
	return arguments.length ? this.each((typeof e == "function" ? Du : Ou)(t, e)) : ru(this.node(), t).duration;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/ease.js
function Au(e, t) {
	if (typeof t != "function") throw Error();
	return function() {
		nu(this, e).ease = t;
	};
}
function ju(e) {
	var t = this._id;
	return arguments.length ? this.each(Au(t, e)) : ru(this.node(), t).ease;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/easeVarying.js
function Mu(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		if (typeof n != "function") throw Error();
		nu(this, e).ease = n;
	};
}
function Nu(e) {
	if (typeof e != "function") throw Error();
	return this.each(Mu(this._id, e));
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/filter.js
function Pu(e) {
	typeof e != "function" && (e = po(e));
	for (var t = this._groups, n = t.length, r = Array(n), i = 0; i < n; ++i) for (var a = t[i], o = a.length, s = r[i] = [], c, l = 0; l < o; ++l) (c = a[l]) && e.call(c, c.__data__, l, a) && s.push(c);
	return new ld(r, this._parents, this._name, this._id);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/merge.js
function Fu(e) {
	if (e._id !== this._id) throw Error();
	for (var t = this._groups, n = e._groups, r = t.length, i = n.length, a = Math.min(r, i), o = Array(r), s = 0; s < a; ++s) for (var c = t[s], l = n[s], u = c.length, d = o[s] = Array(u), f, p = 0; p < u; ++p) (f = c[p] || l[p]) && (d[p] = f);
	for (; s < r; ++s) o[s] = t[s];
	return new ld(o, this._parents, this._name, this._id);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/on.js
function Iu(e) {
	return (e + "").trim().split(/^|\s+/).every(function(e) {
		var t = e.indexOf(".");
		return t >= 0 && (e = e.slice(0, t)), !e || e === "start";
	});
}
function Lu(e, t, n) {
	var r, i, a = Iu(t) ? tu : nu;
	return function() {
		var o = a(this, e), s = o.on;
		s !== r && (i = (r = s).copy()).on(t, n), o.on = i;
	};
}
function Ru(e, t) {
	var n = this._id;
	return arguments.length < 2 ? ru(this.node(), n).on.on(e) : this.each(Lu(n, e, t));
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/remove.js
function zu(e) {
	return function() {
		var t = this.parentNode;
		for (var n in this.__transition) if (+n !== e) return;
		t && t.removeChild(this);
	};
}
function Bu() {
	return this.on("end.remove", zu(this._id));
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/select.js
function Vu(e) {
	var t = this._name, n = this._id;
	typeof e != "function" && (e = ao(e));
	for (var r = this._groups, i = r.length, a = Array(i), o = 0; o < i; ++o) for (var s = r[o], c = s.length, l = a[o] = Array(c), u, d, f = 0; f < c; ++f) (u = s[f]) && (d = e.call(u, u.__data__, f, s)) && ("__data__" in u && (d.__data__ = u.__data__), l[f] = d, eu(l[f], t, n, f, l, ru(u, n)));
	return new ld(a, this._parents, t, n);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/selectAll.js
function Hu(e) {
	var t = this._name, n = this._id;
	typeof e != "function" && (e = lo(e));
	for (var r = this._groups, i = r.length, a = [], o = [], s = 0; s < i; ++s) for (var c = r[s], l = c.length, u, d = 0; d < l; ++d) if (u = c[d]) {
		for (var f = e.call(u, u.__data__, d, c), p, m = ru(u, n), h = 0, g = f.length; h < g; ++h) (p = f[h]) && eu(p, t, n, h, f, m);
		a.push(f), o.push(u);
	}
	return new ld(a, o, t, n);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/selection.js
var Uu = Xs.prototype.constructor;
function Wu() {
	return new Uu(this._groups, this._parents);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/style.js
function Gu(e, t) {
	var n, r, i;
	return function() {
		var a = rs(this, e), o = (this.style.removeProperty(e), rs(this, e));
		return a === o ? null : a === n && o === r ? i : i = t(n = a, r = o);
	};
}
function Ku(e) {
	return function() {
		this.style.removeProperty(e);
	};
}
function qu(e, t, n) {
	var r, i = n + "", a;
	return function() {
		var o = rs(this, e);
		return o === i ? null : o === r ? a : a = t(r = o, n);
	};
}
function Ju(e, t, n) {
	var r, i, a;
	return function() {
		var o = rs(this, e), s = n(this), c = s + "";
		return s ?? (c = s = (this.style.removeProperty(e), rs(this, e))), o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s));
	};
}
function Yu(e, t) {
	var n, r, i, a = "style." + t, o = "end." + a, s;
	return function() {
		var c = nu(this, e), l = c.on, u = c.value[a] == null ? s ||= Ku(t) : void 0;
		(l !== n || i !== u) && (r = (n = l).copy()).on(o, i = u), c.on = r;
	};
}
function Xu(e, t, n) {
	var r = (e += "") == "transform" ? wl : du;
	return t == null ? this.styleTween(e, Gu(e, r)).on("end.style." + e, Ku(e)) : typeof t == "function" ? this.styleTween(e, Ju(e, r, uu(this, "style." + e, t))).each(Yu(this._id, e)) : this.styleTween(e, qu(e, r, t), n).on("end.style." + e, null);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/styleTween.js
function Zu(e, t, n) {
	return function(r) {
		this.style.setProperty(e, t.call(this, r), n);
	};
}
function Qu(e, t, n) {
	var r, i;
	function a() {
		var a = t.apply(this, arguments);
		return a !== i && (r = (i = a) && Zu(e, a, n)), r;
	}
	return a._value = t, a;
}
function $u(e, t, n) {
	var r = "style." + (e += "");
	if (arguments.length < 2) return (r = this.tween(r)) && r._value;
	if (t == null) return this.tween(r, null);
	if (typeof t != "function") throw Error();
	return this.tween(r, Qu(e, t, n ?? ""));
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/text.js
function ed(e) {
	return function() {
		this.textContent = e;
	};
}
function td(e) {
	return function() {
		var t = e(this);
		this.textContent = t ?? "";
	};
}
function nd(e) {
	return this.tween("text", typeof e == "function" ? td(uu(this, "text", e)) : ed(e == null ? "" : e + ""));
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/textTween.js
function rd(e) {
	return function(t) {
		this.textContent = e.call(this, t);
	};
}
function id(e) {
	var t, n;
	function r() {
		var r = e.apply(this, arguments);
		return r !== n && (t = (n = r) && rd(r)), t;
	}
	return r._value = e, r;
}
function ad(e) {
	var t = "text";
	if (arguments.length < 1) return (t = this.tween(t)) && t._value;
	if (e == null) return this.tween(t, null);
	if (typeof e != "function") throw Error();
	return this.tween(t, id(e));
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/transition.js
function od() {
	for (var e = this._name, t = this._id, n = dd(), r = this._groups, i = r.length, a = 0; a < i; ++a) for (var o = r[a], s = o.length, c, l = 0; l < s; ++l) if (c = o[l]) {
		var u = ru(c, t);
		eu(c, e, n, l, o, {
			time: u.time + u.delay + u.duration,
			delay: 0,
			duration: u.duration,
			ease: u.ease
		});
	}
	return new ld(r, this._parents, e, n);
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/end.js
function sd() {
	var e, t, n = this, r = n._id, i = n.size();
	return new Promise(function(a, o) {
		var s = { value: o }, c = { value: function() {
			--i === 0 && a();
		} };
		n.each(function() {
			var n = nu(this, r), i = n.on;
			i !== e && (t = (e = i).copy(), t._.cancel.push(s), t._.interrupt.push(s), t._.end.push(c)), n.on = t;
		}), i === 0 && a();
	});
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/transition/index.js
var cd = 0;
function ld(e, t, n, r) {
	this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function ud(e) {
	return Xs().transition(e);
}
function dd() {
	return ++cd;
}
var fd = Xs.prototype;
ld.prototype = ud.prototype = {
	constructor: ld,
	select: Vu,
	selectAll: Hu,
	selectChild: fd.selectChild,
	selectChildren: fd.selectChildren,
	filter: Pu,
	merge: Fu,
	selection: Wu,
	transition: od,
	call: fd.call,
	nodes: fd.nodes,
	node: fd.node,
	size: fd.size,
	empty: fd.empty,
	each: fd.each,
	on: Ru,
	attr: vu,
	attrTween: Cu,
	style: Xu,
	styleTween: $u,
	text: nd,
	textTween: ad,
	remove: Bu,
	tween: lu,
	delay: Eu,
	duration: ku,
	ease: ju,
	easeVarying: Nu,
	end: sd,
	[Symbol.iterator]: fd[Symbol.iterator]
};
//#endregion
//#region ../../node_modules/.pnpm/d3-ease@3.0.1/node_modules/d3-ease/src/cubic.js
function pd(e) {
	return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-transition@3.0.1_d3-selection@3.0.0/node_modules/d3-transition/src/selection/transition.js
var md = {
	time: null,
	delay: 0,
	duration: 250,
	ease: pd
};
function hd(e, t) {
	for (var n; !(n = e.__transition) || !(n = n[t]);) if (!(e = e.parentNode)) throw Error(`transition ${t} not found`);
	return n;
}
function gd(e) {
	var t, n;
	e instanceof ld ? (t = e._id, e = e._name) : (t = dd(), (n = md).time = Hl(), e = e == null ? null : e + "");
	for (var r = this._groups, i = r.length, a = 0; a < i; ++a) for (var o = r[a], s = o.length, c, l = 0; l < s; ++l) (c = o[l]) && eu(c, e, t, l, o, n || hd(c, t));
	return new ld(r, this._parents, e, t);
}
Xs.prototype.interrupt = ou, Xs.prototype.transition = gd;
//#endregion
//#region ../../node_modules/.pnpm/d3-zoom@3.0.0/node_modules/d3-zoom/src/constant.js
var _d = (e) => () => e;
//#endregion
//#region ../../node_modules/.pnpm/d3-zoom@3.0.0/node_modules/d3-zoom/src/event.js
function vd(e, { sourceEvent: t, target: n, transform: r, dispatch: i }) {
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
//#endregion
//#region ../../node_modules/.pnpm/d3-zoom@3.0.0/node_modules/d3-zoom/src/transform.js
function yd(e, t, n) {
	this.k = e, this.x = t, this.y = n;
}
yd.prototype = {
	constructor: yd,
	scale: function(e) {
		return e === 1 ? this : new yd(this.k * e, this.x, this.y);
	},
	translate: function(e, t) {
		return e === 0 & t === 0 ? this : new yd(this.k, this.x + this.k * e, this.y + this.k * t);
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
var bd = new yd(1, 0, 0);
xd.prototype = yd.prototype;
function xd(e) {
	for (; !e.__zoom;) if (!(e = e.parentNode)) return bd;
	return e.__zoom;
}
//#endregion
//#region ../../node_modules/.pnpm/d3-zoom@3.0.0/node_modules/d3-zoom/src/noevent.js
function Sd(e) {
	e.stopImmediatePropagation();
}
function Cd(e) {
	e.preventDefault(), e.stopImmediatePropagation();
}
//#endregion
//#region ../../node_modules/.pnpm/d3-zoom@3.0.0/node_modules/d3-zoom/src/zoom.js
function wd(e) {
	return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function Td() {
	var e = this;
	return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function Ed() {
	return this.__zoom || bd;
}
function Dd(e) {
	return -e.deltaY * (e.deltaMode === 1 ? .05 : e.deltaMode ? 1 : .002) * (e.ctrlKey ? 10 : 1);
}
function Od() {
	return navigator.maxTouchPoints || "ontouchstart" in this;
}
function kd(e, t, n) {
	var r = e.invertX(t[0][0]) - n[0][0], i = e.invertX(t[1][0]) - n[1][0], a = e.invertY(t[0][1]) - n[0][1], o = e.invertY(t[1][1]) - n[1][1];
	return e.translate(i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i), o > a ? (a + o) / 2 : Math.min(0, a) || Math.max(0, o));
}
function Ad() {
	var e = wd, t = Td, n = kd, r = Dd, i = Od, a = [0, Infinity], o = [[-Infinity, -Infinity], [Infinity, Infinity]], s = 250, c = Al, l = Ja("start", "zoom", "end"), u, d, f, p = 500, m = 150, h = 0, g = 10;
	function _(e) {
		e.property("__zoom", Ed).on("wheel.zoom", w, { passive: !1 }).on("mousedown.zoom", T).on("dblclick.zoom", E).filter(i).on("touchstart.zoom", D).on("touchmove.zoom", ee).on("touchend.zoom touchcancel.zoom", te).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
	}
	_.transform = function(e, t, n, r) {
		var i = e.selection ? e.selection() : e;
		i.property("__zoom", Ed), e === i ? i.interrupt().each(function() {
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
			return n(bd.translate(c[0], c[1]).scale(s.k).translate(typeof r == "function" ? -r.apply(this, arguments) : -r, typeof i == "function" ? -i.apply(this, arguments) : -i), e, o);
		}, a, s);
	};
	function v(e, t) {
		return t = Math.max(a[0], Math.min(a[1], t)), t === e.k ? e : new yd(t, e.x, e.y);
	}
	function y(e, t, n) {
		var r = t[0] - n[0] * e.k, i = t[1] - n[1] * e.k;
		return r === e.x && i === e.y ? e : new yd(e.k, r, i);
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
					e = new yd(n, l[0] - t[0] * n, l[1] - t[1] * n);
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
			var t = Qs(this.that).datum();
			l.call(e, this.that, new vd(e, {
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
		var s = S(this, i).event(t), c = this.__zoom, l = Math.max(a[0], Math.min(a[1], c.k * 2 ** r.apply(this, arguments))), u = ec(t);
		if (s.wheel) (s.mouse[0][0] !== u[0] || s.mouse[0][1] !== u[1]) && (s.mouse[1] = c.invert(s.mouse[0] = u)), clearTimeout(s.wheel);
		else if (c.k === l) return;
		else s.mouse = [u, c.invert(u)], au(this), s.start();
		Cd(t), s.wheel = setTimeout(d, m), s.zoom("mouse", n(y(v(c, l), s.mouse[0], s.mouse[1]), s.extent, o));
		function d() {
			s.wheel = null, s.end();
		}
	}
	function T(t, ...r) {
		if (f || !e.apply(this, arguments)) return;
		var i = t.currentTarget, a = S(this, r, !0).event(t), s = Qs(t.view).on("mousemove.zoom", d, !0).on("mouseup.zoom", p, !0), c = ec(t, i), l = t.clientX, u = t.clientY;
		ac(t.view), Sd(t), a.mouse = [c, this.__zoom.invert(c)], au(this), a.start();
		function d(e) {
			if (Cd(e), !a.moved) {
				var t = e.clientX - l, r = e.clientY - u;
				a.moved = t * t + r * r > h;
			}
			a.event(e).zoom("mouse", n(y(a.that.__zoom, a.mouse[0] = ec(e, i), a.mouse[1]), a.extent, o));
		}
		function p(e) {
			s.on("mousemove.zoom mouseup.zoom", null), oc(e.view, a.moved), Cd(e), a.event(e).end();
		}
	}
	function E(r, ...i) {
		if (e.apply(this, arguments)) {
			var a = this.__zoom, c = ec(r.changedTouches ? r.changedTouches[0] : r, this), l = a.invert(c), u = a.k * (r.shiftKey ? .5 : 2), d = n(y(v(a, u), c, l), t.apply(this, i), o);
			Cd(r), s > 0 ? Qs(this).transition().duration(s).call(x, d, c, r) : Qs(this).call(_.transform, d, c, r);
		}
	}
	function D(t, ...n) {
		if (e.apply(this, arguments)) {
			var r = t.touches, i = r.length, a = S(this, n, t.changedTouches.length === i).event(t), o, s, c, l;
			for (Sd(t), s = 0; s < i; ++s) c = r[s], l = ec(c, this), l = [
				l,
				this.__zoom.invert(l),
				c.identifier
			], a.touch0 ? !a.touch1 && a.touch0[2] !== l[2] && (a.touch1 = l, a.taps = 0) : (a.touch0 = l, o = !0, a.taps = 1 + !!u);
			u &&= clearTimeout(u), o && (a.taps < 2 && (d = l[0], u = setTimeout(function() {
				u = null;
			}, p)), au(this), a.start());
		}
	}
	function ee(e, ...t) {
		if (this.__zooming) {
			var r = S(this, t).event(e), i = e.changedTouches, a = i.length, s, c, l, u;
			for (Cd(e), s = 0; s < a; ++s) c = i[s], l = ec(c, this), r.touch0 && r.touch0[2] === c.identifier ? r.touch0[0] = l : r.touch1 && r.touch1[2] === c.identifier && (r.touch1[0] = l);
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
			for (Sd(e), f && clearTimeout(f), f = setTimeout(function() {
				f = null;
			}, p), a = 0; a < i; ++a) o = r[a], n.touch0 && n.touch0[2] === o.identifier ? delete n.touch0 : n.touch1 && n.touch1[2] === o.identifier && delete n.touch1;
			if (n.touch1 && !n.touch0 && (n.touch0 = n.touch1, delete n.touch1), n.touch0) n.touch0[1] = this.__zoom.invert(n.touch0[0]);
			else if (n.end(), n.taps === 2 && (o = ec(o, this), Math.hypot(d[0] - o[0], d[1] - o[1]) < g)) {
				var s = Qs(this).on("dblclick.zoom");
				s && s.apply(this, arguments);
			}
		}
	}
	return _.wheelDelta = function(e) {
		return arguments.length ? (r = typeof e == "function" ? e : _d(+e), _) : r;
	}, _.filter = function(t) {
		return arguments.length ? (e = typeof t == "function" ? t : _d(!!t), _) : e;
	}, _.touchable = function(e) {
		return arguments.length ? (i = typeof e == "function" ? e : _d(!!e), _) : i;
	}, _.extent = function(e) {
		return arguments.length ? (t = typeof e == "function" ? e : _d([[+e[0][0], +e[0][1]], [+e[1][0], +e[1][1]]]), _) : t;
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
//#endregion
//#region ../../node_modules/.pnpm/@xyflow+system@0.0.79/node_modules/@xyflow/system/dist/esm/index.js
var jd = {
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
}, Md = [[-Infinity, -Infinity], [Infinity, Infinity]], Nd = [
	"Enter",
	" ",
	"Escape"
], Pd = {
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
}, Fd;
(function(e) {
	e.Strict = "strict", e.Loose = "loose";
})(Fd ||= {});
var Id;
(function(e) {
	e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(Id ||= {});
var Ld;
(function(e) {
	e.Partial = "partial", e.Full = "full";
})(Ld ||= {});
var Rd = {
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
}, zd;
(function(e) {
	e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(zd ||= {});
var Bd;
(function(e) {
	e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(Bd ||= {});
var Q;
(function(e) {
	e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(Q ||= {});
var Vd = {
	[Q.Left]: Q.Right,
	[Q.Right]: Q.Left,
	[Q.Top]: Q.Bottom,
	[Q.Bottom]: Q.Top
};
function Hd(e, t) {
	if (!e && !t) return !0;
	if (!e || !t || e.size !== t.size) return !1;
	if (!e.size && !t.size) return !0;
	for (let n of e.keys()) if (!t.has(n)) return !1;
	return !0;
}
function Ud(e, t, n) {
	if (!n) return;
	let r = [];
	e.forEach((e, n) => {
		t?.has(n) || r.push(e);
	}), r.length && n(r);
}
function Wd(e) {
	return e === null ? null : e ? "valid" : "invalid";
}
var Gd = (e) => !!e && typeof e == "object" && "id" in e && "source" in e && "target" in e, Kd = (e) => !!e && typeof e == "object" && "id" in e && "position" in e && !("source" in e) && !("target" in e), qd = (e) => !!e && typeof e == "object" && "id" in e && "internals" in e && !("source" in e) && !("target" in e), Jd = (e, t = [0, 0]) => {
	let { width: n, height: r } = kf(e), i = e.origin ?? t, a = n * i[0], o = r * i[1];
	return {
		x: e.position.x - a,
		y: e.position.y - o
	};
}, Yd = (e, t = { nodeOrigin: [0, 0] }) => e.length === 0 ? {
	x: 0,
	y: 0,
	width: 0,
	height: 0
} : df(e.reduce((e, n) => {
	let r = typeof n == "string", i = !t.nodeLookup && !r ? n : void 0;
	return t.nodeLookup && (i = r ? t.nodeLookup.get(n) : qd(n) ? n : t.nodeLookup.get(n.id)), lf(e, i ? pf(i, t.nodeOrigin) : {
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
})), Xd = (e, t = {}) => {
	let n = {
		x: Infinity,
		y: Infinity,
		x2: -Infinity,
		y2: -Infinity
	}, r = !1;
	return e.forEach((e) => {
		(t.filter === void 0 || t.filter(e)) && (n = lf(n, pf(e)), r = !0);
	}), r ? df(n) : {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
}, Zd = (e, t, [n, r, i] = [
	0,
	0,
	1
], a = !1, o = !1) => {
	let s = (t.x - n) / i, c = (t.y - r) / i, l = t.width / i, u = t.height / i, d = [];
	for (let t of e.values()) {
		let { measured: e, selectable: n = !0, hidden: r = !1 } = t;
		if (o && !n || r) continue;
		let i = e.width ?? t.width ?? t.initialWidth ?? 0, f = e.height ?? t.height ?? t.initialHeight ?? 0, { x: p, y: m } = t.internals.positionAbsolute, h = hf(s, c, l, u, p, m, i, f), g = i * f, _ = a && h > 0;
		(!t.internals.handleBounds || _ || h >= g || t.dragging) && d.push(t);
	}
	return d;
}, Qd = (e, t) => {
	let n = /* @__PURE__ */ new Set();
	return e.forEach((e) => {
		n.add(e.id);
	}), t.filter((e) => n.has(e.source) || n.has(e.target));
};
function $d(e, t) {
	let n = /* @__PURE__ */ new Map(), r = t?.nodes ? new Set(t.nodes.map((e) => e.id)) : null;
	return e.forEach((e) => {
		let i;
		if (t?.includeHiddenNodes) {
			let { width: t, height: n } = kf(e);
			i = t > 0 && n > 0;
		} else i = !!(e.measured.width && e.measured.height && !e.hidden);
		i && (!r || r.has(e.id)) && n.set(e.id, e);
	}), n;
}
async function ef({ nodes: e, width: t, height: n, panZoom: r, minZoom: i, maxZoom: a }, o) {
	if (e.size === 0) return !0;
	let s = Ef(Xd($d(e, o)), t, n, o?.minZoom ?? i, o?.maxZoom ?? a, o?.padding ?? .1);
	return await r.setViewport(s, {
		duration: o?.duration,
		ease: o?.ease,
		interpolate: o?.interpolate
	}), !0;
}
function tf({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: i, onError: a }) {
	let o = n.get(e), s = o.parentId ? n.get(o.parentId) : void 0, { x: c, y: l } = s ? s.internals.positionAbsolute : {
		x: 0,
		y: 0
	}, u = o.origin ?? r, d = o.extent || i;
	if (o.extent === "parent" && !o.expandParent) if (!s) a?.("005", jd.error005());
	else {
		let e = s.measured.width, t = s.measured.height;
		e && t && (d = [[c, l], [c + e, l + t]]);
	}
	else s && Of(o.extent) && (d = [[o.extent[0][0] + c, o.extent[0][1] + l], [o.extent[1][0] + c, o.extent[1][1] + l]]);
	let f = Of(d) ? af(t, d, o.measured) : t;
	return (o.measured.width === void 0 || o.measured.height === void 0) && a?.("015", jd.error015()), {
		position: {
			x: f.x - c + (o.measured.width ?? 0) * u[0],
			y: f.y - l + (o.measured.height ?? 0) * u[1]
		},
		positionAbsolute: f
	};
}
async function nf({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: i }) {
	let a = new Set(e.map((e) => e.id)), o = [];
	for (let e of n) {
		if (e.deletable === !1) continue;
		let t = a.has(e.id), n = !t && e.parentId && o.find((t) => t.id === e.parentId);
		(t || n) && o.push(e);
	}
	let s = new Set(t.map((e) => e.id)), c = r.filter((e) => e.deletable !== !1), l = Qd(o, c);
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
var rf = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), af = (e = {
	x: 0,
	y: 0
}, t, n) => ({
	x: rf(e.x, t[0][0], t[1][0] - (n?.width ?? 0)),
	y: rf(e.y, t[0][1], t[1][1] - (n?.height ?? 0))
});
function of(e, t, n) {
	let { width: r, height: i } = kf(n), { x: a, y: o } = n.internals.positionAbsolute;
	return af(e, [[a, o], [a + r, o + i]], t);
}
var sf = (e, t, n) => e < t ? rf(Math.abs(e - t), 1, t) / t : e > n ? -rf(Math.abs(e - n), 1, t) / t : 0, cf = (e, t, n = 15, r = 40) => [sf(e.x, r, t.width - r) * n, sf(e.y, r, t.height - r) * n], lf = (e, t) => ({
	x: Math.min(e.x, t.x),
	y: Math.min(e.y, t.y),
	x2: Math.max(e.x2, t.x2),
	y2: Math.max(e.y2, t.y2)
}), uf = ({ x: e, y: t, width: n, height: r }) => ({
	x: e,
	y: t,
	x2: e + n,
	y2: t + r
}), df = ({ x: e, y: t, x2: n, y2: r }) => ({
	x: e,
	y: t,
	width: n - e,
	height: r - t
}), ff = (e, t = [0, 0]) => {
	let { x: n, y: r } = qd(e) ? e.internals.positionAbsolute : Jd(e, t);
	return {
		x: n,
		y: r,
		width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
		height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
	};
}, pf = (e, t = [0, 0]) => {
	let { x: n, y: r } = qd(e) ? e.internals.positionAbsolute : Jd(e, t);
	return {
		x: n,
		y: r,
		x2: n + (e.measured?.width ?? e.width ?? e.initialWidth ?? 0),
		y2: r + (e.measured?.height ?? e.height ?? e.initialHeight ?? 0)
	};
}, mf = (e, t) => df(lf(uf(e), uf(t))), hf = (e, t, n, r, i, a, o, s) => {
	let c = Math.max(0, Math.min(e + n, i + o) - Math.max(e, i)), l = Math.max(0, Math.min(t + r, a + s) - Math.max(t, a));
	return Math.ceil(c * l);
}, gf = (e, t) => hf(e.x, e.y, e.width, e.height, t.x, t.y, t.width, t.height), _f = (e) => vf(e.width) && vf(e.height) && vf(e.x) && vf(e.y), vf = (e) => !isNaN(e) && isFinite(e), yf = (e, t) => (e, t) => {}, bf = (e, t = [1, 1]) => ({
	x: t[0] * Math.round(e.x / t[0]),
	y: t[1] * Math.round(e.y / t[1])
}), xf = ({ x: e, y: t }, [n, r, i], a = !1, o = [1, 1]) => {
	let s = {
		x: (e - n) / i,
		y: (t - r) / i
	};
	return a ? bf(s, o) : s;
}, Sf = ({ x: e, y: t }, [n, r, i]) => ({
	x: e * i + n,
	y: t * i + r
});
function Cf(e, t) {
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
function wf(e, t, n) {
	if (typeof e == "string" || typeof e == "number") {
		let r = Cf(e, n), i = Cf(e, t);
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
		let r = Cf(e.top ?? e.y ?? 0, n), i = Cf(e.bottom ?? e.y ?? 0, n), a = Cf(e.left ?? e.x ?? 0, t), o = Cf(e.right ?? e.x ?? 0, t);
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
function Tf(e, t, n, r, i, a) {
	let { x: o, y: s } = Sf(e, [
		t,
		n,
		r
	]), { x: c, y: l } = Sf({
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
var Ef = (e, t, n, r, i, a) => {
	let o = wf(a, t, n), s = (t - o.x) / e.width, c = (n - o.y) / e.height, l = rf(Math.min(s, c), r, i), u = e.x + e.width / 2, d = e.y + e.height / 2, f = t / 2 - u * l, p = n / 2 - d * l, m = Tf(e, f, p, l, t, n), h = {
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
}, Df = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function Of(e) {
	return e != null && e !== "parent";
}
function kf(e) {
	return {
		width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
		height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
	};
}
function Af(e) {
	return (e.measured?.width ?? e.width ?? e.initialWidth) !== void 0 && (e.measured?.height ?? e.height ?? e.initialHeight) !== void 0;
}
function jf(e, t = {
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
function Mf(e) {
	return {
		...Pd,
		...e || {}
	};
}
function Nf(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: i }) {
	let { x: a, y: o } = zf(e), s = xf({
		x: a - (i?.left ?? 0),
		y: o - (i?.top ?? 0)
	}, r), { x: c, y: l } = n ? bf(s, t) : s;
	return {
		xSnapped: c,
		ySnapped: l,
		...s
	};
}
var Pf = (e) => ({
	width: e.offsetWidth,
	height: e.offsetHeight
}), Ff = (e) => e?.getRootNode?.() || window?.document, If = [
	"INPUT",
	"SELECT",
	"TEXTAREA"
];
function Lf(e) {
	let t = e.composedPath?.()?.[0] || e.target;
	return t?.nodeType === 1 ? If.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey") : !1;
}
var Rf = (e) => "clientX" in e, zf = (e, t) => {
	let n = Rf(e), r = n ? e.clientX : e.touches?.[0].clientX, i = n ? e.clientY : e.touches?.[0].clientY;
	return {
		x: r - (t?.left ?? 0),
		y: i - (t?.top ?? 0)
	};
}, Bf = (e, t, n, r, i) => {
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
			...Pf(t)
		};
	});
};
function Vf({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: i, sourceControlY: a, targetControlX: o, targetControlY: s }) {
	let c = e * .125 + i * .375 + o * .375 + n * .125, l = t * .125 + a * .375 + s * .375 + r * .125;
	return [
		c,
		l,
		Math.abs(c - e),
		Math.abs(l - t)
	];
}
function Hf(e, t) {
	return e >= 0 ? .5 * e : t * 25 * Math.sqrt(-e);
}
function Uf({ pos: e, x1: t, y1: n, x2: r, y2: i, c: a }) {
	switch (e) {
		case Q.Left: return [t - Hf(t - r, a), n];
		case Q.Right: return [t + Hf(r - t, a), n];
		case Q.Top: return [t, n - Hf(n - i, a)];
		case Q.Bottom: return [t, n + Hf(i - n, a)];
	}
}
function Wf({ sourceX: e, sourceY: t, sourcePosition: n = Q.Bottom, targetX: r, targetY: i, targetPosition: a = Q.Top, curvature: o = .25 }) {
	let [s, c] = Uf({
		pos: n,
		x1: e,
		y1: t,
		x2: r,
		y2: i,
		c: o
	}), [l, u] = Uf({
		pos: a,
		x1: r,
		y1: i,
		x2: e,
		y2: t,
		c: o
	}), [d, f, p, m] = Vf({
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
function Gf({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
	let i = Math.abs(n - e) / 2, a = n < e ? n + i : n - i, o = Math.abs(r - t) / 2;
	return [
		a,
		r < t ? r + o : r - o,
		i,
		o
	];
}
function Kf({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: i = !1, zIndexMode: a = "basic" }) {
	return a === "manual" ? r : (i && n ? r + 1e3 : r) + Math.max(e.parentId || i && e.selected ? e.internals.z : 0, t.parentId || i && t.selected ? t.internals.z : 0);
}
function qf({ sourceNode: e, targetNode: t, width: n, height: r, transform: i }) {
	let a = lf(pf(e), pf(t));
	return a.x === a.x2 && (a.x2 += 1), a.y === a.y2 && (a.y2 += 1), gf({
		x: -i[0] / i[2],
		y: -i[1] / i[2],
		width: n / i[2],
		height: r / i[2]
	}, df(a)) > 0;
}
var Jf = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, Yf = (e, t) => t.some((t) => t.source === e.source && t.target === e.target && (t.sourceHandle === e.sourceHandle || !t.sourceHandle && !e.sourceHandle) && (t.targetHandle === e.targetHandle || !t.targetHandle && !e.targetHandle)), Xf = (e, t, n = {}) => {
	if (!e.source || !e.target) return n.onError?.("006", jd.error006()), t;
	let r = n.getEdgeId || Jf, i;
	return i = Gd(e) ? { ...e } : {
		...e,
		id: r(e)
	}, Yf(i, t) ? t : (i.sourceHandle === null && delete i.sourceHandle, i.targetHandle === null && delete i.targetHandle, t.concat(i));
};
function Zf({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
	let [i, a, o, s] = Gf({
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
var Qf = {
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
}, $f = ({ source: e, sourcePosition: t = Q.Bottom, target: n }) => t === Q.Left || t === Q.Right ? e.x < n.x ? {
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
}, ep = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2);
function tp({ source: e, sourcePosition: t = Q.Bottom, target: n, targetPosition: r = Q.Top, center: i, offset: a, stepPosition: o }) {
	let s = Qf[t], c = Qf[r], l = {
		x: e.x + s.x * a,
		y: e.y + s.y * a
	}, u = {
		x: n.x + c.x * a,
		y: n.y + c.y * a
	}, d = $f({
		source: l,
		sourcePosition: t,
		target: u
	}), f = d.x === 0 ? "y" : "x", p = d[f], m = [], h, g, _ = {
		x: 0,
		y: 0
	}, v = {
		x: 0,
		y: 0
	}, [, , y, b] = Gf({
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
function np(e, t, n, r) {
	let i = Math.min(ep(e, t) / 2, ep(t, n) / 2, r), { x: a, y: o } = t;
	if (e.x === a && a === n.x || e.y === o && o === n.y) return `L${a} ${o}`;
	if (e.y === o) {
		let t = e.x < n.x ? -1 : 1, r = e.y < n.y ? 1 : -1;
		return `L ${a + i * t},${o}Q ${a},${o} ${a},${o + i * r}`;
	}
	let s = e.x < n.x ? 1 : -1;
	return `L ${a},${o + i * (e.y < n.y ? -1 : 1)}Q ${a},${o} ${a + i * s},${o}`;
}
function rp({ sourceX: e, sourceY: t, sourcePosition: n = Q.Bottom, targetX: r, targetY: i, targetPosition: a = Q.Top, borderRadius: o = 5, centerX: s, centerY: c, offset: l = 20, stepPosition: u = .5 }) {
	let [d, f, p, m, h] = tp({
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
	for (let e = 1; e < d.length - 1; e++) g += np(d[e - 1], d[e], d[e + 1], o);
	return g += `L${d[d.length - 1].x} ${d[d.length - 1].y}`, [
		g,
		f,
		p,
		m,
		h
	];
}
function ip(e) {
	return e && !!(e.internals.handleBounds || e.handles?.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function ap(e) {
	let { sourceNode: t, targetNode: n } = e;
	if (!ip(t) || !ip(n)) return null;
	let r = t.internals.handleBounds || op(t.handles), i = n.internals.handleBounds || op(n.handles), a = cp(r?.source ?? [], e.sourceHandle), o = cp(e.connectionMode === Fd.Strict ? i?.target ?? [] : (i?.target ?? []).concat(i?.source ?? []), e.targetHandle);
	if (!a || !o) return e.onError?.("008", jd.error008(a ? "target" : "source", {
		id: e.id,
		sourceHandle: e.sourceHandle,
		targetHandle: e.targetHandle
	})), null;
	let s = a?.position || Q.Bottom, c = o?.position || Q.Top, l = sp(t, a, s), u = sp(n, o, c);
	return {
		sourceX: l.x,
		sourceY: l.y,
		targetX: u.x,
		targetY: u.y,
		sourcePosition: s,
		targetPosition: c
	};
}
function op(e) {
	if (!e) return null;
	let t = [], n = [];
	for (let r of e) r.width = r.width ?? 1, r.height = r.height ?? 1, r.type === "source" ? t.push(r) : r.type === "target" && n.push(r);
	return {
		source: t,
		target: n
	};
}
function sp(e, t, n = Q.Left, r = !1) {
	let i = (t?.x ?? 0) + e.internals.positionAbsolute.x, a = (t?.y ?? 0) + e.internals.positionAbsolute.y, { width: o, height: s } = t ?? kf(e);
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
function cp(e, t) {
	return e && (t ? e.find((e) => e.id === t) : e[0]) || null;
}
function lp(e, t) {
	return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((t) => `${t}=${e[t]}`).join("&")}` : "";
}
function up(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: i }) {
	let a = /* @__PURE__ */ new Set();
	return e.reduce((e, o) => ([o.markerStart || r, o.markerEnd || i].forEach((r) => {
		if (r && typeof r == "object") {
			let i = lp(r, t);
			a.has(i) || (e.push({
				id: i,
				color: r.color || n,
				...r
			}), a.add(i));
		}
	}), e), []).sort((e, t) => e.id.localeCompare(t.id));
}
function dp(e, t, n, r, i) {
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
var fp = 1e3, pp = 10, mp = {
	nodeOrigin: [0, 0],
	nodeExtent: Md,
	elevateNodesOnSelect: !0,
	zIndexMode: "basic",
	defaults: {}
}, hp = {
	...mp,
	checkEquality: !0
};
function gp(e, t) {
	let n = { ...e };
	for (let e in t) t[e] !== void 0 && (n[e] = t[e]);
	return n;
}
function _p(e, t, n) {
	let r = gp(mp, n);
	for (let n of e.values()) if (n.parentId) Sp(n, e, t, r);
	else {
		let e = af(Jd(n, r.nodeOrigin), Of(n.extent) ? n.extent : r.nodeExtent, kf(n));
		n.internals.positionAbsolute = e;
	}
}
function vp(e, t) {
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
function yp(e) {
	return e === "manual";
}
function bp(e, t, n, r = {}) {
	let i = gp(hp, r), a = { i: 0 }, o = new Map(t), s = i?.elevateNodesOnSelect && !yp(i.zIndexMode) ? fp : 0, c = e.length > 0, l = !1;
	t.clear(), n.clear();
	for (let u of e) {
		let e = o.get(u.id);
		if (i.checkEquality && u === e?.internals.userNode) t.set(u.id, e);
		else {
			let n = af(Jd(u, i.nodeOrigin), Of(u.extent) ? u.extent : i.nodeExtent, kf(u));
			e = {
				...i.defaults,
				...u,
				measured: {
					width: u.measured?.width,
					height: u.measured?.height
				},
				internals: {
					positionAbsolute: n,
					handleBounds: vp(u, e),
					z: Cp(u, s, i.zIndexMode),
					userNode: u
				}
			}, t.set(u.id, e);
		}
		(e.measured === void 0 || e.measured.width === void 0 || e.measured.height === void 0) && !e.hidden && (c = !1), u.parentId && Sp(e, t, n, r, a), l ||= u.selected ?? !1;
	}
	return {
		nodesInitialized: c,
		hasSelectedNodes: l
	};
}
function xp(e, t) {
	if (!e.parentId) return;
	let n = t.get(e.parentId);
	n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function Sp(e, t, n, r, i) {
	let { elevateNodesOnSelect: a, nodeOrigin: o, nodeExtent: s, zIndexMode: c } = gp(mp, r), l = e.parentId, u = t.get(l);
	if (!u) {
		console.warn(`Parent node ${l} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
		return;
	}
	xp(e, n), i && !u.parentId && u.internals.rootParentIndex === void 0 && c === "auto" && (u.internals.rootParentIndex = ++i.i, u.internals.z = u.internals.z + i.i * pp), i && u.internals.rootParentIndex !== void 0 && (i.i = u.internals.rootParentIndex);
	let { x: d, y: f, z: p } = wp(e, u, o, s, a && !yp(c) ? fp : 0, c), { positionAbsolute: m } = e.internals, h = d !== m.x || f !== m.y;
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
function Cp(e, t, n) {
	let r = vf(e.zIndex) ? e.zIndex : 0;
	return yp(n) ? r : r + (e.selected ? t : 0);
}
function wp(e, t, n, r, i, a) {
	let { x: o, y: s } = t.internals.positionAbsolute, c = kf(e), l = Jd(e, n), u = Of(e.extent) ? af(l, e.extent, c) : l, d = af({
		x: o + u.x,
		y: s + u.y
	}, r, c);
	e.extent === "parent" && (d = of(d, c, t));
	let f = Cp(e, i, a), p = t.internals.z ?? 0;
	return {
		x: d.x,
		y: d.y,
		z: p >= f ? p + 1 : f
	};
}
function Tp(e, t, n, r = [0, 0]) {
	let i = [], a = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = t.get(n.parentId);
		if (!e) continue;
		let r = mf(a.get(n.parentId)?.expandedRect ?? ff(e), n.rect);
		a.set(n.parentId, {
			expandedRect: r,
			parent: e
		});
	}
	return a.size > 0 && a.forEach(({ expandedRect: t, parent: a }, o) => {
		let s = a.internals.positionAbsolute, c = kf(a), l = a.origin ?? r, u = t.x < s.x ? Math.round(Math.abs(s.x - t.x)) : 0, d = t.y < s.y ? Math.round(Math.abs(s.y - t.y)) : 0, f = Math.max(c.width, Math.round(t.width)), p = Math.max(c.height, Math.round(t.height)), m = (f - c.width) * l[0], h = (p - c.height) * l[1];
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
function Ep(e, t, n, r, i, a, o) {
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
		let s = Pf(r.nodeElement), u = e.measured.width !== s.width || e.measured.height !== s.height;
		if (s.width && s.height && (u || !e.internals.handleBounds || r.force)) {
			let p = r.nodeElement.getBoundingClientRect(), m = Of(e.extent) ? e.extent : a, { positionAbsolute: h } = e.internals;
			if (e.parentId && e.extent === "parent") {
				let n = t.get(e.parentId);
				n && (h = of(h, s, n));
			} else m && (h = af(h, m, s));
			let g = {
				...e,
				measured: s,
				internals: {
					...e.internals,
					positionAbsolute: h,
					handleBounds: {
						source: Bf("source", r.nodeElement, p, d, e.id),
						target: Bf("target", r.nodeElement, p, d, e.id)
					}
				}
			};
			t.set(e.id, g), e.parentId && Sp(g, t, n, {
				nodeOrigin: i,
				zIndexMode: o
			}), c = !0, u && (l.push({
				id: e.id,
				type: "dimensions",
				dimensions: s
			}), e.expandParent && e.parentId && f.push({
				id: e.id,
				parentId: e.parentId,
				rect: ff(g, i)
			}));
		}
	}
	if (f.length > 0) {
		let e = Tp(f, t, n, i);
		l.push(...e);
	}
	return {
		changes: l,
		updatedInternals: c
	};
}
async function Dp({ delta: e, panZoom: t, transform: n, translateExtent: r, width: i, height: a }) {
	if (!t || !e.x && !e.y) return !1;
	let o = await t.setViewportConstrained({
		x: n[0] + e.x,
		y: n[1] + e.y,
		zoom: n[2]
	}, [[0, 0], [i, a]], r);
	return !!o && (o.x !== n[0] || o.y !== n[1] || o.k !== n[2]);
}
function Op(e, t, n, r, i, a) {
	let o = i, s = r.get(o) || /* @__PURE__ */ new Map();
	r.set(o, s.set(n, t)), o = `${i}-${e}`;
	let c = r.get(o) || /* @__PURE__ */ new Map();
	if (r.set(o, c.set(n, t)), a) {
		o = `${i}-${e}-${a}`;
		let s = r.get(o) || /* @__PURE__ */ new Map();
		r.set(o, s.set(n, t));
	}
}
function kp(e, t, n) {
	e.clear(), t.clear();
	for (let r of n) {
		let { source: n, target: i, sourceHandle: a = null, targetHandle: o = null } = r, s = {
			edgeId: r.id,
			source: n,
			target: i,
			sourceHandle: a,
			targetHandle: o
		}, c = `${n}-${a}--${i}-${o}`;
		Op("source", s, `${i}-${o}--${n}-${a}`, e, n, a), Op("target", s, c, e, i, o), t.set(r.id, r);
	}
}
function Ap(e, t) {
	if (e === null || t === null) return !1;
	let n = Array.isArray(e) ? e : [e], r = Array.isArray(t) ? t : [t];
	if (n.length !== r.length) return !1;
	for (let e = 0; e < n.length; e++) if (n[e].id !== r[e].id || n[e].type !== r[e].type || !Object.is(n[e].data, r[e].data)) return !1;
	return !0;
}
function jp(e, t) {
	if (!e.parentId) return !1;
	let n = t.get(e.parentId);
	return n ? n.selected ? !0 : jp(n, t) : !1;
}
function Mp(e, t, n) {
	let r = e;
	do {
		if (r?.matches?.(t)) return !0;
		if (r === n) return !1;
		r = r?.parentElement;
	} while (r);
	return !1;
}
function Np(e, t, n, r) {
	let i = /* @__PURE__ */ new Map();
	for (let [a, o] of e) if ((o.selected || o.id === r) && (!o.parentId || !jp(o, e)) && (o.draggable || t && o.draggable === void 0)) {
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
function Pp({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
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
function Fp({ dragItems: e, snapGrid: t, x: n, y: r }) {
	let i = e.values().next().value;
	if (!i) return null;
	let a = {
		x: n - i.distance.x,
		y: r - i.distance.y
	}, o = bf(a, t);
	return {
		x: o.x - a.x,
		y: o.y - a.y
	};
}
function Ip({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: i }) {
	let a = {
		x: null,
		y: null
	}, o = 0, s = /* @__PURE__ */ new Map(), c = !1, l = {
		x: 0,
		y: 0
	}, u = null, d = !1, f = null, p = !1, m = !1, h = null;
	function g({ noDragClassName: g, handleSelector: _, domNode: v, isSelectable: y, nodeId: b, nodeClickDistance: x = 0 }) {
		f = Qs(v);
		function S({ x: e, y: n }) {
			let { nodeLookup: i, nodeExtent: o, snapGrid: c, snapToGrid: l, nodeOrigin: u, onNodeDrag: d, onSelectionDrag: f, onError: p, updateNodePositions: g } = t();
			a = {
				x: e,
				y: n
			};
			let _ = !1, v = s.size > 1, y = v && o ? uf(Xd(s)) : null, x = v && l ? Fp({
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
				} : bf(a, c));
				let s = null;
				if (v && o && !r.extent && y) {
					let { positionAbsolute: e } = r.internals, t = e.x - y.x + o[0][0], n = e.x + r.measured.width - y.x2 + o[1][0], i = e.y - y.y + o[0][1], a = e.y + r.measured.height - y.y2 + o[1][1];
					s = [[t, i], [n, a]];
				}
				let { position: d, positionAbsolute: f } = tf({
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
				let [e, t] = Pp({
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
			let [s, d] = cf(l, u, r);
			(s !== 0 || d !== 0) && (a.x = (a.x ?? 0) - s / e[2], a.y = (a.y ?? 0) - d / e[2], await n({
				x: s,
				y: d
			}) && S(a)), o = requestAnimationFrame(C);
		}
		function w(r) {
			let { nodeLookup: i, multiSelectionActive: o, nodesDraggable: c, transform: l, snapGrid: f, snapToGrid: p, selectNodesOnDrag: m, onNodeDragStart: h, onSelectionDragStart: g, unselectNodesAndEdges: _ } = t();
			d = !0, (!m || !y) && !o && b && (i.get(b)?.selected || _()), y && m && b && e?.(b);
			let v = Nf(r.sourceEvent, {
				transform: l,
				snapGrid: f,
				snapToGrid: p,
				containerBounds: u
			});
			if (a = v, s = Np(i, c, v, b), s.size > 0 && (n || h || !b && g)) {
				let [e, t] = Pp({
					nodeId: b,
					dragItems: s,
					nodeLookup: i
				});
				n?.(r.sourceEvent, s, e, t), h?.(r.sourceEvent, e, t), b || g?.(r.sourceEvent, t);
			}
		}
		let T = pc().clickDistance(x).on("start", (e) => {
			let { domNode: n, nodeDragThreshold: r, transform: i, snapGrid: o, snapToGrid: s } = t();
			u = n?.getBoundingClientRect() || null, p = !1, m = !1, h = e.sourceEvent, r === 0 && w(e), a = Nf(e.sourceEvent, {
				transform: i,
				snapGrid: o,
				snapToGrid: s,
				containerBounds: u
			}), l = zf(e.sourceEvent, u);
		}).on("drag", (e) => {
			let { autoPanOnNodeDrag: n, transform: r, snapGrid: i, snapToGrid: o, nodeDragThreshold: f, nodeLookup: m } = t(), g = Nf(e.sourceEvent, {
				transform: r,
				snapGrid: i,
				snapToGrid: o,
				containerBounds: u
			});
			if (h = e.sourceEvent, (e.sourceEvent.type === "touchmove" && e.sourceEvent.touches.length > 1 || b && !m.has(b)) && (p = !0), !p) {
				if (!c && n && d && (c = !0, C()), !d) {
					let t = zf(e.sourceEvent, u), n = t.x - l.x, r = t.y - l.y;
					Math.sqrt(n * n + r * r) > f && w(e);
				}
				(a.x !== g.xSnapped || a.y !== g.ySnapped) && s && d && (l = zf(e.sourceEvent, u), S(g));
			}
		}).on("end", (e) => {
			if (!d || p) {
				p && s.size > 0 && t().updateNodePositions(s, !1);
				return;
			}
			if (c = !1, d = !1, cancelAnimationFrame(o), s.size > 0) {
				let { nodeLookup: n, updateNodePositions: r, onNodeDragStop: a, onSelectionDragStop: o } = t();
				if (m &&= (r(s, !1), !1), i || a || !b && o) {
					let [t, r] = Pp({
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
			return !e.button && (!g || !Mp(t, `.${g}`, v)) && (!_ || Mp(t, _, v));
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
function Lp(e, t, n) {
	let r = [], i = {
		x: e.x - n,
		y: e.y - n,
		width: n * 2,
		height: n * 2
	};
	for (let e of t.values()) gf(i, ff(e)) > 0 && r.push(e);
	return r;
}
var Rp = 250;
function zp(e, t, n, r) {
	let i = [], a = Infinity, o = Lp(e, n, t + Rp);
	for (let n of o) {
		let o = [...n.internals.handleBounds?.source ?? [], ...n.internals.handleBounds?.target ?? []];
		for (let s of o) {
			if (r.nodeId === s.nodeId && r.type === s.type && r.id === s.id) continue;
			let { x: o, y: c } = sp(n, s, s.position, !0), l = Math.sqrt((o - e.x) ** 2 + (c - e.y) ** 2);
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
function Bp(e, t, n, r, i, a = !1) {
	let o = r.get(e);
	if (!o) return null;
	let s = i === "strict" ? o.internals.handleBounds?.[t] : [...o.internals.handleBounds?.source ?? [], ...o.internals.handleBounds?.target ?? []], c = (n ? s?.find((e) => e.id === n) : s?.[0]) ?? null;
	return c && a ? {
		...c,
		...sp(o, c, c.position, !0)
	} : c;
}
function Vp(e, t) {
	return e || (t?.classList.contains("target") ? "target" : t?.classList.contains("source") ? "source" : null);
}
function Hp(e, t) {
	let n = null;
	return t ? n = !0 : e && !t && (n = !1), n;
}
var Up = () => !0;
function Wp(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: i, edgeUpdaterType: a, isTarget: o, domNode: s, nodeLookup: c, lib: l, autoPanOnConnect: u, flowId: d, panBy: f, cancelConnection: p, onConnectStart: m, onConnect: h, onConnectEnd: g, isValidConnection: _ = Up, onReconnectEnd: v, updateConnection: y, getTransform: b, getFromHandle: x, autoPanSpeed: S, dragThreshold: C = 1, handleDomNode: w }) {
	let T = Ff(e.target), E = 0, D, { x: ee, y: te } = zf(e), ne = Vp(a, w), re = s?.getBoundingClientRect(), ie = !1;
	if (!re || !ne) return;
	let ae = Bp(i, ne, r, c, t);
	if (!ae) return;
	let oe = zf(e, re), se = !1, ce = null, le = !1, ue = null;
	function de() {
		if (!u || !re) return;
		let [e, t] = cf(oe, re, S);
		f({
			x: e,
			y: t
		}), E = requestAnimationFrame(de);
	}
	let fe = {
		...ae,
		nodeId: i,
		type: ne,
		position: ae.position
	}, pe = c.get(i), me = {
		inProgress: !0,
		isValid: null,
		from: sp(pe, fe, Q.Left, !0),
		fromHandle: fe,
		fromPosition: fe.position,
		fromNode: pe,
		to: oe,
		toHandle: null,
		toPosition: Vd[fe.position],
		toNode: null,
		pointer: oe
	};
	function he() {
		ie = !0, y(me), m?.(e, {
			nodeId: i,
			handleId: r,
			handleType: ne
		});
	}
	C === 0 && he();
	function ge(e) {
		if (!ie) {
			let { x: t, y: n } = zf(e), r = t - ee, i = n - te;
			if (!(r * r + i * i > C * C)) return;
			he();
		}
		if (!x() || !fe) {
			_e(e);
			return;
		}
		let a = b();
		oe = zf(e, re), D = zp(xf(oe, a, !1, [1, 1]), n, c, fe), se ||= (de(), !0);
		let s = Gp(e, {
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
		ue = s.handleDomNode, ce = s.connection, le = Hp(!!D, s.isValid);
		let u = c.get(i), f = u ? sp(u, fe, Q.Left, !0) : me.from, p = {
			...me,
			from: f,
			isValid: le,
			to: s.toHandle && le ? Sf({
				x: s.toHandle.x,
				y: s.toHandle.y
			}, a) : oe,
			toHandle: s.toHandle,
			toPosition: le && s.toHandle ? s.toHandle.position : Vd[fe.position],
			toNode: s.toHandle ? c.get(s.toHandle.nodeId) : null,
			pointer: oe
		};
		y(p), me = p;
	}
	function _e(e) {
		if (!("touches" in e && e.touches.length > 0)) {
			if (ie) {
				(D || ue) && ce && le && h?.(ce);
				let { inProgress: t, ...n } = me, r = {
					...n,
					toPosition: me.toHandle ? me.toPosition : null
				};
				g?.(e, r), a && v?.(e, r);
			}
			p(), cancelAnimationFrame(E), se = !1, le = !1, ce = null, ue = null, T.removeEventListener("mousemove", ge), T.removeEventListener("mouseup", _e), T.removeEventListener("touchmove", ge), T.removeEventListener("touchend", _e);
		}
	}
	T.addEventListener("mousemove", ge), T.addEventListener("mouseup", _e), T.addEventListener("touchmove", ge), T.addEventListener("touchend", _e);
}
function Gp(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: i, fromType: a, doc: o, lib: s, flowId: c, isValidConnection: l = Up, nodeLookup: u }) {
	let d = a === "target", f = t ? o.querySelector(`.${s}-flow__handle[data-id="${c}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: p, y: m } = zf(e), h = o.elementFromPoint(p, m), g = h?.classList.contains(`${s}-flow__handle`) ? h : f, _ = {
		handleDomNode: g,
		isValid: !1,
		connection: null,
		toHandle: null
	};
	if (g) {
		let e = Vp(void 0, g), t = g.getAttribute("data-nodeid"), a = g.getAttribute("data-handleid"), o = g.classList.contains("connectable"), s = g.classList.contains("connectableend");
		if (!t || !e) return _;
		let c = {
			source: d ? t : r,
			sourceHandle: d ? a : i,
			target: d ? r : t,
			targetHandle: d ? i : a
		};
		_.connection = c, _.isValid = o && s && (n === Fd.Strict ? d && e === "source" || !d && e === "target" : t !== r || a !== i) && l(c), _.toHandle = Bp(t, e, a, u, n, !0);
	}
	return _;
}
var Kp = {
	onPointerDown: Wp,
	isValid: Gp
};
function qp({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
	let i = Qs(e);
	function a({ translateExtent: e, width: a, height: o, zoomStep: s = 1, pannable: c = !0, zoomable: l = !0, inversePan: u = !1 }) {
		let d = (e) => {
			if (e.sourceEvent.type !== "wheel" || !t) return;
			let r = n(), i = e.sourceEvent.ctrlKey && Df() ? 10 : 1, a = -e.sourceEvent.deltaY * (e.sourceEvent.deltaMode === 1 ? .05 : e.sourceEvent.deltaMode ? 1 : .002) * s, o = r[2] * 2 ** (a * i);
			t.scaleTo(o);
		}, f = [0, 0], p = Ad().on("start", (e) => {
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
		pointer: ec
	};
}
var Jp = (e) => ({
	x: e.x,
	y: e.y,
	zoom: e.k
}), Yp = ({ x: e, y: t, zoom: n }) => bd.translate(e, t).scale(n), Xp = (e, t) => e.target.closest(`.${t}`), Zp = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), Qp = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, $p = (e, t = 0, n = Qp, r = () => {}) => {
	let i = typeof t == "number" && t > 0;
	return i || r(), i ? e.transition().duration(t).ease(n).on("end", r) : e;
}, em = (e) => {
	let t = e.ctrlKey && Df() ? 10 : 1;
	return -e.deltaY * (e.deltaMode === 1 ? .05 : e.deltaMode ? 1 : .002) * t;
};
function tm({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: i, panOnScrollSpeed: a, zoomOnPinch: o, onPanZoomStart: s, onPanZoom: c, onPanZoomEnd: l }) {
	return (u) => {
		if (Xp(u, t)) return u.ctrlKey && u.preventDefault(), !1;
		u.preventDefault(), u.stopImmediatePropagation();
		let d = n.property("__zoom").k || 1;
		if (u.ctrlKey && o) {
			let e = ec(u), t = d * 2 ** em(u);
			r.scaleTo(n, t, e, u);
			return;
		}
		let f = u.deltaMode === 1 ? 20 : 1, p = i === Id.Vertical ? 0 : u.deltaX * f, m = i === Id.Horizontal ? 0 : u.deltaY * f;
		!Df() && u.shiftKey && i !== Id.Vertical && (p = u.deltaY * f, m = 0), r.translateBy(n, -(p / d) * a, -(m / d) * a, { internal: !0 });
		let h = Jp(n.property("__zoom"));
		clearTimeout(e.panScrollTimeout), e.isPanScrolling ? c?.(u, h) : (e.isPanScrolling = !0, s?.(u, h)), e.panScrollTimeout = setTimeout(() => {
			l?.(u, h), e.isPanScrolling = !1;
		}, 150);
	};
}
function nm({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
	return function(r, i) {
		let a = r.type === "wheel", o = !t && a && !r.ctrlKey, s = Xp(r, e);
		if (r.ctrlKey && a && s && r.preventDefault(), o || s) return null;
		r.preventDefault(), n.call(this, r, i);
	};
}
function rm({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
	return (r) => {
		if (r.sourceEvent?.internal) return;
		let i = Jp(r.transform);
		e.mouseButton = r.sourceEvent?.button || 0, e.isZoomingOrPanning = !0, e.prevViewport = i, r.sourceEvent?.type === "mousedown" && t(!0), n && n?.(r.sourceEvent, i);
	};
}
function im({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: i }) {
	return (a) => {
		e.usedRightMouseButton = !!(n && Zp(t, e.mouseButton ?? 0)), a.sourceEvent?.sync || r([
			a.transform.x,
			a.transform.y,
			a.transform.k
		]), i && !a.sourceEvent?.internal && i?.(a.sourceEvent, Jp(a.transform));
	};
}
function am({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: i, onPaneContextMenu: a }) {
	return (o) => {
		if (!o.sourceEvent?.internal && (e.isZoomingOrPanning = !1, a && Zp(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && o.sourceEvent && a(o.sourceEvent), e.usedRightMouseButton = !1, r(!1), i)) {
			let t = Jp(o.transform);
			e.prevViewport = t, clearTimeout(e.timerId), e.timerId = setTimeout(() => {
				i?.(o.sourceEvent, t);
			}, n ? 150 : 0);
		}
	};
}
function om({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: i, zoomOnDoubleClick: a, userSelectionActive: o, noWheelClassName: s, noPanClassName: c, lib: l, connectionInProgress: u }) {
	return (d) => {
		let f = e || t, p = n && d.ctrlKey, m = d.type === "wheel";
		if (d.button === 1 && d.type === "mousedown" && (Xp(d, `${l}-flow__node`) || Xp(d, `${l}-flow__edge`))) return !0;
		if (!r && !f && !i && !a && !n || o || u && !m || Xp(d, s) && m || Xp(d, c) && (!m || i && m && !e) || !n && d.ctrlKey && m) return !1;
		if (!n && d.type === "touchstart" && d.touches?.length > 1) return d.preventDefault(), !1;
		if (!f && !i && !p && m || !r && (d.type === "mousedown" || d.type === "touchstart") || Array.isArray(r) && !r.includes(d.button) && d.type === "mousedown") return !1;
		let h = Array.isArray(r) && r.includes(d.button) || !d.button || d.button <= 1;
		return (!d.ctrlKey || m) && h;
	};
}
function sm({ domNode: e, minZoom: t, maxZoom: n, translateExtent: r, viewport: i, onPanZoom: a, onPanZoomStart: o, onPanZoomEnd: s, onDraggingChange: c }) {
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
	let f = Ad().extent(() => d).scaleExtent([t, n]).translateExtent(r), p = Qs(e).call(f);
	y({
		x: i.x,
		y: i.y,
		zoom: rf(i.zoom, t, n)
	}, [[0, 0], [u.width, u.height]], r);
	let m = p.on("wheel.zoom"), h = p.on("dblclick.zoom");
	f.wheelDelta(em);
	async function g(e, t) {
		return p ? new Promise((n) => {
			f?.interpolate(t?.interpolate === "linear" ? gl : Al).transform($p(p, t?.duration, t?.ease, () => n(!0)), e);
		}) : !1;
	}
	function _({ noWheelClassName: e, noPanClassName: t, onPaneContextMenu: n, userSelectionActive: r, panOnScroll: i, panOnDrag: u, panOnScrollMode: d, panOnScrollSpeed: g, preventScrolling: _, zoomOnPinch: y, zoomOnScroll: b, zoomOnDoubleClick: x, zoomActivationKeyPressed: S, lib: C, onTransformChange: w, connectionInProgress: T, paneClickDistance: E, selectionOnDrag: D }) {
		r && !l.isZoomingOrPanning && v();
		let ee = i && !S && !r;
		f.clickDistance(D ? Infinity : !vf(E) || E < 0 ? 0 : E);
		let te = ee ? tm({
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
		}) : nm({
			noWheelClassName: e,
			preventScrolling: _,
			d3ZoomHandler: m
		});
		p.on("wheel.zoom", te, { passive: !1 });
		let ne = rm({
			zoomPanValues: l,
			onDraggingChange: c,
			onPanZoomStart: o
		});
		f.on("start", ne);
		let re = im({
			zoomPanValues: l,
			panOnDrag: u,
			onPaneContextMenu: !!n,
			onPanZoom: a,
			onTransformChange: w
		});
		f.on("zoom", re);
		let ie = am({
			zoomPanValues: l,
			panOnDrag: u,
			panOnScroll: i,
			onPaneContextMenu: n,
			onPanZoomEnd: s,
			onDraggingChange: c
		});
		f.on("end", ie);
		let ae = om({
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
		let r = Yp(e), i = f?.constrain()(r, t, n);
		return i && await g(i), i;
	}
	async function b(e, t) {
		let n = Yp(e);
		return await g(n, t), n;
	}
	function x(e) {
		if (p) {
			let t = Yp(e), n = p.property("__zoom");
			(n.k !== e.zoom || n.x !== e.x || n.y !== e.y) && f?.transform(p, t, null, { sync: !0 });
		}
	}
	function S() {
		let e = p ? xd(p.node()) : {
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
			f?.interpolate(t?.interpolate === "linear" ? gl : Al).scaleTo($p(p, t?.duration, t?.ease, () => n(!0)), e);
		}) : !1;
	}
	async function w(e, t) {
		return p ? new Promise((n) => {
			f?.interpolate(t?.interpolate === "linear" ? gl : Al).scaleBy($p(p, t?.duration, t?.ease, () => n(!0)), e);
		}) : !1;
	}
	function T(e) {
		f?.scaleExtent(e);
	}
	function E(e) {
		f?.translateExtent(e);
	}
	function D(e) {
		let t = !vf(e) || e < 0 ? 0 : e;
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
var cm;
(function(e) {
	e.Line = "line", e.Handle = "handle";
})(cm ||= {});
//#endregion
//#region ../../node_modules/.pnpm/@xyflow+svelte@1.6.2_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@xyflow/svelte/dist/lib/utils/edges.js
var lm = yf("Svelte Flow", "https://svelteflow.dev/");
function um(e, t, n = {}) {
	return Xf(e, t, {
		...n,
		onError: n.onError ?? lm
	});
}
//#endregion
//#region ../../node_modules/.pnpm/@xyflow+svelte@1.6.2_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@xyflow/svelte/dist/lib/store/context.js
function dm() {
	let e = {};
	return [(t) => {
		if (t && !at(e)) throw Error(t);
		return rt(e);
	}, (t) => it(e, t)];
}
var [fm, pm] = dm(), [mm, hm] = dm(), [gm, _m] = dm(), vm = /* @__PURE__ */ new Set([
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
]), ym = /* @__PURE__ */ U("<div><!></div>");
function bm(e, t) {
	M(t, !0);
	let n = X(t, "id", 7, null), r = X(t, "type", 7, "source"), i = X(t, "position", 23, () => Q.Top), a = X(t, "style", 7), o = X(t, "class", 7), s = X(t, "isConnectable", 7), c = X(t, "isConnectableStart", 7, !0), l = X(t, "isConnectableEnd", 7, !0), u = X(t, "isValidConnection", 7), d = X(t, "onconnect", 7), f = X(t, "ondisconnect", 7), p = X(t, "children", 7), m = /* @__PURE__ */ La(t, vm), h = fm("Handle must be used within a Custom Node component"), g = mm("Handle must be used within a Custom Node component"), _ = /* @__PURE__ */ P(() => r() === "target"), v = /* @__PURE__ */ P(() => s() === void 0 ? g.value : s()), b = oh(), x = /* @__PURE__ */ P(() => b.ariaLabelConfig), S = null;
	Gn(() => {
		if (d() || f()) {
			b.edges;
			let e = b.connectionLookup.get(`${h}-${r()}${n() ? `-${n()}` : ""}`);
			if (S && !Hd(e, S)) {
				let t = e ?? /* @__PURE__ */ new Map();
				Ud(S, t, f()), Ud(t, S, d());
			}
			S = new Map(e);
		}
	});
	let C = /* @__PURE__ */ P(() => {
		if (!b.connection.inProgress) return [
			!1,
			!1,
			!1,
			!1,
			null
		];
		let { fromHandle: e, toHandle: t, isValid: i } = b.connection, a = e && e.nodeId === h && e.type === r() && e.id === n(), o = t && t.nodeId === h && t.type === r() && t.id === n();
		return [
			!0,
			a,
			o,
			b.connectionMode === Fd.Strict ? e?.type !== r() : h !== e?.nodeId || n() !== e?.id,
			o && i
		];
	}), T = /* @__PURE__ */ P(() => w(H(C), 5)), E = /* @__PURE__ */ P(() => H(T)[0]), D = /* @__PURE__ */ P(() => H(T)[1]), ee = /* @__PURE__ */ P(() => H(T)[2]), te = /* @__PURE__ */ P(() => H(T)[3]), ne = /* @__PURE__ */ P(() => H(T)[4]);
	function re(e) {
		let t = b.onbeforeconnect ? b.onbeforeconnect(e) : e;
		t && (b.addEdge(t), b.onconnect?.(e));
	}
	function ie(e) {
		let t = Rf(e);
		e.currentTarget && (t && e.button === 0 || !t) && Kp.onPointerDown(e, {
			handleId: n(),
			nodeId: h,
			isTarget: H(_),
			connectionRadius: b.connectionRadius,
			domNode: b.domNode,
			nodeLookup: b.nodeLookup,
			connectionMode: b.connectionMode,
			lib: "svelte",
			autoPanOnConnect: b.autoPanOnConnect,
			autoPanSpeed: b.autoPanSpeed,
			flowId: b.flowId,
			isValidConnection: u() || ((...e) => b.isValidConnection?.(...e) ?? !0),
			updateConnection: b.updateConnection,
			cancelConnection: b.cancelConnection,
			panBy: b.panBy,
			onConnect: re,
			onConnectStart: b.onconnectstart,
			onConnectEnd: (...e) => b.onconnectend?.(...e),
			getTransform: () => [
				b.viewport.x,
				b.viewport.y,
				b.viewport.zoom
			],
			getFromHandle: () => b.connection.fromHandle,
			dragThreshold: b.connectionDragThreshold,
			handleDomNode: e.currentTarget
		});
	}
	function ae(e) {
		if (!h || !b.clickConnectStartHandle && !c()) return;
		if (!b.clickConnectStartHandle) {
			b.onclickconnectstart?.(e, {
				nodeId: h,
				handleId: n(),
				handleType: r()
			}), b.clickConnectStartHandle = {
				nodeId: h,
				type: r(),
				id: n()
			};
			return;
		}
		let t = Ff(e.target), i = u() ?? b.isValidConnection, { connectionMode: a, clickConnectStartHandle: o, flowId: s, nodeLookup: l } = b, { connection: d, isValid: f } = Kp.isValid(e, {
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
		f && d && re(d);
		let p = structuredClone($e(b.connection));
		delete p.inProgress, p.toPosition = p.toHandle ? p.toHandle.position : null, b.onclickconnectend?.(e, p), b.clickConnectStartHandle = null;
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
	}, se = ym(), ce = () => {};
	return Sa(se, () => ({
		"data-handleid": n(),
		"data-nodeid": h,
		"data-handlepos": i(),
		"data-id": `${b.flowId ?? ""}-${h ?? ""}-${n() ?? "null" ?? ""}-${r() ?? ""}`,
		class: [
			"svelte-flow__handle",
			`svelte-flow__handle-${i()}`,
			b.noDragClass,
			b.noPanClass,
			i(),
			o()
		],
		onmousedown: ie,
		ontouchstart: ie,
		onclick: b.clickConnect ? ae : void 0,
		onkeypress: ce,
		style: a(),
		role: "button",
		"aria-label": H(x)["handle.ariaLabel"],
		tabindex: "-1",
		...m,
		[ca]: {
			valid: H(ne),
			connectingto: H(ee),
			connectingfrom: H(D),
			source: !H(_),
			target: H(_),
			connectablestart: c(),
			connectableend: l(),
			connectable: H(v),
			connectionindicator: H(v) && (!H(E) || H(te)) && (H(E) || b.clickConnectStartHandle ? l() : c())
		}
	})), q(R(se), () => p() ?? y), A(se), K(e, se), N(oe);
}
Z(bm, {
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
//#endregion
//#region ../../node_modules/.pnpm/@xyflow+svelte@1.6.2_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@xyflow/svelte/dist/lib/components/nodes/DefaultNode.svelte
var xm = /* @__PURE__ */ U("<!> <!>", 1);
function Sm(e, t) {
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
	}, o = xm(), s = z(o);
	bm(s, {
		type: "target",
		get position() {
			return r();
		}
	});
	var c = B(s);
	return bm(B(c), {
		type: "source",
		get position() {
			return i();
		}
	}), V(() => gi(c, ` ${n()?.label ?? ""} `)), K(e, o), N(a);
}
Z(Sm, {
	data: {},
	targetPosition: {},
	sourcePosition: {}
}, [], [], { mode: "open" });
//#endregion
//#region ../../node_modules/.pnpm/@xyflow+svelte@1.6.2_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@xyflow/svelte/dist/lib/components/nodes/InputNode.svelte
var Cm = /* @__PURE__ */ U(" <!>", 1);
function wm(e, t) {
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
	var a = Cm(), o = z(a);
	return bm(B(o), {
		type: "source",
		get position() {
			return r();
		}
	}), V(() => gi(o, `${n()?.label ?? ""} `)), K(e, a), N(i);
}
Z(wm, {
	data: {},
	sourcePosition: {}
}, [], [], { mode: "open" });
//#endregion
//#region ../../node_modules/.pnpm/@xyflow+svelte@1.6.2_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@xyflow/svelte/dist/lib/components/nodes/OutputNode.svelte
var Tm = /* @__PURE__ */ U(" <!>", 1);
function Em(e, t) {
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
	var a = Tm(), o = z(a);
	return bm(B(o), {
		type: "target",
		get position() {
			return r();
		}
	}), V(() => gi(o, `${n()?.label ?? ""} `)), K(e, a), N(i);
}
Z(Em, {
	data: {},
	targetPosition: {}
}, [], [], { mode: "open" });
//#endregion
//#region ../../node_modules/.pnpm/@xyflow+svelte@1.6.2_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@xyflow/svelte/dist/lib/components/nodes/GroupNode.svelte
function Dm(e, t) {}
Z(Dm, {}, [], [], { mode: "open" });
//#endregion
//#region ../../node_modules/.pnpm/@xyflow+svelte@1.6.2_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@xyflow/svelte/dist/lib/actions/portal/portal.svelte.js
function Om(e, t, n) {
	if (!n || !t) return;
	let r = n === "root" ? t : t.querySelector(`.svelte-flow__${n}`);
	r && r.appendChild(e);
}
function km(e, t) {
	let n = /* @__PURE__ */ P(oh), r = /* @__PURE__ */ P(() => H(n).domNode), i;
	return H(r) ? Om(e, H(r), t) : i = Kn(() => {
		Un(() => {
			Om(e, H(r), t), i?.();
		});
	}), {
		async update(t) {
			Om(e, H(r), t);
		},
		destroy() {
			e.parentNode && e.parentNode.removeChild(e), i?.();
		}
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@xyflow+svelte@1.6.2_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@xyflow/svelte/dist/lib/actions/portal/utils.svelte.js
function Am() {
	let e = /* @__PURE__ */ I(typeof window > "u");
	if (H(e)) {
		let t = Kn(() => {
			Un(() => {
				L(e, !1), t?.();
			});
		});
	}
	return { get value() {
		return H(e);
	} };
}
//#endregion
//#region ../../node_modules/.pnpm/@xyflow+svelte@1.6.2_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@xyflow/svelte/dist/lib/utils/index.js
var jm = (e) => Kd(e), Mm = (e) => Gd(e);
function Nm(e) {
	return e === void 0 ? void 0 : `${e}px`;
}
var Pm = {
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
}, Fm = /* @__PURE__ */ new Set([
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
]), Im = /* @__PURE__ */ U("<div><!></div>"), Lm = {
	hash: "svelte-u5oby2",
	code: ".transparent.svelte-u5oby2 {background:transparent;}"
};
function Rm(e, t) {
	M(t, !0), Gi(e, Lm);
	let n = X(t, "x", 7, 0), r = X(t, "y", 7, 0), i = X(t, "width", 7), a = X(t, "height", 7), o = X(t, "selectEdgeOnClick", 7, !1), s = X(t, "transparent", 7, !1), c = X(t, "class", 7), l = X(t, "children", 7), u = /* @__PURE__ */ La(t, Fm), d = oh(), f = gm("EdgeLabel must be used within a Custom Edge component"), p = /* @__PURE__ */ P(() => d.visible.edges.get(f)?.zIndex);
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
	}, h = Im(), g = () => {
		o() && f && d.handleEdgeSelection(f);
	};
	return Sa(h, (e) => ({
		class: [
			"svelte-flow__edge-label",
			{ transparent: s() },
			c()
		],
		tabindex: "-1",
		onclick: g,
		...u,
		[la]: e
	}), [() => ({
		display: Am().value ? "none" : void 0,
		cursor: o() ? "pointer" : void 0,
		transform: `translate(-50%, -50%) translate(${n() ?? ""}px,${r() ?? ""}px)`,
		"pointer-events": "all",
		width: Nm(i()),
		height: Nm(a()),
		"z-index": H(p)
	})], void 0, void 0, "svelte-u5oby2"), q(R(h), () => l() ?? y), A(h), Ki(h, (e, t) => km?.(e, t), () => "edge-labels"), K(e, h), N(m);
}
Z(Rm, {
	x: {},
	y: {},
	width: {},
	height: {},
	selectEdgeOnClick: {},
	transparent: {},
	class: {},
	children: {}
}, [], [], { mode: "open" });
//#endregion
//#region ../../node_modules/.pnpm/@xyflow+svelte@1.6.2_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@xyflow/svelte/dist/lib/components/edges/BaseEdge.svelte
var zm = /* @__PURE__ */ new Set([
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
]), Bm = /* @__PURE__ */ W("<path></path>"), Vm = /* @__PURE__ */ W("<path fill=\"none\"></path><!><!>", 1);
function Hm(e, t) {
	M(t, !0);
	let n = X(t, "id", 7), r = X(t, "path", 7), i = X(t, "label", 7), a = X(t, "labelX", 7), o = X(t, "labelY", 7), s = X(t, "labelStyle", 7), c = X(t, "markerStart", 7), l = X(t, "markerEnd", 7), u = X(t, "style", 7), d = X(t, "interactionWidth", 7, 20), f = X(t, "class", 7), p = /* @__PURE__ */ La(t, zm);
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
	}, h = Vm(), g = z(h), _ = B(g), v = (e) => {
		var t = Bm();
		Sa(t, () => ({
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
		Rm(e, {
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
				var n = ii();
				V(() => gi(n, i())), K(e, n);
			},
			$$slots: { default: !0 }
		});
	};
	return J(y, (e) => {
		i() && e(b);
	}), V(() => {
		Y(g, "id", n()), Y(g, "d", r()), na(g, 0, Xi(["svelte-flow__edge-path", f()])), Y(g, "marker-start", c()), Y(g, "marker-end", l()), ia(g, u());
	}), K(e, h), N(m);
}
Z(Hm, {
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
//#endregion
//#region ../../node_modules/.pnpm/@xyflow+svelte@1.6.2_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@xyflow/svelte/dist/lib/components/edges/BezierEdge.svelte
function Um(e, t) {
	M(t, !0);
	let n = X(t, "id", 7), r = X(t, "interactionWidth", 7), i = X(t, "label", 7), a = X(t, "labelStyle", 7), o = X(t, "markerEnd", 7), s = X(t, "markerStart", 7), c = X(t, "pathOptions", 7), l = X(t, "sourcePosition", 7), u = X(t, "sourceX", 7), d = X(t, "sourceY", 7), f = X(t, "style", 7), p = X(t, "targetPosition", 7), m = X(t, "targetX", 7), h = X(t, "targetY", 7), g = /* @__PURE__ */ P(() => Wf({
		sourceX: u(),
		sourceY: d(),
		targetX: m(),
		targetY: h(),
		sourcePosition: l(),
		targetPosition: p(),
		curvature: c()?.curvature
	})), _ = /* @__PURE__ */ P(() => w(H(g), 3)), v = /* @__PURE__ */ P(() => H(_)[0]), y = /* @__PURE__ */ P(() => H(_)[1]), b = /* @__PURE__ */ P(() => H(_)[2]);
	return Hm(e, {
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
Z(Um, {
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
//#endregion
//#region ../../node_modules/.pnpm/@xyflow+svelte@1.6.2_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@xyflow/svelte/dist/lib/components/edges/SmoothStepEdgeInternal.svelte
function Wm(e, t) {
	M(t, !0);
	let n = X(t, "interactionWidth", 7), r = X(t, "label", 7), i = X(t, "labelStyle", 7), a = X(t, "style", 7), o = X(t, "markerEnd", 7), s = X(t, "markerStart", 7), c = X(t, "sourcePosition", 7), l = X(t, "sourceX", 7), u = X(t, "sourceY", 7), d = X(t, "targetPosition", 7), f = X(t, "targetX", 7), p = X(t, "targetY", 7), m = /* @__PURE__ */ P(() => rp({
		sourceX: l(),
		sourceY: u(),
		targetX: f(),
		targetY: p(),
		sourcePosition: c(),
		targetPosition: d()
	})), h = /* @__PURE__ */ P(() => w(H(m), 3)), g = /* @__PURE__ */ P(() => H(h)[0]), _ = /* @__PURE__ */ P(() => H(h)[1]), v = /* @__PURE__ */ P(() => H(h)[2]);
	return Hm(e, {
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
Z(Wm, {
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
//#endregion
//#region ../../node_modules/.pnpm/@xyflow+svelte@1.6.2_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@xyflow/svelte/dist/lib/components/edges/StraightEdgeInternal.svelte
function Gm(e, t) {
	M(t, !0);
	let n = X(t, "sourceX", 7), r = X(t, "sourceY", 7), i = X(t, "targetX", 7), a = X(t, "targetY", 7), o = X(t, "label", 7), s = X(t, "labelStyle", 7), c = X(t, "markerStart", 7), l = X(t, "markerEnd", 7), u = X(t, "interactionWidth", 7), d = X(t, "style", 7), f = /* @__PURE__ */ P(() => Zf({
		sourceX: n(),
		sourceY: r(),
		targetX: i(),
		targetY: a()
	})), p = /* @__PURE__ */ P(() => w(H(f), 3)), m = /* @__PURE__ */ P(() => H(p)[0]), h = /* @__PURE__ */ P(() => H(p)[1]), g = /* @__PURE__ */ P(() => H(p)[2]);
	return Hm(e, {
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
Z(Gm, {
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
//#endregion
//#region ../../node_modules/.pnpm/@xyflow+svelte@1.6.2_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@xyflow/svelte/dist/lib/components/edges/StepEdgeInternal.svelte
function Km(e, t) {
	M(t, !0);
	let n = X(t, "sourceX", 7), r = X(t, "sourceY", 7), i = X(t, "sourcePosition", 7), a = X(t, "targetX", 7), o = X(t, "targetY", 7), s = X(t, "targetPosition", 7), c = X(t, "label", 7), l = X(t, "labelStyle", 7), u = X(t, "markerStart", 7), d = X(t, "markerEnd", 7), f = X(t, "interactionWidth", 7), p = X(t, "style", 7), m = /* @__PURE__ */ P(() => rp({
		sourceX: n(),
		sourceY: r(),
		targetX: a(),
		targetY: o(),
		sourcePosition: i(),
		targetPosition: s(),
		borderRadius: 0
	})), h = /* @__PURE__ */ P(() => w(H(m), 3)), g = /* @__PURE__ */ P(() => H(h)[0]), _ = /* @__PURE__ */ P(() => H(h)[1]), v = /* @__PURE__ */ P(() => H(h)[2]);
	return Hm(e, {
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
Z(Km, {
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
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.56.8_@typescript-eslint+types@8.65.0/node_modules/svelte/src/reactivity/map.js
var qm = class extends Map {
	#e = /* @__PURE__ */ new Map();
	#t = /* @__PURE__ */ I(0);
	#n = /* @__PURE__ */ I(0);
	#r = Or || -1;
	constructor(e) {
		if (super(), e) {
			for (var [t, n] of e) super.set(t, n);
			this.#n.v = super.size;
		}
	}
	#i(e) {
		return Or === this.#r ? /* @__PURE__ */ I(e) : gn(e);
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
		if (r === void 0) r = this.#i(0), n.set(e, r), L(this.#n, super.size), xn(o);
		else if (i !== t) {
			xn(r);
			var s = o.reactions === null ? null : new Set(o.reactions);
			(s === null || !r.reactions?.every((e) => s.has(e))) && xn(o);
		}
		return a;
	}
	delete(e) {
		var t = this.#e, n = t.get(e), r = super.delete(e);
		return n !== void 0 && (t.delete(e), L(n, -1)), r && (L(this.#n, super.size), xn(this.#t)), r;
	}
	clear() {
		if (super.size !== 0) {
			super.clear();
			var e = this.#e;
			L(this.#n, 0);
			for (var t of e.values()) L(t, -1);
			xn(this.#t), e.clear();
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
}, Jm = class {
	#e;
	#t;
	constructor(e, t) {
		this.#e = e, this.#t = kt(t);
	}
	get current() {
		return this.#t(), this.#e();
	}
}, Ym = /\(.+\)/, Xm = /* @__PURE__ */ new Set([
	"all",
	"print",
	"screen",
	"and",
	"or",
	"not",
	"only"
]), Zm = class extends Jm {
	constructor(e, t) {
		let n = Ym.test(e) || e.split(/[\s,]+/).some((e) => Xm.has(e.trim())) ? e : `(${e})`, r = window.matchMedia(n);
		super(() => r.matches, (e) => qr(r, "change", e));
	}
};
//#endregion
//#region ../../node_modules/.pnpm/@xyflow+svelte@1.6.2_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@xyflow/svelte/dist/lib/store/visibleElements.js
function Qm(e, t, n, r) {
	let i = /* @__PURE__ */ new Map();
	return Zd(e, {
		x: 0,
		y: 0,
		width: n,
		height: r
	}, t, !0).forEach((e) => {
		i.set(e.id, e);
	}), i;
}
function $m(e) {
	let { edges: t, defaultEdgeOptions: n, nodeLookup: r, previousEdges: i, connectionMode: a, onerror: o, onlyRenderVisible: s, elevateEdgesOnSelect: c, zIndexMode: l } = e, u = /* @__PURE__ */ new Map();
	for (let d of t) {
		let t = r.get(d.source), f = r.get(d.target);
		if (!t || !f) continue;
		if (s) {
			let { visibleNodes: n, transform: r, width: i, height: a } = e;
			if (qf({
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
		let m = ap({
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
			zIndex: Kf({
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
//#endregion
//#region ../../node_modules/.pnpm/@xyflow+svelte@1.6.2_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@xyflow/svelte/dist/lib/store/initial-store.svelte.js
var eh = yf("Svelte Flow", "https://svelteflow.dev/"), th = {
	input: wm,
	output: Em,
	default: Sm,
	group: Dm
}, nh = {
	straight: Gm,
	smoothstep: Wm,
	default: Um,
	step: Km
};
function rh(e, t, n, r, i, a) {
	return t && !n && r && i ? Ef(Xd(a, { filter: (e) => !!((e.width || e.initialWidth) && (e.height || e.initialHeight)) }), r, i, .5, 2, .1) : n ?? {
		x: 0,
		y: 0,
		zoom: 1
	};
}
function ih(e) {
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
			let { nodesInitialized: t } = bp(e.nodes, this.nodeLookup, this.parentLookup, {
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
		#c = /* @__PURE__ */ P(() => (kp(this.connectionLookup, this.edgeLookup, e.edges), e.edges));
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
				u = Qm(i, r, t, n), d = $m({
					...f,
					onlyRenderVisible: !0,
					visibleNodes: u,
					transform: r,
					width: t,
					height: n
				});
			} else u = this.nodeLookup, d = $m(f);
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
		#x = /* @__PURE__ */ P(() => e.props.nodeExtent ?? Md);
		get nodeExtent() {
			return H(this.#x);
		}
		set nodeExtent(e) {
			L(this.#x, e);
		}
		#S = /* @__PURE__ */ P(() => e.props.translateExtent ?? Md);
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
		#B = /* @__PURE__ */ P(() => e.props.selectionMode ?? Ld.Partial);
		get selectionMode() {
			return H(this.#B);
		}
		set selectionMode(e) {
			L(this.#B, e);
		}
		#V = /* @__PURE__ */ P(() => ({
			...th,
			...e.props.nodeTypes
		}));
		get nodeTypes() {
			return H(this.#V);
		}
		set nodeTypes(e) {
			L(this.#V, e);
		}
		#H = /* @__PURE__ */ P(() => ({
			...nh,
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
		#K = /* @__PURE__ */ P(() => Mf(e.props.ariaLabelConfig));
		get ariaLabelConfig() {
			return H(this.#K);
		}
		set ariaLabelConfig(e) {
			L(this.#K, e);
		}
		#q = /* @__PURE__ */ I(rh(this.nodesInitialized, e.props.fitView, e.props.initialViewport, this.width, this.height, this.nodeLookup));
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
		#J = /* @__PURE__ */ I(Rd);
		get _connection() {
			return H(this.#J);
		}
		set _connection(e) {
			L(this.#J, e);
		}
		#Y = /* @__PURE__ */ P(() => this._connection.inProgress ? {
			...this._connection,
			to: xf(this._connection.to, [
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
		#X = /* @__PURE__ */ P(() => e.props.connectionMode ?? Fd.Strict);
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
		#te = /* @__PURE__ */ P(() => up(e.edges, {
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
		#re = /* @__PURE__ */ P(() => e.props.onflowerror ?? eh);
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
			this.panZoom && (await ef({
				nodes: this.nodeLookup,
				width: this.width,
				height: this.height,
				panZoom: this.panZoom,
				minZoom: this.minZoom,
				maxZoom: this.maxZoom
			}, this.fitViewOptions), this.fitViewResolver?.resolve(!0), this.fitViewQueued = !1, this.fitViewOptions = void 0, this.fitViewResolver = null);
		};
		_prefersDark = new Zm("(prefers-color-scheme: dark)", e.props.colorModeSSR === "dark");
		#xe = /* @__PURE__ */ P(() => e.props.colorMode === "system" ? this._prefersDark.current ? "dark" : "light" : e.props.colorMode ?? "light");
		get colorMode() {
			return H(this.#xe);
		}
		set colorMode(e) {
			L(this.#xe, e);
		}
		constructor() {}
		resetStoreValues() {
			this.dragging = !1, this.selectionRect = null, this.selectionRectMode = null, this.selectionKeyPressed = !1, this.multiselectionKeyPressed = !1, this.deleteKeyPressed = !1, this.panActivationKeyPressed = !1, this.zoomActivationKeyPressed = !1, this._connection = Rd, this.clickConnectStartHandle = null, this.viewport = e.props.initialViewport ?? {
				x: 0,
				y: 0,
				zoom: 1
			}, this.ariaLiveMessage = "";
		}
	}
	return new t();
}
//#endregion
//#region ../../node_modules/.pnpm/@xyflow+svelte@1.6.2_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@xyflow/svelte/dist/lib/hooks/useStore.js
var ah = jd.error001("svelte");
function oh() {
	let e = rt(sh);
	if (!e) throw Error(ah);
	return e.getStore();
}
//#endregion
//#region ../../node_modules/.pnpm/@xyflow+svelte@1.6.2_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@xyflow/svelte/dist/lib/store/index.js
var sh = Symbol();
function ch(e) {
	let t = ih(e);
	function n(e) {
		t.nodeTypes = {
			...th,
			...e
		};
	}
	function r(e) {
		t.edgeTypes = {
			...nh,
			...e
		};
	}
	function i(e) {
		t.edges = um(e, t.edges, { onError: t.onerror });
	}
	let a = (e, n = !1) => {
		t.nodes = t.nodes.map((r) => {
			if (t.connection.inProgress && t.connection.fromNode.id === r.id) {
				let e = t.nodeLookup.get(r.id);
				e && (t.connection = {
					...t.connection,
					from: sp(e, t.connection.fromHandle, Q.Left, !0)
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
		let { changes: n, updatedInternals: r } = Ep(e, t.nodeLookup, t.parentLookup, t.domNode, t.nodeOrigin, t.nodeExtent, t.zIndexMode);
		if (!r) return;
		_p(t.nodeLookup, t.parentLookup, {
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
			t.onerror("012", jd.error012(e));
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
			t.onerror("016", jd.error016(e));
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
			i && (t = bf(t, i));
			let { position: n, positionAbsolute: a } = tf({
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
		return Dp({
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
		t._connection = Rd;
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
//#endregion
//#region ../../node_modules/.pnpm/@xyflow+svelte@1.6.2_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@xyflow/svelte/dist/lib/actions/zoom/index.js
function lh(e, t) {
	let { minZoom: n, maxZoom: r, initialViewport: i, onPanZoomStart: a, onPanZoom: o, onPanZoomEnd: s, translateExtent: c, setPanZoomInstance: l, onDraggingChange: u, onTransformChange: d } = t, f = sm({
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
//#endregion
//#region ../../node_modules/.pnpm/@xyflow+svelte@1.6.2_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@xyflow/svelte/dist/lib/container/Zoom/Zoom.svelte
var uh = /* @__PURE__ */ U("<div class=\"svelte-flow__zoom svelte-flow__container\"><!></div>");
function dh(e, t) {
	M(t, !0);
	let n = X(t, "store", 15), r = X(t, "panOnScrollMode", 7), i = X(t, "preventScrolling", 7), a = X(t, "zoomOnScroll", 7), o = X(t, "zoomOnDoubleClick", 7), s = X(t, "zoomOnPinch", 7), c = X(t, "panOnDrag", 7), l = X(t, "panOnScroll", 7), u = X(t, "panOnScrollSpeed", 7), d = X(t, "paneClickDistance", 7), f = X(t, "selectionOnDrag", 7), p = X(t, "onmovestart", 7), m = X(t, "onmove", 7), h = X(t, "onmoveend", 7), g = X(t, "oninit", 7), _ = X(t, "children", 7), v = /* @__PURE__ */ P(() => n().panActivationKeyPressed || c()), y = /* @__PURE__ */ P(() => n().panActivationKeyPressed || l()), { viewport: b } = n(), x = !1;
	Un(() => {
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
	}, C = uh();
	return q(R(C), _), A(C), Ki(C, (e, t) => lh?.(e, t), () => ({
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
Z(dh, {
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
//#endregion
//#region ../../node_modules/.pnpm/@xyflow+svelte@1.6.2_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@xyflow/svelte/dist/lib/container/Pane/Pane.svelte
function fh(e, t) {
	return (n) => {
		n.target === t && e?.(n);
	};
}
function ph(e) {
	return (t) => {
		let n = e.has(t.id);
		return !!t.selected === n ? t : {
			...t,
			selected: n
		};
	};
}
function mh(e, t) {
	if (e.size !== t.size) return !1;
	for (let n of e) if (!t.has(n)) return !1;
	return !0;
}
var hh = /* @__PURE__ */ U("<div><!></div>");
function gh(e, t) {
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
		let { x: o, y: s } = zf(e, p), c = xf({
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
		}, i = Sf(r, [
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
		h = new Set(Zd(n().nodeLookup, a, [
			n().viewport.x,
			n().viewport.y,
			n().viewport.zoom
		], n().selectionMode === Ld.Partial, !0).map((e) => e.id));
		let c = n().defaultEdgeOptions.selectable ?? !0;
		g = /* @__PURE__ */ new Set();
		for (let e of h) {
			let t = n().connectionLookup.get(e);
			if (t) for (let { edgeId: e } of t.values()) {
				let t = n().edgeLookup.get(e);
				t && (t.selectable ?? c) && g.add(e);
			}
		}
		mh(o, h) || n(n().nodes = n().nodes.map(ph(h)), !0), mh(s, g) || n(n().edges = n().edges.map(ph(g)), !0), n(n().selectionRectMode = "user", !0), n(n().selectionRect = a, !0);
	}
	function E() {
		if (!o() || !p) return;
		let [e, t] = cf(S, p, n().autoPanSpeed);
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
	Ti(() => {
		typeof window < "u" && D();
	});
	function ee(e) {
		if (!H(v) || !p || !n().selectionRect) return;
		let t = zf(e, p);
		S = {
			x: t.x,
			y: t.y
		};
		let r = Sf({
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
	}, se = hh();
	let ce;
	var le = /* @__PURE__ */ P(() => H(y) ? void 0 : fh(ae, f)), ue = /* @__PURE__ */ P(() => fh(re, f));
	return q(R(se), d), A(se), Na(se, (e) => f = e, () => f), V((e) => ce = na(se, 1, "svelte-flow__pane svelte-flow__container", null, ce, e), [() => ({
		draggable: r() === !0 || Array.isArray(r()) && r().includes(0),
		dragging: n().dragging,
		selection: H(v)
	})]), Yr("click", se, function(...e) {
		H(le)?.apply(this, e);
	}), Jr("pointerdown", se, function(...e) {
		(H(y) ? w : void 0)?.apply(this, e);
	}, !0), Yr("pointermove", se, function(...e) {
		(H(y) ? ee : void 0)?.apply(this, e);
	}), Yr("pointerup", se, te), Jr("pointercancel", se, function(...e) {
		(H(y) ? ne : void 0)?.apply(this, e);
	}), Yr("contextmenu", se, function(...e) {
		H(ue)?.apply(this, e);
	}), Jr("click", se, function(...e) {
		(H(y) ? ie : void 0)?.apply(this, e);
	}, !0), K(e, se), N(oe);
}
Xr([
	"click",
	"pointermove",
	"pointerup",
	"contextmenu"
]), Z(gh, {
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
//#endregion
//#region ../../node_modules/.pnpm/@xyflow+svelte@1.6.2_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@xyflow/svelte/dist/lib/container/Viewport/Viewport.svelte
var _h = /* @__PURE__ */ U("<div class=\"svelte-flow__viewport xyflow__viewport svelte-flow__container\"><!></div>");
function vh(e, t) {
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
	}, a = _h();
	let o;
	return q(R(a), r), A(a), V(() => o = ia(a, "", o, { transform: `translate(${n().viewport.x ?? ""}px, ${n().viewport.y ?? ""}px) scale(${n().viewport.zoom ?? ""})` })), K(e, a), N(i);
}
Z(vh, {
	store: {},
	children: {}
}, [], [], { mode: "open" });
//#endregion
//#region ../../node_modules/.pnpm/@xyflow+svelte@1.6.2_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@xyflow/svelte/dist/lib/actions/drag/index.js
function yh(e, t) {
	let { store: n, onDrag: r, onDragStart: i, onDragStop: a, onNodeMouseDown: o } = t, s = Ip({
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
//#endregion
//#region ../../node_modules/.pnpm/@xyflow+svelte@1.6.2_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@xyflow/svelte/dist/lib/components/A11yDescriptions/A11yDescriptions.svelte
var bh = /* @__PURE__ */ U("<div aria-live=\"assertive\" aria-atomic=\"true\" class=\"a11y-live-msg svelte-6apzsu\"> </div>"), xh = /* @__PURE__ */ U("<div class=\"a11y-hidden svelte-6apzsu\"> </div> <div class=\"a11y-hidden svelte-6apzsu\"> </div> <!>", 1), Sh = {
	hash: "svelte-6apzsu",
	code: ".a11y-hidden.svelte-6apzsu {display:none;}.a11y-live-msg.svelte-6apzsu {position:absolute;width:1px;height:1px;margin:-1px;border:0;padding:0;overflow:hidden;clip:rect(0px, 0px, 0px, 0px);clip-path:inset(100%);}"
};
function Ch(e, t) {
	M(t, !0), Gi(e, Sh);
	let n = X(t, "store", 7);
	var r = {
		get store() {
			return n();
		},
		set store(e) {
			n(e), F();
		}
	}, i = xh(), a = z(i), o = R(a, !0);
	A(a);
	var s = B(a, 2), c = R(s, !0);
	A(s);
	var l = B(s, 2), u = (e) => {
		var t = bh(), r = R(t, !0);
		A(t), V(() => {
			Y(t, "id", `${Eh}-${n().flowId}`), gi(r, n().ariaLiveMessage);
		}), K(e, t);
	};
	return J(l, (e) => {
		n().disableKeyboardA11y || e(u);
	}), V(() => {
		Y(a, "id", `${wh}-${n().flowId}`), gi(o, n().disableKeyboardA11y ? n().ariaLabelConfig["node.a11yDescription.default"] : n().ariaLabelConfig["node.a11yDescription.keyboardDisabled"]), Y(s, "id", `${Th}-${n().flowId}`), gi(c, n().ariaLabelConfig["edge.a11yDescription.default"]);
	}), K(e, i), N(r);
}
Z(Ch, { store: {} }, [], [], { mode: "open" });
//#endregion
//#region ../../node_modules/.pnpm/@xyflow+svelte@1.6.2_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@xyflow/svelte/dist/lib/components/A11yDescriptions/index.js
var wh = "svelte-flow__node-desc", Th = "svelte-flow__edge-desc", Eh = "svelte-flow__aria-live", Dh = /* @__PURE__ */ U("<div><!></div>");
function Oh(e, t) {
	M(t, !0);
	let n = X(t, "store", 15), r = X(t, "node", 7), i = X(t, "resizeObserver", 7), a = X(t, "nodeClickDistance", 7), o = X(t, "onnodeclick", 7), s = X(t, "onnodedrag", 7), c = X(t, "onnodedragstart", 7), l = X(t, "onnodedragstop", 7), u = X(t, "onnodepointerenter", 7), d = X(t, "onnodepointerleave", 7), f = X(t, "onnodepointermove", 7), p = X(t, "onnodecontextmenu", 7), m = /* @__PURE__ */ P(() => C(r().data, () => ({}), !0)), h = /* @__PURE__ */ P(() => C(r().selected, !1)), g = /* @__PURE__ */ P(() => r().draggable), _ = /* @__PURE__ */ P(() => r().selectable), v = /* @__PURE__ */ P(() => C(r().deletable, !0)), y = /* @__PURE__ */ P(() => r().connectable), b = /* @__PURE__ */ P(() => r().focusable), x = /* @__PURE__ */ P(() => C(r().hidden, !1)), S = /* @__PURE__ */ P(() => C(r().dragging, !1)), w = /* @__PURE__ */ P(() => C(r().style, "")), T = /* @__PURE__ */ P(() => r().class), E = /* @__PURE__ */ P(() => C(r().type, "default")), D = /* @__PURE__ */ P(() => r().parentId), ee = /* @__PURE__ */ P(() => r().sourcePosition), te = /* @__PURE__ */ P(() => r().targetPosition), ne = /* @__PURE__ */ P(() => C(r().measured, () => ({
		width: 0,
		height: 0
	}), !0).width), re = /* @__PURE__ */ P(() => C(r().measured, () => ({
		width: 0,
		height: 0
	}), !0).height), ie = /* @__PURE__ */ P(() => r().initialWidth), ae = /* @__PURE__ */ P(() => r().initialHeight), oe = /* @__PURE__ */ P(() => r().width), se = /* @__PURE__ */ P(() => r().height), ce = /* @__PURE__ */ P(() => r().dragHandle), le = /* @__PURE__ */ P(() => C(r().internals.z, 0)), ue = /* @__PURE__ */ P(() => r().internals.positionAbsolute.x), de = /* @__PURE__ */ P(() => r().internals.positionAbsolute.y), fe = /* @__PURE__ */ P(() => r().internals.userNode), { id: pe } = r(), me = /* @__PURE__ */ P(() => H(g) ?? n().nodesDraggable), he = /* @__PURE__ */ P(() => H(_) ?? n().elementsSelectable), ge = /* @__PURE__ */ P(() => H(y) ?? n().nodesConnectable), _e = /* @__PURE__ */ P(() => Af(r())), ve = /* @__PURE__ */ P(() => !!r().internals.handleBounds), ye = /* @__PURE__ */ P(() => H(_e) && H(ve)), be = /* @__PURE__ */ P(() => H(b) ?? n().nodesFocusable);
	function xe(e) {
		return n().parentLookup.has(e);
	}
	let Se = /* @__PURE__ */ P(() => xe(pe)), Ce = /* @__PURE__ */ I(null), we = null, Te = H(E), Ee = H(ee), De = H(te), Oe = /* @__PURE__ */ P(() => n().nodeTypes[H(E)] ?? Sm), ke = /* @__PURE__ */ P(() => n().ariaLabelConfig);
	pm(pe), hm({ get value() {
		return H(ge);
	} });
	let Ae = /* @__PURE__ */ P(() => {
		let e = H(ne) === void 0 ? H(oe) ?? H(ie) : H(oe), t = H(re) === void 0 ? H(se) ?? H(ae) : H(se);
		if (!(e === void 0 && t === void 0 && H(w) === void 0)) return `${H(w)};${e ? `width:${Nm(e)};` : ""}${t ? `height:${Nm(t)};` : ""}`;
	});
	Un(() => {
		(H(E) !== Te || H(ee) !== Ee || H(te) !== De) && H(Ce) !== null && requestAnimationFrame(() => {
			H(Ce) !== null && n().updateNodeInternals(/* @__PURE__ */ new Map([[pe, {
				id: pe,
				nodeElement: H(Ce),
				force: !0
			}]]));
		}), Te = H(E), Ee = H(ee), De = H(te);
	}), Un(() => {
		i() && (!H(ye) || H(Ce) !== we) && (we && i().unobserve(we), H(Ce) && i().observe(H(Ce)), we = H(Ce));
	}), Ti(() => {
		we && i()?.unobserve(we);
	});
	function je(e) {
		H(he) && (!n().selectNodesOnDrag || !H(me) || n().nodeDragThreshold > 0) && n().handleNodeSelection(pe), o()?.({
			node: H(fe),
			event: e
		});
	}
	function Me(e) {
		if (!(Lf(e) || n().disableKeyboardA11y)) if (Nd.includes(e.key) && H(he)) {
			let t = e.key === "Escape";
			n().handleNodeSelection(pe, t, H(Ce));
		} else H(me) && r().selected && Object.prototype.hasOwnProperty.call(Pm, e.key) && (e.preventDefault(), n(n().ariaLiveMessage = H(ke)["node.a11yDescription.ariaLiveMessage"]({
			direction: e.key.replace("Arrow", "").toLowerCase(),
			x: ~~r().internals.positionAbsolute.x,
			y: ~~r().internals.positionAbsolute.y
		}), !0), n().moveSelectedNodes(Pm[e.key], e.shiftKey ? 4 : 1));
	}
	let Ne = () => {
		if (n().disableKeyboardA11y || !n().autoPanOnNodeFocus || !H(Ce)?.matches(":focus-visible")) return;
		let { width: e, height: t, viewport: i } = n();
		Zd(/* @__PURE__ */ new Map([[pe, r()]]), {
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
	var Pe = {
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
	}, Fe = G(), Ie = z(Fe), Le = (e) => {
		var t = Dh();
		Sa(t, () => ({
			"data-id": pe,
			class: [
				"svelte-flow__node",
				`svelte-flow__node-${H(E)}`,
				H(T)
			],
			style: H(Ae),
			onclick: je,
			onpointerenter: u() ? (e) => u()({
				node: H(fe),
				event: e
			}) : void 0,
			onpointerleave: d() ? (e) => d()({
				node: H(fe),
				event: e
			}) : void 0,
			onpointermove: f() ? (e) => f()({
				node: H(fe),
				event: e
			}) : void 0,
			oncontextmenu: p() ? (e) => p()({
				node: H(fe),
				event: e
			}) : void 0,
			onkeydown: H(be) ? Me : void 0,
			onfocus: H(be) ? Ne : void 0,
			tabIndex: H(be) ? 0 : void 0,
			role: r().ariaRole ?? (H(be) ? "group" : void 0),
			"aria-label": r().ariaLabel,
			"aria-roledescription": "node",
			"aria-describedby": n().disableKeyboardA11y ? void 0 : `${wh}-${n().flowId}`,
			...r().domAttributes,
			[ca]: {
				dragging: H(S),
				selected: H(h),
				draggable: H(me),
				connectable: H(ge),
				selectable: H(he),
				nopan: H(me),
				parent: H(Se)
			},
			[la]: {
				"z-index": H(le),
				transform: `translate(${H(ue) ?? ""}px, ${H(de) ?? ""}px)`,
				visibility: H(_e) ? "visible" : "hidden"
			}
		})), Hi(R(t), () => H(Oe), (e, t) => {
			t(e, {
				get data() {
					return H(m);
				},
				get id() {
					return pe;
				},
				get selected() {
					return H(h);
				},
				get selectable() {
					return H(he);
				},
				get deletable() {
					return H(v);
				},
				get sourcePosition() {
					return H(ee);
				},
				get targetPosition() {
					return H(te);
				},
				get zIndex() {
					return H(le);
				},
				get dragging() {
					return H(S);
				},
				get draggable() {
					return H(me);
				},
				get dragHandle() {
					return H(ce);
				},
				get parentId() {
					return H(D);
				},
				get type() {
					return H(E);
				},
				get isConnectable() {
					return H(ge);
				},
				get positionAbsoluteX() {
					return H(ue);
				},
				get positionAbsoluteY() {
					return H(de);
				},
				get width() {
					return H(oe);
				},
				get height() {
					return H(se);
				}
			});
		}), A(t), Ki(t, (e, t) => yh?.(e, t), () => ({
			nodeId: pe,
			isSelectable: H(he),
			disabled: !H(me),
			handleSelector: H(ce),
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
		})), Na(t, (e) => L(Ce, e), () => H(Ce)), K(e, t);
	};
	return J(Ie, (e) => {
		H(x) || e(Le);
	}), K(e, Fe), N(Pe);
}
Z(Oh, {
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
//#endregion
//#region ../../node_modules/.pnpm/@xyflow+svelte@1.6.2_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@xyflow/svelte/dist/lib/container/NodeRenderer/NodeRenderer.svelte
var kh = /* @__PURE__ */ U("<div class=\"svelte-flow__nodes\"></div>");
function Ah(e, t) {
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
	Ti(() => {
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
	}, m = kh();
	return Fi(m, 21, () => n().visible.nodes.values(), (e) => e.id, (e, t) => {
		Oh(e, {
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
Z(Ah, {
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
//#endregion
//#region ../../node_modules/.pnpm/@xyflow+svelte@1.6.2_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@xyflow/svelte/dist/lib/components/EdgeWrapper/EdgeWrapper.svelte
var jh = /* @__PURE__ */ W("<svg class=\"svelte-flow__edge-wrapper\"><g><!></g></svg>");
function Mh(e, t) {
	M(t, !0);
	let n = X(t, "edge", 7), r = X(t, "store", 15), i = X(t, "onedgeclick", 7), a = X(t, "onedgecontextmenu", 7), o = X(t, "onedgepointerenter", 7), s = X(t, "onedgepointerleave", 7), c = /* @__PURE__ */ P(() => n().id), l = /* @__PURE__ */ P(() => n().source), u = /* @__PURE__ */ P(() => n().target), d = /* @__PURE__ */ P(() => n().sourceX), f = /* @__PURE__ */ P(() => n().sourceY), p = /* @__PURE__ */ P(() => n().targetX), m = /* @__PURE__ */ P(() => n().targetY), h = /* @__PURE__ */ P(() => n().sourcePosition), g = /* @__PURE__ */ P(() => n().targetPosition), _ = /* @__PURE__ */ P(() => C(n().animated, !1)), v = /* @__PURE__ */ P(() => C(n().selected, !1)), y = /* @__PURE__ */ P(() => n().label), b = /* @__PURE__ */ P(() => n().labelStyle), x = /* @__PURE__ */ P(() => C(n().data, () => ({}), !0)), S = /* @__PURE__ */ P(() => n().style), w = /* @__PURE__ */ P(() => n().interactionWidth), T = /* @__PURE__ */ P(() => C(n().type, "default")), E = /* @__PURE__ */ P(() => n().sourceHandle), D = /* @__PURE__ */ P(() => n().targetHandle), ee = /* @__PURE__ */ P(() => n().markerStart), te = /* @__PURE__ */ P(() => n().markerEnd), ne = /* @__PURE__ */ P(() => n().selectable), re = /* @__PURE__ */ P(() => n().focusable), ie = /* @__PURE__ */ P(() => C(n().deletable, !0)), ae = /* @__PURE__ */ P(() => n().hidden), oe = /* @__PURE__ */ P(() => n().zIndex), se = /* @__PURE__ */ P(() => n().class), ce = /* @__PURE__ */ P(() => n().ariaLabel);
	_m(H(c));
	let le = null, ue = /* @__PURE__ */ P(() => H(ne) ?? r().elementsSelectable), de = /* @__PURE__ */ P(() => H(re) ?? r().edgesFocusable), fe = /* @__PURE__ */ P(() => r().edgeTypes[H(T)] ?? Um), pe = /* @__PURE__ */ P(() => H(ee) ? `url('#${lp(H(ee), r().flowId)}')` : void 0), me = /* @__PURE__ */ P(() => H(te) ? `url('#${lp(H(te), r().flowId)}')` : void 0);
	function he(e) {
		let t = r().edgeLookup.get(H(c));
		t && (H(ue) && r().handleEdgeSelection(H(c)), i()?.({
			event: e,
			edge: t
		}));
	}
	function ge(e, t) {
		let n = r().edgeLookup.get(H(c));
		n && t({
			event: e,
			edge: n
		});
	}
	function _e(e) {
		if (!r().disableKeyboardA11y && Nd.includes(e.key) && H(ue)) {
			let { unselectNodesAndEdges: t, addSelectedEdges: i } = r();
			e.key === "Escape" ? (le?.blur(), t({ edges: [n()] })) : i([H(c)]);
		}
	}
	var ve = {
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
	}, ye = G(), be = z(ye), xe = (e) => {
		var t = jh();
		let i;
		var C = R(t);
		Sa(C, () => ({
			class: ["svelte-flow__edge", H(se)],
			"data-id": H(c),
			onclick: he,
			oncontextmenu: a() ? (e) => {
				ge(e, a());
			} : void 0,
			onpointerenter: o() ? (e) => {
				ge(e, o());
			} : void 0,
			onpointerleave: s() ? (e) => {
				ge(e, s());
			} : void 0,
			"aria-label": H(ce) === null ? void 0 : H(ce) ? H(ce) : `Edge from ${H(l)} to ${H(u)}`,
			"aria-describedby": H(de) ? `${Th}-${r().flowId}` : void 0,
			role: n().ariaRole ?? (H(de) ? "group" : "img"),
			"aria-roledescription": "edge",
			onkeydown: H(de) ? _e : void 0,
			tabindex: H(de) ? 0 : void 0,
			...n().domAttributes,
			[ca]: {
				animated: H(_),
				selected: H(v),
				selectable: H(ue)
			}
		})), Hi(R(C), () => H(fe), (e, t) => {
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
					return H(w);
				},
				get selectable() {
					return H(ue);
				},
				get deletable() {
					return H(ie);
				},
				get type() {
					return H(T);
				},
				get sourceHandleId() {
					return H(E);
				},
				get targetHandleId() {
					return H(D);
				},
				get markerStart() {
					return H(pe);
				},
				get markerEnd() {
					return H(me);
				}
			});
		}), A(C), Na(C, (e) => le = e, () => le), A(t), V(() => i = ia(t, "", i, { "z-index": H(oe) })), K(e, t);
	};
	return J(be, (e) => {
		H(ae) || e(xe);
	}), K(e, ye), N(ve);
}
//#endregion
//#region ../../node_modules/.pnpm/svelte@5.56.8_@typescript-eslint+types@8.65.0/node_modules/svelte/src/internal/flags/legacy.js
Z(Mh, {
	edge: {},
	store: {},
	onedgeclick: {},
	onedgecontextmenu: {},
	onedgepointerenter: {},
	onedgepointerleave: {}
}, [], [], { mode: "open" }), Ze();
//#endregion
//#region ../../node_modules/.pnpm/@xyflow+svelte@1.6.2_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@xyflow/svelte/dist/lib/container/EdgeRenderer/MarkerDefinition/MarkerDefinition.svelte
var Nh = /* @__PURE__ */ W("<defs></defs>");
function Ph(e, t) {
	M(t, !1);
	let n = oh();
	Pa();
	var r = Nh();
	Fi(r, 5, () => n.markers, (e) => e.id, (e, t) => {
		Rh(e, Va(() => H(t)));
	}), A(r), K(e, r), N();
}
Z(Ph, {}, [], [], { mode: "open" });
//#endregion
//#region ../../node_modules/.pnpm/@xyflow+svelte@1.6.2_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@xyflow/svelte/dist/lib/container/EdgeRenderer/MarkerDefinition/Marker.svelte
var Fh = /* @__PURE__ */ W("<polyline class=\"arrow\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" points=\"-5,-4 0,0 -5,4\"></polyline>"), Ih = /* @__PURE__ */ W("<polyline class=\"arrowclosed\" stroke-linecap=\"round\" stroke-linejoin=\"round\" points=\"-5,-4 0,0 -5,4 -5,-4\"></polyline>"), Lh = /* @__PURE__ */ W("<marker class=\"svelte-flow__arrowhead\" viewBox=\"-10 -10 20 20\" refX=\"0\" refY=\"0\"><!></marker>");
function Rh(e, t) {
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
	}, d = Lh(), f = R(d), p = (e) => {
		var t = Fh();
		let n;
		V(() => {
			Y(t, "stroke-width", l()), n = ia(t, "", n, { stroke: c() });
		}), K(e, t);
	}, m = (e) => {
		var t = Ih();
		let n;
		V(() => {
			Y(t, "stroke-width", l()), n = ia(t, "", n, {
				stroke: c(),
				fill: c()
			});
		}), K(e, t);
	};
	return J(f, (e) => {
		r() === Bd.Arrow ? e(p) : r() === Bd.ArrowClosed && e(m, 1);
	}), A(d), V(() => {
		Y(d, "id", n()), Y(d, "markerWidth", `${i()}`), Y(d, "markerHeight", `${a()}`), Y(d, "markerUnits", o()), Y(d, "orient", s());
	}), K(e, d), N(u);
}
Z(Rh, {
	id: {},
	type: {},
	width: {},
	height: {},
	markerUnits: {},
	orient: {},
	color: {},
	strokeWidth: {}
}, [], [], { mode: "open" });
//#endregion
//#region ../../node_modules/.pnpm/@xyflow+svelte@1.6.2_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@xyflow/svelte/dist/lib/container/EdgeRenderer/EdgeRenderer.svelte
var zh = /* @__PURE__ */ U("<div class=\"svelte-flow__edges\"><svg class=\"svelte-flow__marker\"><!></svg> <!></div>");
function Bh(e, t) {
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
	}, c = zh(), l = R(c);
	return Ph(R(l), {}), A(l), Fi(B(l, 2), 17, () => n().visible.edges.values(), (e) => e.id, (e, t) => {
		Mh(e, {
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
Z(Bh, {
	store: {},
	onedgeclick: {},
	onedgecontextmenu: {},
	onedgepointerenter: {},
	onedgepointerleave: {}
}, [], [], { mode: "open" });
//#endregion
//#region ../../node_modules/.pnpm/@xyflow+svelte@1.6.2_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@xyflow/svelte/dist/lib/components/Selection/Selection.svelte
var Vh = /* @__PURE__ */ U("<div class=\"svelte-flow__selection svelte-e4qeiq\"></div>"), Hh = {
	hash: "svelte-e4qeiq",
	code: ".svelte-flow__selection.svelte-e4qeiq {position:absolute;top:0;left:0;}"
};
function Uh(e, t) {
	M(t, !0), Gi(e, Hh);
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
		var t = Vh();
		let o;
		V((e) => o = ia(t, "", o, e), [() => ({
			width: typeof i() == "string" ? i() : Nm(i()),
			height: typeof a() == "string" ? a() : Nm(a()),
			transform: `translate(${n()}px, ${r()}px)`
		})]), K(e, t);
	};
	return J(l, (e) => {
		o() && e(u);
	}), K(e, c), N(s);
}
Z(Uh, {
	x: {},
	y: {},
	width: {},
	height: {},
	isVisible: {}
}, [], [], { mode: "open" });
//#endregion
//#region ../../node_modules/.pnpm/@xyflow+svelte@1.6.2_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@xyflow/svelte/dist/lib/components/NodeSelection/NodeSelection.svelte
var Wh = /* @__PURE__ */ U("<div><!></div>"), Gh = {
	hash: "svelte-16gdwmm",
	code: ".svelte-flow__selection-wrapper.svelte-16gdwmm {position:absolute;top:0;left:0;z-index:2000;pointer-events:all;}.svelte-flow__selection-wrapper.svelte-16gdwmm:focus,\n  .svelte-flow__selection-wrapper.svelte-16gdwmm:focus-visible {outline:none;}"
};
function Kh(e, t) {
	M(t, !0), Gi(e, Gh);
	let n = X(t, "store", 15), r = X(t, "onnodedrag", 7), i = X(t, "onnodedragstart", 7), a = X(t, "onnodedragstop", 7), o = X(t, "onselectionclick", 7), s = X(t, "onselectioncontextmenu", 7), c = /* @__PURE__ */ I(void 0);
	Un(() => {
		n().disableKeyboardA11y || H(c)?.focus({ preventScroll: !0 });
	});
	let l = /* @__PURE__ */ P(() => {
		if (n().selectionRectMode === "nodes") {
			n().nodes;
			let e = Xd(n().nodeLookup, { filter: (e) => !!e.selected });
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
		Object.prototype.hasOwnProperty.call(Pm, e.key) && (e.preventDefault(), n().moveSelectedNodes(Pm[e.key], e.shiftKey ? 4 : 1));
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
		var t = Wh();
		let o;
		Uh(R(t), {
			width: "100%",
			height: "100%",
			x: 0,
			y: 0
		}), A(t), Ki(t, (e, t) => yh?.(e, t), () => ({
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
		})), Na(t, (e) => L(c, e), () => H(c)), V((e) => {
			na(t, 1, Xi(["svelte-flow__selection-wrapper", n().noPanClass]), "svelte-16gdwmm"), Y(t, "role", n().disableKeyboardA11y ? void 0 : "button"), Y(t, "tabindex", n().disableKeyboardA11y ? void 0 : -1), o = ia(t, "", o, e);
		}, [() => ({
			width: Nm(H(l).width),
			height: Nm(H(l).height),
			transform: `translate(${H(l).x ?? ""}px, ${H(l).y ?? ""}px)`
		})]), Yr("contextmenu", t, u), Yr("click", t, d), Yr("keydown", t, function(...e) {
			(n().disableKeyboardA11y ? void 0 : f)?.apply(this, e);
		}), K(e, t);
	}, _ = /* @__PURE__ */ P(() => n().selectionRectMode === "nodes" && H(l) && vf(H(l).x) && vf(H(l).y));
	return J(h, (e) => {
		H(_) && e(g);
	}), K(e, m), N(p);
}
Xr([
	"contextmenu",
	"click",
	"keydown"
]), Z(Kh, {
	store: {},
	onnodedrag: {},
	onnodedragstart: {},
	onnodedragstop: {},
	onselectionclick: {},
	onselectioncontextmenu: {}
}, [], [], { mode: "open" });
//#endregion
//#region ../../node_modules/.pnpm/@svelte-put+shortcut@4.2.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@svelte-put/shortcut/src/shortcut.js
function qh(e) {
	switch (e) {
		case "none": return 0;
		case "ctrl": return 8;
		case "shift": return 4;
		case "alt": return 2;
		case "meta": return 1;
	}
}
function Jh(e, t) {
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
					for (let n of e) if ((Array.isArray(n) ? n : [n]).reduce((e, t) => e | qh(t), 0) === i) {
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
	return n && (o = qr(e, i, a)), {
		update: (t) => {
			let { enabled: s = !0, type: c = "keydown" } = t;
			n && (!s || i !== c) ? o?.() : !n && s && (o = qr(e, c, a)), n = s, i = c, r = t.trigger;
		},
		destroy: () => {
			o?.();
		}
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@xyflow+svelte@1.6.2_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@xyflow/svelte/dist/lib/hooks/useSvelteFlow.svelte.js
function Yh() {
	let e = /* @__PURE__ */ P(oh), t = (t) => {
		let n = jm(t) ? t : H(e).nodeLookup.get(t.id), r = n.parentId ? jf(n.position, n.measured, n.parentId, H(e).nodeLookup, H(e).nodeOrigin) : n.position;
		return ff({
			...n,
			position: r,
			width: n.measured?.width ?? n.width,
			height: n.measured?.height ?? n.height
		});
	};
	function n(t, n, r = { replace: !1 }) {
		H(e).nodes = Br(() => H(e).nodes).map((e) => {
			if (e.id === t) {
				let t = typeof n == "function" ? n(e) : n;
				return r?.replace && jm(t) ? t : {
					...e,
					...t
				};
			}
			return e;
		});
	}
	function r(t, n, r = { replace: !1 }) {
		H(e).edges = Br(() => H(e).edges).map((e) => {
			if (e.id === t) {
				let t = typeof n == "function" ? n(e) : n;
				return r.replace && Mm(t) ? t : {
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
		getNodes: (t) => t === void 0 ? H(e).nodes : Xh(H(e).nodeLookup, t),
		getEdge: (t) => H(e).edgeLookup.get(t),
		getEdges: (t) => t === void 0 ? H(e).edges : Xh(H(e).edgeLookup, t),
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
		getViewport: () => $e(H(e).viewport),
		setCenter: async (t, n, r) => H(e).setCenter(t, n, r),
		fitView: (t) => H(e).fitView(t),
		fitBounds: async (t, n) => {
			if (!H(e).panZoom) return !1;
			let r = Ef(t, H(e).width, H(e).height, H(e).minZoom, H(e).maxZoom, n?.padding ?? .1);
			return await H(e).panZoom.setViewport(r, {
				duration: n?.duration,
				ease: n?.ease,
				interpolate: n?.interpolate
			}), !0;
		},
		getIntersectingNodes: (n, r = !0, i) => {
			let a = _f(n), o = a ? n : t(n);
			return o ? (i || H(e).nodes).filter((t) => {
				let i = H(e).nodeLookup.get(t.id);
				if (!i || !a && t.id === n.id) return !1;
				let s = ff(i), c = gf(s, o);
				return r && c > 0 || c >= s.width * s.height || c >= o.width * o.height;
			}) : [];
		},
		isNodeIntersecting: (e, n, r = !0) => {
			let i = _f(e) ? e : t(e);
			if (!i) return !1;
			let a = gf(i, n);
			return r && a > 0 || a >= n.width * n.height || a >= i.width * i.height;
		},
		deleteElements: async ({ nodes: t = [], edges: n = [] }) => {
			let { nodes: r, edges: i } = await nf({
				nodesToRemove: t,
				edgesToRemove: n,
				nodes: H(e).nodes,
				edges: H(e).edges,
				onBeforeDelete: H(e).onbeforedelete
			});
			return r && (H(e).nodes = Br(() => H(e).nodes).filter((e) => !r.some(({ id: t }) => t === e.id))), i && (H(e).edges = Br(() => H(e).edges).filter((e) => !i.some(({ id: t }) => t === e.id))), (r.length > 0 || i.length > 0) && H(e).ondelete?.({
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
			return xf({
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
			let { x: n, y: r, zoom: i } = H(e).viewport, { x: a, y: o } = H(e).domNode.getBoundingClientRect(), s = Sf(t, [
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
		getNodesBounds: (t) => Yd(t, {
			nodeLookup: H(e).nodeLookup,
			nodeOrigin: H(e).nodeOrigin
		}),
		getHandleConnections: ({ type: t, id: n, nodeId: r }) => Array.from(H(e).connectionLookup.get(`${r}-${t}-${n ?? null}`)?.values() ?? [])
	};
}
function Xh(e, t) {
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
//#endregion
//#region ../../node_modules/.pnpm/@xyflow+svelte@1.6.2_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@xyflow/svelte/dist/lib/components/KeyHandler/KeyHandler.svelte
function Zh(e, t) {
	M(t, !0);
	let n = X(t, "store", 15), r = X(t, "selectionKey", 7, "Shift"), i = X(t, "multiSelectionKey", 23, () => Df() ? "Meta" : "Control"), a = X(t, "deleteKey", 7, "Backspace"), o = X(t, "panActivationKey", 7, " "), s = X(t, "zoomActivationKey", 23, () => Df() ? "Meta" : "Control"), { deleteElements: c } = Yh();
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
	return Jr("blur", En, p), Jr("contextmenu", En, p), Ki(En, (e, t) => Jh?.(e, t), () => ({
		trigger: f(r(), () => n(n().selectionKeyPressed = !0, !0)),
		type: "keydown"
	})), Ki(En, (e, t) => Jh?.(e, t), () => ({
		trigger: f(r(), () => n(n().selectionKeyPressed = !1, !0)),
		type: "keyup"
	})), Ki(En, (e, t) => Jh?.(e, t), () => ({
		trigger: f(i(), () => {
			n(n().multiselectionKeyPressed = !0, !0);
		}),
		type: "keydown"
	})), Ki(En, (e, t) => Jh?.(e, t), () => ({
		trigger: f(i(), () => n(n().multiselectionKeyPressed = !1, !0)),
		type: "keyup"
	})), Ki(En, (e, t) => Jh?.(e, t), () => ({
		trigger: f(a(), (e) => {
			!(e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey) && !Lf(e.originalEvent) && (n(n().deleteKeyPressed = !0, !0), m());
		}),
		type: "keydown"
	})), Ki(En, (e, t) => Jh?.(e, t), () => ({
		trigger: f(a(), () => n(n().deleteKeyPressed = !1, !0)),
		type: "keyup"
	})), Ki(En, (e, t) => Jh?.(e, t), () => ({
		trigger: f(o(), () => n(n().panActivationKeyPressed = !0, !0)),
		type: "keydown"
	})), Ki(En, (e, t) => Jh?.(e, t), () => ({
		trigger: f(o(), () => n(n().panActivationKeyPressed = !1, !0)),
		type: "keyup"
	})), Ki(En, (e, t) => Jh?.(e, t), () => ({
		trigger: f(s(), () => n(n().zoomActivationKeyPressed = !0, !0)),
		type: "keydown"
	})), Ki(En, (e, t) => Jh?.(e, t), () => ({
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
		set multiSelectionKey(e = Df() ? "Meta" : "Control") {
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
		set zoomActivationKey(e = Df() ? "Meta" : "Control") {
			s(e), F();
		}
	});
}
Z(Zh, {
	store: {},
	selectionKey: {},
	multiSelectionKey: {},
	deleteKey: {},
	panActivationKey: {},
	zoomActivationKey: {}
}, [], [], { mode: "open" });
//#endregion
//#region ../../node_modules/.pnpm/@xyflow+svelte@1.6.2_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@xyflow/svelte/dist/lib/components/ConnectionLine/ConnectionLine.svelte
var Qh = /* @__PURE__ */ W("<path fill=\"none\" class=\"svelte-flow__connection-path\"></path>"), $h = /* @__PURE__ */ W("<svg class=\"svelte-flow__connectionline\"><g><!></g></svg>");
function eg(e, t) {
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
			case zd.Bezier: {
				let [t] = Wf(e);
				return t;
			}
			case zd.Straight: {
				let [t] = Zf(e);
				return t;
			}
			case zd.Step:
			case zd.SmoothStep: {
				let [t] = rp({
					...e,
					borderRadius: r() === zd.Step ? 0 : void 0
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
		var t = $h(), r = R(t), c = R(r), l = (e) => {
			var t = G();
			Hi(z(t), o, (e, t) => {
				t(e, {});
			}), K(e, t);
		}, u = (e) => {
			var t = Qh();
			V(() => {
				Y(t, "d", H(s)), ia(t, a());
			}), K(e, t);
		};
		J(c, (e) => {
			o() ? e(l) : e(u, -1);
		}), A(r), A(t), V((e) => {
			Y(t, "width", n().width), Y(t, "height", n().height), ia(t, i()), na(r, 0, e);
		}, [() => Xi(["svelte-flow__connection", Wd(n().connection.isValid)])]), K(e, t);
	};
	return J(u, (e) => {
		n().connection.inProgress && e(d);
	}), K(e, l), N(c);
}
Z(eg, {
	store: {},
	type: {},
	containerStyle: {},
	style: {},
	LineComponent: {}
}, [], [], { mode: "open" });
//#endregion
//#region ../../node_modules/.pnpm/@xyflow+svelte@1.6.2_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@xyflow/svelte/dist/lib/container/Panel/Panel.svelte
var tg = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host",
	"position",
	"style",
	"class",
	"children"
]), ng = /* @__PURE__ */ U("<div><!></div>");
function rg(e, t) {
	M(t, !0);
	let n = X(t, "position", 7, "top-right"), r = X(t, "style", 7), i = X(t, "class", 7), a = X(t, "children", 7), o = /* @__PURE__ */ La(t, tg), s = /* @__PURE__ */ P(() => `${n()}`.split("-"));
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
	}, l = ng();
	return Sa(l, (e) => ({
		class: e,
		style: r(),
		...o
	}), [() => [
		"svelte-flow__panel",
		i(),
		...H(s)
	]]), q(R(l), () => a() ?? y), A(l), K(e, l), N(c);
}
Z(rg, {
	position: {},
	style: {},
	class: {},
	children: {}
}, [], [], { mode: "open" });
//#endregion
//#region ../../node_modules/.pnpm/@xyflow+svelte@1.6.2_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@xyflow/svelte/dist/lib/components/Attribution/Attribution.svelte
var ig = /* @__PURE__ */ U("<a target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"Svelte Flow attribution\">Svelte Flow</a>");
function ag(e, t) {
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
			rg(e, {
				get position() {
					return r();
				},
				class: "svelte-flow__attribution",
				get "data-message"() {
					return H(t);
				},
				children: (e, t) => {
					var n = ig();
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
Z(ag, {
	proOptions: {},
	position: {}
}, [], [], { mode: "open" });
//#endregion
//#region ../../node_modules/.pnpm/@xyflow+svelte@1.6.2_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@xyflow/svelte/dist/lib/container/SvelteFlow/Wrapper.svelte
var og = /* @__PURE__ */ U("<div><!></div>"), sg = {
	hash: "svelte-k99kzl",
	code: ".svelte-flow.svelte-k99kzl {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;}"
};
function cg(e, t) {
	M(t, !0), Gi(e, sg);
	let n = X(t, "width", 7), r = X(t, "height", 7), i = X(t, "colorMode", 7), a = X(t, "domNode", 15), o = X(t, "clientWidth", 15), s = X(t, "clientHeight", 15), c = X(t, "children", 7), l = X(t, "rest", 7), u = /* @__PURE__ */ P(() => l().class), d = /* @__PURE__ */ P(() => T(l(), /* @__PURE__ */ "id.class.nodeTypes.edgeTypes.colorMode.isValidConnection.onmove.onmovestart.onmoveend.onflowerror.ondelete.onbeforedelete.onbeforeconnect.onconnect.onconnectstart.onconnectend.onbeforereconnect.onreconnect.onreconnectstart.onreconnectend.onclickconnectstart.onclickconnectend.oninit.onselectionchange.onselectiondragstart.onselectiondrag.onselectiondragstop.onselectionstart.onselectionend.clickConnect.fitView.fitViewOptions.nodeOrigin.nodeDragThreshold.connectionDragThreshold.minZoom.maxZoom.initialViewport.connectionRadius.connectionMode.selectionMode.selectNodesOnDrag.snapGrid.defaultMarkerColor.translateExtent.nodeExtent.onlyRenderVisibleElements.autoPanOnConnect.autoPanOnNodeDrag.colorModeSSR.defaultEdgeOptions.elevateNodesOnSelect.elevateEdgesOnSelect.nodesDraggable.autoPanOnNodeFocus.nodesConnectable.elementsSelectable.nodesFocusable.edgesFocusable.disableKeyboardA11y.noDragClass.noPanClass.noWheelClass.ariaLabelConfig.autoPanSpeed.panOnScrollSpeed.zIndexMode.autoPanOnSelection".split(".")));
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
	}, m = og();
	return Sa(m, (e) => ({
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
		[la]: e
	}), [() => ({
		width: Nm(n()),
		height: Nm(r())
	})], void 0, void 0, "svelte-k99kzl"), q(R(m), () => c() ?? y), A(m), Na(m, (e) => a(e), () => a()), ja(m, "clientHeight", s), ja(m, "clientWidth", o), K(e, m), N(p);
}
Z(cg, {
	width: {},
	height: {},
	colorMode: {},
	domNode: {},
	clientWidth: {},
	clientHeight: {},
	children: {},
	rest: {}
}, [], [], { mode: "open" });
//#endregion
//#region ../../node_modules/.pnpm/@xyflow+svelte@1.6.2_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@xyflow/svelte/dist/lib/container/SvelteFlow/SvelteFlow.svelte
var lg = /* @__PURE__ */ new Set(/* @__PURE__ */ "$$slots.$$events.$$legacy.$$host.width.height.proOptions.selectionKey.deleteKey.panActivationKey.multiSelectionKey.zoomActivationKey.paneClickDistance.nodeClickDistance.onmovestart.onmoveend.onmove.oninit.onnodeclick.onnodecontextmenu.onnodedrag.onnodedragstart.onnodedragstop.onnodepointerenter.onnodepointermove.onnodepointerleave.onselectionclick.onselectioncontextmenu.onselectionstart.onselectionend.onedgeclick.onedgecontextmenu.onedgepointerenter.onedgepointerleave.onpaneclick.onpanecontextmenu.panOnScrollMode.preventScrolling.zoomOnScroll.zoomOnDoubleClick.zoomOnPinch.panOnScroll.panOnScrollSpeed.panOnDrag.selectionOnDrag.autoPanOnSelection.connectionLineComponent.connectionLineStyle.connectionLineContainerStyle.connectionLineType.attributionPosition.children.nodes.edges.viewport".split(".")), ug = /* @__PURE__ */ U("<div class=\"svelte-flow__viewport-back svelte-flow__container\"></div> <!> <div class=\"svelte-flow__edge-labels svelte-flow__container\"></div> <!> <!> <!> <div class=\"svelte-flow__viewport-front svelte-flow__container\"></div>", 1), dg = /* @__PURE__ */ U("<!> <!>", 1), fg = /* @__PURE__ */ U("<!> <!> <!> <!> <!>", 1);
function pg(e, t) {
	M(t, !0);
	let n = X(t, "width", 7), r = X(t, "height", 7), i = X(t, "proOptions", 7), a = X(t, "selectionKey", 7), o = X(t, "deleteKey", 7), s = X(t, "panActivationKey", 7), c = X(t, "multiSelectionKey", 7), l = X(t, "zoomActivationKey", 7), u = X(t, "paneClickDistance", 7, 1), d = X(t, "nodeClickDistance", 7, 1), f = X(t, "onmovestart", 7), p = X(t, "onmoveend", 7), m = X(t, "onmove", 7), h = X(t, "oninit", 7), g = X(t, "onnodeclick", 7), _ = X(t, "onnodecontextmenu", 7), v = X(t, "onnodedrag", 7), b = X(t, "onnodedragstart", 7), x = X(t, "onnodedragstop", 7), S = X(t, "onnodepointerenter", 7), C = X(t, "onnodepointermove", 7), w = X(t, "onnodepointerleave", 7), T = X(t, "onselectionclick", 7), E = X(t, "onselectioncontextmenu", 7), D = X(t, "onselectionstart", 7), ee = X(t, "onselectionend", 7), te = X(t, "onedgeclick", 7), ne = X(t, "onedgecontextmenu", 7), re = X(t, "onedgepointerenter", 7), ie = X(t, "onedgepointerleave", 7), ae = X(t, "onpaneclick", 7), oe = X(t, "onpanecontextmenu", 7), se = X(t, "panOnScrollMode", 23, () => Id.Free), ce = X(t, "preventScrolling", 7, !0), le = X(t, "zoomOnScroll", 7, !0), ue = X(t, "zoomOnDoubleClick", 7, !0), de = X(t, "zoomOnPinch", 7, !0), fe = X(t, "panOnScroll", 7, !1), pe = X(t, "panOnScrollSpeed", 7, .5), me = X(t, "panOnDrag", 7, !0), he = X(t, "selectionOnDrag", 7, !1), ge = X(t, "autoPanOnSelection", 7, !0), _e = X(t, "connectionLineComponent", 7), ve = X(t, "connectionLineStyle", 7), ye = X(t, "connectionLineContainerStyle", 7), be = X(t, "connectionLineType", 23, () => zd.Bezier), xe = X(t, "attributionPosition", 7), Se = X(t, "children", 7), Ce = X(t, "nodes", 31, () => Cn([])), we = X(t, "edges", 31, () => Cn([])), Te = X(t, "viewport", 15, void 0), Ee = /* @__PURE__ */ La(t, lg), De = ch({
		props: Ee,
		width: n(),
		height: r(),
		get nodes() {
			return Ce();
		},
		set nodes(e) {
			Ce(e);
		},
		get edges() {
			return we();
		},
		set edges(e) {
			we(e);
		},
		get viewport() {
			return Te();
		},
		set viewport(e) {
			Te(e);
		}
	}), Oe = rt(sh);
	return Oe && Oe.setStore && Oe.setStore(De), it(sh, {
		provider: !1,
		getStore() {
			return De;
		}
	}), Un(() => {
		let e = {
			nodes: De.selectedNodes,
			edges: De.selectedEdges
		};
		Br(() => t.onselectionchange)?.(e);
		for (let t of De.selectionChangeHandlers.values()) t(e);
	}), Ti(() => {
		De.reset();
	}), cg(e, {
		get colorMode() {
			return De.colorMode;
		},
		get width() {
			return n();
		},
		get height() {
			return r();
		},
		get rest() {
			return Ee;
		},
		get domNode() {
			return De.domNode;
		},
		set domNode(e) {
			De.domNode = e;
		},
		get clientWidth() {
			return De.width;
		},
		set clientWidth(e) {
			De.width = e;
		},
		get clientHeight() {
			return De.height;
		},
		set clientHeight(e) {
			De.height = e;
		},
		children: (e, t) => {
			var n = fg(), r = z(n);
			Zh(r, {
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
					return De;
				},
				set store(e) {
					De = e;
				}
			});
			var Ce = B(r, 2);
			dh(Ce, {
				get panOnScrollMode() {
					return se();
				},
				get preventScrolling() {
					return ce();
				},
				get zoomOnScroll() {
					return le();
				},
				get zoomOnDoubleClick() {
					return ue();
				},
				get zoomOnPinch() {
					return de();
				},
				get panOnScroll() {
					return fe();
				},
				get panOnScrollSpeed() {
					return pe();
				},
				get panOnDrag() {
					return me();
				},
				get paneClickDistance() {
					return u();
				},
				get selectionOnDrag() {
					return he();
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
					return De;
				},
				set store(e) {
					De = e;
				},
				children: (e, t) => {
					gh(e, {
						get onpaneclick() {
							return ae();
						},
						get onpanecontextmenu() {
							return oe();
						},
						get onselectionstart() {
							return D();
						},
						get onselectionend() {
							return ee();
						},
						get panOnDrag() {
							return me();
						},
						get paneClickDistance() {
							return u();
						},
						get selectionOnDrag() {
							return he();
						},
						get autoPanOnSelection() {
							return ge();
						},
						get store() {
							return De;
						},
						set store(e) {
							De = e;
						},
						children: (e, t) => {
							var n = dg(), r = z(n);
							vh(r, {
								get store() {
									return De;
								},
								set store(e) {
									De = e;
								},
								children: (e, t) => {
									var n = ug(), r = B(z(n), 2);
									Bh(r, {
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
											return De;
										},
										set store(e) {
											De = e;
										}
									});
									var i = B(r, 4);
									eg(i, {
										get type() {
											return be();
										},
										get LineComponent() {
											return _e();
										},
										get containerStyle() {
											return ye();
										},
										get style() {
											return ve();
										},
										get store() {
											return De;
										},
										set store(e) {
											De = e;
										}
									});
									var a = B(i, 2);
									Ah(a, {
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
											return S();
										},
										get onnodepointermove() {
											return C();
										},
										get onnodepointerleave() {
											return w();
										},
										get onnodedrag() {
											return v();
										},
										get onnodedragstart() {
											return b();
										},
										get onnodedragstop() {
											return x();
										},
										get store() {
											return De;
										},
										set store(e) {
											De = e;
										}
									}), Kh(B(a, 2), {
										get onselectionclick() {
											return T();
										},
										get onselectioncontextmenu() {
											return E();
										},
										get onnodedrag() {
											return v();
										},
										get onnodedragstart() {
											return b();
										},
										get onnodedragstop() {
											return x();
										},
										get store() {
											return De;
										},
										set store(e) {
											De = e;
										}
									}), j(2), K(e, n);
								},
								$$slots: { default: !0 }
							});
							var i = B(r, 2);
							{
								let e = /* @__PURE__ */ P(() => !!(De.selectionRect && De.selectionRectMode === "user")), t = /* @__PURE__ */ P(() => De.selectionRect?.width), n = /* @__PURE__ */ P(() => De.selectionRect?.height), r = /* @__PURE__ */ P(() => De.selectionRect?.x), a = /* @__PURE__ */ P(() => De.selectionRect?.y);
								Uh(i, {
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
			var we = B(Ce, 2);
			ag(we, {
				get proOptions() {
					return i();
				},
				get position() {
					return xe();
				}
			});
			var Te = B(we, 2);
			Ch(Te, { get store() {
				return De;
			} }), q(B(Te, 2), () => Se() ?? y), K(e, n);
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
			return b();
		},
		set onnodedragstart(e) {
			b(e), F();
		},
		get onnodedragstop() {
			return x();
		},
		set onnodedragstop(e) {
			x(e), F();
		},
		get onnodepointerenter() {
			return S();
		},
		set onnodepointerenter(e) {
			S(e), F();
		},
		get onnodepointermove() {
			return C();
		},
		set onnodepointermove(e) {
			C(e), F();
		},
		get onnodepointerleave() {
			return w();
		},
		set onnodepointerleave(e) {
			w(e), F();
		},
		get onselectionclick() {
			return T();
		},
		set onselectionclick(e) {
			T(e), F();
		},
		get onselectioncontextmenu() {
			return E();
		},
		set onselectioncontextmenu(e) {
			E(e), F();
		},
		get onselectionstart() {
			return D();
		},
		set onselectionstart(e) {
			D(e), F();
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
			return se();
		},
		set panOnScrollMode(e = Id.Free) {
			se(e), F();
		},
		get preventScrolling() {
			return ce();
		},
		set preventScrolling(e = !0) {
			ce(e), F();
		},
		get zoomOnScroll() {
			return le();
		},
		set zoomOnScroll(e = !0) {
			le(e), F();
		},
		get zoomOnDoubleClick() {
			return ue();
		},
		set zoomOnDoubleClick(e = !0) {
			ue(e), F();
		},
		get zoomOnPinch() {
			return de();
		},
		set zoomOnPinch(e = !0) {
			de(e), F();
		},
		get panOnScroll() {
			return fe();
		},
		set panOnScroll(e = !1) {
			fe(e), F();
		},
		get panOnScrollSpeed() {
			return pe();
		},
		set panOnScrollSpeed(e = .5) {
			pe(e), F();
		},
		get panOnDrag() {
			return me();
		},
		set panOnDrag(e = !0) {
			me(e), F();
		},
		get selectionOnDrag() {
			return he();
		},
		set selectionOnDrag(e = !1) {
			he(e), F();
		},
		get autoPanOnSelection() {
			return ge();
		},
		set autoPanOnSelection(e = !0) {
			ge(e), F();
		},
		get connectionLineComponent() {
			return _e();
		},
		set connectionLineComponent(e) {
			_e(e), F();
		},
		get connectionLineStyle() {
			return ve();
		},
		set connectionLineStyle(e) {
			ve(e), F();
		},
		get connectionLineContainerStyle() {
			return ye();
		},
		set connectionLineContainerStyle(e) {
			ye(e), F();
		},
		get connectionLineType() {
			return be();
		},
		set connectionLineType(e = zd.Bezier) {
			be(e), F();
		},
		get attributionPosition() {
			return xe();
		},
		set attributionPosition(e) {
			xe(e), F();
		},
		get children() {
			return Se();
		},
		set children(e) {
			Se(e), F();
		},
		get nodes() {
			return Ce();
		},
		set nodes(e = []) {
			Ce(e), F();
		},
		get edges() {
			return we();
		},
		set edges(e = []) {
			we(e), F();
		},
		get viewport() {
			return Te();
		},
		set viewport(e = void 0) {
			Te(e), F();
		}
	});
}
Z(pg, {
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
//#endregion
//#region ../../node_modules/.pnpm/@xyflow+svelte@1.6.2_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@xyflow/svelte/dist/lib/components/SvelteFlowProvider/SvelteFlowProvider.svelte
function mg(e, t) {
	M(t, !0);
	let n = X(t, "children", 7), r = /* @__PURE__ */ I(ch({
		props: {},
		nodes: [],
		edges: []
	}));
	it(sh, {
		provider: !0,
		getStore() {
			return H(r);
		},
		setStore: (e) => {
			L(r, e);
		}
	}), Ti(() => {
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
	return q(z(a), () => n() ?? y), K(e, a), N(i);
}
Z(mg, { children: {} }, [], [], { mode: "open" });
//#endregion
//#region ../../node_modules/.pnpm/@xyflow+svelte@1.6.2_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@xyflow/svelte/dist/lib/plugins/Controls/ControlButton.svelte
var hg = /* @__PURE__ */ new Set([
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
]), gg = /* @__PURE__ */ U("<button><!></button>");
function _g(e, t) {
	M(t, !0);
	let n = X(t, "class", 7), r = X(t, "bgColor", 7), i = X(t, "bgColorHover", 7), a = X(t, "color", 7), o = X(t, "colorHover", 7), s = X(t, "borderColor", 7), c = X(t, "onclick", 7), l = X(t, "children", 7), u = /* @__PURE__ */ La(t, hg);
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
	}, f = gg();
	return Sa(f, () => ({
		type: "button",
		onclick: c(),
		class: ["svelte-flow__controls-button", n()],
		...u,
		[la]: {
			"--xy-controls-button-background-color-props": r(),
			"--xy-controls-button-background-color-hover-props": i(),
			"--xy-controls-button-color-props": a(),
			"--xy-controls-button-color-hover-props": o(),
			"--xy-controls-button-border-color-props": s()
		}
	})), q(R(f), () => l() ?? y), A(f), K(e, f), N(d);
}
Z(_g, {
	class: {},
	bgColor: {},
	bgColorHover: {},
	color: {},
	colorHover: {},
	borderColor: {},
	onclick: {},
	children: {}
}, [], [], { mode: "open" });
//#endregion
//#region ../../node_modules/.pnpm/@xyflow+svelte@1.6.2_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@xyflow/svelte/dist/lib/plugins/Controls/Icons/Plus.svelte
var vg = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\"><path d=\"M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z\"></path></svg>");
function yg(e) {
	K(e, vg());
}
Z(yg, {}, [], [], { mode: "open" });
//#endregion
//#region ../../node_modules/.pnpm/@xyflow+svelte@1.6.2_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@xyflow/svelte/dist/lib/plugins/Controls/Icons/Minus.svelte
var bg = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 5\"><path d=\"M0 0h32v4.2H0z\"></path></svg>");
function xg(e) {
	K(e, bg());
}
Z(xg, {}, [], [], { mode: "open" });
//#endregion
//#region ../../node_modules/.pnpm/@xyflow+svelte@1.6.2_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@xyflow/svelte/dist/lib/plugins/Controls/Icons/Fit.svelte
var Sg = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 30\"><path d=\"M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z\"></path></svg>");
function Cg(e) {
	K(e, Sg());
}
Z(Cg, {}, [], [], { mode: "open" });
//#endregion
//#region ../../node_modules/.pnpm/@xyflow+svelte@1.6.2_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@xyflow/svelte/dist/lib/plugins/Controls/Icons/Lock.svelte
var wg = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 25 32\"><path d=\"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z\"></path></svg>");
function Tg(e) {
	K(e, wg());
}
Z(Tg, {}, [], [], { mode: "open" });
//#endregion
//#region ../../node_modules/.pnpm/@xyflow+svelte@1.6.2_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@xyflow/svelte/dist/lib/plugins/Controls/Icons/Unlock.svelte
var Eg = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 25 32\"><path d=\"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z\"></path></svg>");
function Dg(e) {
	K(e, Eg());
}
Z(Dg, {}, [], [], { mode: "open" });
//#endregion
//#region ../../node_modules/.pnpm/@xyflow+svelte@1.6.2_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@xyflow/svelte/dist/lib/plugins/Controls/Controls.svelte
var Og = /* @__PURE__ */ new Set([
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
]), kg = /* @__PURE__ */ U("<!> <!>", 1), Ag = /* @__PURE__ */ U("<!> <!> <!> <!> <!> <!>", 1);
function jg(e, t) {
	M(t, !0);
	let n = X(t, "position", 7, "bottom-left"), r = X(t, "orientation", 7, "vertical"), i = X(t, "showZoom", 7, !0), a = X(t, "showFitView", 7, !0), o = X(t, "showLock", 7, !0), s = X(t, "style", 7), c = X(t, "class", 7), l = X(t, "buttonBgColor", 7), u = X(t, "buttonBgColorHover", 7), d = X(t, "buttonColor", 7), f = X(t, "buttonColorHover", 7), p = X(t, "buttonBorderColor", 7), m = X(t, "fitViewOptions", 7), h = X(t, "children", 7), g = X(t, "before", 7), _ = X(t, "after", 7), v = /* @__PURE__ */ La(t, Og), y = /* @__PURE__ */ P(oh), b = /* @__PURE__ */ P(() => ({
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
		rg(e, Va({
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
				var n = Ag(), r = z(n), s = (e) => {
					var t = G();
					q(z(t), g), K(e, t);
				};
				J(r, (e) => {
					g() && e(s);
				});
				var c = B(r, 2), l = (e) => {
					var t = kg(), n = z(t);
					_g(n, Va({
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
							yg(e, {});
						},
						$$slots: { default: !0 }
					})), _g(B(n, 2), Va({
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
							xg(e, {});
						},
						$$slots: { default: !0 }
					})), K(e, t);
				};
				J(c, (e) => {
					i() && e(l);
				});
				var u = B(c, 2), d = (e) => {
					_g(e, Va({
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
							Cg(e, {});
						},
						$$slots: { default: !0 }
					}));
				};
				J(u, (e) => {
					a() && e(d);
				});
				var f = B(u, 2), p = (e) => {
					_g(e, Va({
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
								Dg(e, {});
							}, a = (e) => {
								Tg(e, {});
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
Z(jg, {
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
//#endregion
//#region ../../node_modules/.pnpm/@xyflow+svelte@1.6.2_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@xyflow/svelte/dist/lib/plugins/Background/types.js
var Mg;
(function(e) {
	e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(Mg ||= {});
//#endregion
//#region ../../node_modules/.pnpm/@xyflow+svelte@1.6.2_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@xyflow/svelte/dist/lib/plugins/Background/DotPattern.svelte
var Ng = /* @__PURE__ */ W("<circle></circle>");
function Pg(e, t) {
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
	}, a = Ng();
	return V(() => {
		Y(a, "cx", n()), Y(a, "cy", n()), Y(a, "r", n()), na(a, 0, Xi([
			"svelte-flow__background-pattern",
			"dots",
			r()
		]));
	}), K(e, a), N(i);
}
Z(Pg, {
	radius: {},
	class: {}
}, [], [], { mode: "open" });
//#endregion
//#region ../../node_modules/.pnpm/@xyflow+svelte@1.6.2_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@xyflow/svelte/dist/lib/plugins/Background/LinePattern.svelte
var Fg = /* @__PURE__ */ W("<path></path>");
function Ig(e, t) {
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
	}, s = Fg();
	return V(() => {
		Y(s, "stroke-width", n()), Y(s, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), na(s, 0, Xi([
			"svelte-flow__background-pattern",
			i(),
			a()
		]));
	}), K(e, s), N(o);
}
Z(Ig, {
	lineWidth: {},
	dimensions: {},
	variant: {},
	class: {}
}, [], [], { mode: "open" });
//#endregion
//#region ../../node_modules/.pnpm/@xyflow+svelte@1.6.2_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@xyflow/svelte/dist/lib/plugins/Background/Background.svelte
var Lg = {
	[Mg.Dots]: 1,
	[Mg.Lines]: 1,
	[Mg.Cross]: 6
}, Rg = /* @__PURE__ */ W("<svg data-testid=\"svelte-flow__background\"><pattern patternUnits=\"userSpaceOnUse\"><!></pattern><rect x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"></rect></svg>");
function zg(e, t) {
	M(t, !0);
	let n = X(t, "id", 7), r = X(t, "variant", 23, () => Mg.Dots), i = X(t, "gap", 7, 20), a = X(t, "size", 7), o = X(t, "lineWidth", 7, 1), s = X(t, "bgColor", 7), c = X(t, "patternColor", 7), l = X(t, "patternClass", 7), u = X(t, "class", 7), d = /* @__PURE__ */ P(oh), f = /* @__PURE__ */ P(() => r() === Mg.Dots), p = /* @__PURE__ */ P(() => r() === Mg.Cross), m = /* @__PURE__ */ P(() => Array.isArray(i()) ? i() : [i(), i()]), h = /* @__PURE__ */ P(() => `background-pattern-${H(d).flowId}-${n() ?? ""}`), g = /* @__PURE__ */ P(() => [H(m)[0] * H(d).viewport.zoom || 1, H(m)[1] * H(d).viewport.zoom || 1]), _ = /* @__PURE__ */ P(() => (a() ?? Lg[r()]) * H(d).viewport.zoom), v = /* @__PURE__ */ P(() => H(p) ? [H(_), H(_)] : H(g)), y = /* @__PURE__ */ P(() => H(f) ? [H(_) / 2, H(_) / 2] : [H(v)[0] / 2, H(v)[1] / 2]);
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
		set variant(e = Mg.Dots) {
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
	}, x = Rg();
	let S;
	var C = R(x), w = R(C), T = (e) => {
		{
			let t = /* @__PURE__ */ P(() => H(_) / 2);
			Pg(e, {
				get radius() {
					return H(t);
				},
				get class() {
					return l();
				}
			});
		}
	}, E = (e) => {
		Ig(e, {
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
		na(x, 0, Xi([
			"svelte-flow__background",
			"svelte-flow__container",
			u()
		])), S = ia(x, "", S, {
			"--xy-background-color-props": s(),
			"--xy-background-pattern-color-props": c()
		}), Y(C, "id", H(h)), Y(C, "x", H(d).viewport.x % H(g)[0]), Y(C, "y", H(d).viewport.y % H(g)[1]), Y(C, "width", H(g)[0]), Y(C, "height", H(g)[1]), Y(C, "patternTransform", `translate(-${H(y)[0]},-${H(y)[1]})`), Y(D, "fill", `url(#${H(h)})`);
	}), K(e, x), N(b);
}
Z(zg, {
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
//#endregion
//#region ../../node_modules/.pnpm/@xyflow+svelte@1.6.2_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@xyflow/svelte/dist/lib/hooks/useInternalNode.svelte.js
function Bg(e) {
	let t = /* @__PURE__ */ P(oh), n = /* @__PURE__ */ P(() => H(t).nodeLookup), r = /* @__PURE__ */ P(() => H(t).nodes), i = /* @__PURE__ */ P(() => (H(r), H(n).get(e)));
	return { get current() {
		return H(i);
	} };
}
//#endregion
//#region ../../node_modules/.pnpm/@xyflow+svelte@1.6.2_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@xyflow/svelte/dist/lib/plugins/Minimap/MinimapNode.svelte
var Vg = /* @__PURE__ */ W("<rect></rect>");
function Hg(e, t) {
	M(t, !0);
	let n = X(t, "id", 7), r = X(t, "x", 7), i = X(t, "y", 7), a = X(t, "width", 7), o = X(t, "height", 7), s = X(t, "borderRadius", 7, 5), c = X(t, "color", 7), l = X(t, "shapeRendering", 7), u = X(t, "strokeColor", 7), d = X(t, "strokeWidth", 7, 2), f = X(t, "selected", 7), p = X(t, "class", 7), m = X(t, "nodeComponent", 7), h = /* @__PURE__ */ P(() => Bg(n())), g = /* @__PURE__ */ P(() => {
		if (!H(h).current) return {
			width: 0,
			height: 0,
			x: 0,
			y: 0
		};
		let { width: e, height: t } = kf(H(h).current);
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
		Hi(z(r), () => H(t), (e, t) => {
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
		var t = Vg();
		let n, r;
		V(() => {
			n = na(t, 0, Xi(["svelte-flow__minimap-node", p()]), null, n, { selected: f() }), Y(t, "x", H(y)), Y(t, "y", H(b)), Y(t, "rx", s()), Y(t, "ry", s()), Y(t, "width", H(_)), Y(t, "height", H(v)), Y(t, "shape-rendering", l()), r = ia(t, "", r, {
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
Z(Hg, {
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
//#endregion
//#region ../../node_modules/.pnpm/@xyflow+svelte@1.6.2_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@xyflow/svelte/dist/lib/plugins/Minimap/interactive.js
function Ug(e, t) {
	let n = qp({
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
//#endregion
//#region ../../node_modules/.pnpm/@xyflow+svelte@1.6.2_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@xyflow/svelte/dist/lib/plugins/Minimap/Minimap.svelte
var Wg = (e) => e instanceof Function ? e : () => e, Gg = /* @__PURE__ */ new Set([
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
]), Kg = /* @__PURE__ */ W("<title> </title>"), qg = /* @__PURE__ */ W("<svg class=\"svelte-flow__minimap-svg\" role=\"img\"><!><!><path class=\"svelte-flow__minimap-mask\" fill-rule=\"evenodd\" pointer-events=\"none\"></path></svg>"), Jg = /* @__PURE__ */ U("<svelte-css-wrapper style=\"display: contents\"><!></svelte-css-wrapper>", 1);
function Yg(e, t) {
	M(t, !0);
	let n = X(t, "position", 7, "bottom-right"), r = X(t, "ariaLabel", 7), i = X(t, "nodeStrokeColor", 7, "transparent"), a = X(t, "nodeColor", 7), o = X(t, "nodeClass", 7, ""), s = X(t, "nodeBorderRadius", 7, 5), c = X(t, "nodeStrokeWidth", 7, 2), l = X(t, "nodeComponent", 7), u = X(t, "bgColor", 7), d = X(t, "maskColor", 7), f = X(t, "maskStrokeColor", 7), p = X(t, "maskStrokeWidth", 7), m = X(t, "width", 7, 200), h = X(t, "height", 7, 150), g = X(t, "pannable", 7, !0), _ = X(t, "zoomable", 7, !0), v = X(t, "inversePan", 7), y = X(t, "zoomStep", 7), b = X(t, "class", 7), x = /* @__PURE__ */ La(t, Gg), S = /* @__PURE__ */ P(oh), C = /* @__PURE__ */ P(() => H(S).ariaLabelConfig), w = typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision", T = /* @__PURE__ */ P(() => `svelte-flow__minimap-desc-${H(S).flowId}`), E = /* @__PURE__ */ P(() => ({
		x: -H(S).viewport.x / H(S).viewport.zoom,
		y: -H(S).viewport.y / H(S).viewport.zoom,
		width: H(S).width / H(S).viewport.zoom,
		height: H(S).height / H(S).viewport.zoom
	})), D = /* @__PURE__ */ P(() => mf(Xd(H(S).nodeLookup, { filter: (e) => !e.hidden }), H(E))), ee = /* @__PURE__ */ P(() => H(D).width / m()), te = /* @__PURE__ */ P(() => H(D).height / h()), ne = /* @__PURE__ */ P(() => Math.max(H(ee), H(te))), re = /* @__PURE__ */ P(() => H(ne) * m()), ie = /* @__PURE__ */ P(() => H(ne) * h()), ae = /* @__PURE__ */ P(() => 5 * H(ne)), oe = /* @__PURE__ */ P(() => H(D).x - (H(re) - H(D).width) / 2 - H(ae)), se = /* @__PURE__ */ P(() => H(D).y - (H(ie) - H(D).height) / 2 - H(ae)), ce = /* @__PURE__ */ P(() => H(re) + H(ae) * 2), le = /* @__PURE__ */ P(() => H(ie) + H(ae) * 2), ue = () => H(ne);
	var de = {
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
	}, fe = Jg(), pe = z(fe);
	{
		let e = /* @__PURE__ */ P(() => ["svelte-flow__minimap", b()]);
		Ai(pe, () => ({ "--xy-minimap-background-color-props": u() })), rg(pe.lastChild, Va({
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
					var t = qg();
					let n;
					var u = R(t), b = (e) => {
						var t = Kg(), n = R(t, !0);
						A(t), V(() => {
							Y(t, "id", H(T)), gi(n, r() ?? H(C)["minimap.ariaLabel"]);
						}), K(e, t);
					};
					J(u, (e) => {
						(r() ?? H(C)["minimap.ariaLabel"]) && e(b);
					});
					var x = B(u);
					Fi(x, 17, () => H(S).nodes, (e) => e.id, (e, t) => {
						let n = /* @__PURE__ */ P(() => H(S).nodeLookup.get(H(t).id));
						var r = G(), u = z(r), d = (e) => {
							{
								let r = /* @__PURE__ */ P(() => a() === void 0 ? void 0 : Wg(a())(H(t))), u = /* @__PURE__ */ P(() => Wg(i())(H(t))), d = /* @__PURE__ */ P(() => Wg(o())(H(t)));
								Hg(e, {
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
						}, f = /* @__PURE__ */ P(() => H(n) && Af(H(n)) && !H(n).hidden);
						J(u, (e) => {
							H(f) && e(d);
						}), K(e, r);
					});
					var D = B(x);
					A(t), Ki(t, (e, t) => Ug?.(e, t), () => ({
						store: H(S),
						panZoom: H(S).panZoom,
						getViewScale: ue,
						translateExtent: H(S).translateExtent,
						width: H(S).width,
						height: H(S).height,
						inversePan: v(),
						zoomStep: y(),
						pannable: g(),
						zoomable: _()
					})), V(() => {
						Y(t, "width", m()), Y(t, "height", h()), Y(t, "viewBox", `${H(oe) ?? ""} ${H(se) ?? ""} ${H(ce) ?? ""} ${H(le) ?? ""}`), Y(t, "aria-labelledby", H(T)), n = ia(t, "", n, {
							"--xy-minimap-mask-background-color-props": d(),
							"--xy-minimap-mask-stroke-color-props": f(),
							"--xy-minimap-mask-stroke-width-props": p() ? p() * H(ne) : void 0
						}), Y(D, "d", `M${H(oe) - H(ae)},${H(se) - H(ae)}h${H(ce) + H(ae) * 2}v${H(le) + H(ae) * 2}h${-H(ce) - H(ae) * 2}z
      M${H(E).x ?? ""},${H(E).y ?? ""}h${H(E).width ?? ""}v${H(E).height ?? ""}h${-H(E).width}z`);
					}), K(e, t);
				};
				J(u, (e) => {
					H(S).panZoom && e(b);
				}), K(e, n);
			},
			$$slots: { default: !0 }
		})), A(pe);
	}
	return K(e, fe), N(de);
}
Z(Yg, {
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
//#endregion
//#region ../../node_modules/.pnpm/@xyflow+svelte@1.6.2_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@xyflow/svelte/dist/lib/plugins/NodeToolbar/NodeToolbar.svelte
var Xg = /* @__PURE__ */ new Set([
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
]), Zg = /* @__PURE__ */ U("<div><!></div>");
function Qg(e, t) {
	M(t, !0);
	let n = X(t, "nodeId", 7), r = X(t, "position", 23, () => Q.Top), i = X(t, "align", 7, "center"), a = X(t, "offset", 7, 10), o = X(t, "isVisible", 7), s = X(t, "children", 7), c = /* @__PURE__ */ La(t, Xg), l = oh(), { getNodesBounds: u } = Yh(), d = fm(), f = /* @__PURE__ */ P(() => (l.nodes, (Array.isArray(n()) ? n() : [n() ?? d]).reduce((e, t) => {
		if (!t) throw Error("Either pass a nodeId or use within a Custom Node component");
		let n = l.nodeLookup.get(t);
		return n && e.push(n), e;
	}, []))), p = /* @__PURE__ */ P(() => {
		let e = u(H(f));
		return e ? dp(e, l.viewport, r(), a(), i()) : "";
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
	}, v = G(), b = z(v), x = (e) => {
		var t = Zg();
		Sa(t, (e, t) => ({
			class: "svelte-flow__node-toolbar",
			"data-id": e,
			...c,
			[la]: t
		}), [() => H(f).reduce((e, t) => `${e}${t.id} `, "").trim(), () => ({
			display: Am().value ? "none" : void 0,
			position: "absolute",
			transform: H(p),
			"z-index": H(m)
		})]), q(R(t), () => s() ?? y), A(t), Ki(t, (e, t) => km?.(e, t), () => "root"), K(e, t);
	};
	return J(b, (e) => {
		l.domNode && H(g) && H(f) && e(x);
	}), K(e, v), N(_);
}
Z(Qg, {
	nodeId: {},
	position: {},
	align: {},
	offset: {},
	isVisible: {},
	children: {}
}, [], [], { mode: "open" });
//#endregion
//#region ../../node_modules/.pnpm/@xyflow+svelte@1.6.2_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@xyflow/svelte/dist/lib/hooks/useNodesData.svelte.js
function $g(e) {
	let t = /* @__PURE__ */ P(oh), n = /* @__PURE__ */ P(() => H(t).nodes), r = /* @__PURE__ */ P(() => H(t).nodeLookup), i = [], a = !0, o = /* @__PURE__ */ P(() => {
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
		return (!Ap(t, i) || a) && (i = t, a = !1), o ? i : i[0] ?? null;
	});
	return { get current() {
		return H(o);
	} };
}
//#endregion
//#region ../../node_modules/.pnpm/runed@0.25.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/runed/dist/internal/configurable-globals.js
var e_ = typeof window < "u" ? window : void 0;
typeof window < "u" && window.document, typeof window < "u" && window.navigator, typeof window < "u" && window.location;
//#endregion
//#region ../../node_modules/.pnpm/runed@0.25.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/runed/dist/internal/utils/dom.js
function t_(e) {
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
		let { window: t = e_, document: n = t?.document } = e;
		t !== void 0 && (this.#e = n, this.#t = kt((e) => {
			let n = qr(t, "focusin", e), r = qr(t, "focusout", e);
			return () => {
				n(), r();
			};
		}));
	}
	get current() {
		return this.#t?.(), this.#e ? t_(this.#e) : null;
	}
}();
//#endregion
//#region ../../node_modules/.pnpm/runed@0.25.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/runed/dist/utilities/watch/watch.svelte.js
function n_(e, t) {
	switch (e) {
		case "post":
			Un(t);
			break;
		case "pre":
			Gn(t);
			break;
	}
}
function r_(e, t, n, r = {}) {
	let { lazy: i = !1 } = r, a = !i, o = Array.isArray(e) ? [] : void 0;
	n_(t, () => {
		let t = Array.isArray(e) ? e.map((e) => e()) : e();
		if (!a) {
			a = !0, o = t;
			return;
		}
		let r = Br(() => n(t, o));
		return o = t, r;
	});
}
function i_(e, t, n) {
	let r = Kn(() => {
		let i = !1;
		r_(e, t, (e, t) => {
			if (i) {
				r();
				return;
			}
			let a = n(e, t);
			return i = !0, a;
		}, { lazy: !0 });
	});
	Un(() => r);
}
function a_(e, t, n) {
	r_(e, "post", t, n);
}
function o_(e, t, n) {
	r_(e, "pre", t, n);
}
a_.pre = o_;
function s_(e, t) {
	i_(e, "post", t);
}
function c_(e, t) {
	i_(e, "pre", t);
}
s_.pre = c_;
//#endregion
//#region ../../node_modules/.pnpm/runed@0.25.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/runed/dist/utilities/persisted-state/persisted-state.svelte.js
function l_(e, t) {
	switch (e) {
		case "local": return t.localStorage;
		case "session": return t.sessionStorage;
	}
}
var u_ = class {
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
		}, syncTabs: a = !0, window: o = e_ } = n;
		if (this.#e = t, this.#t = e, this.#n = i, o === void 0) return;
		let s = l_(r, o);
		this.#r = s;
		let c = s.getItem(e);
		c === null ? this.#c(t) : this.#e = this.#s(c), a && r === "local" && (this.#i = kt(() => qr(o, "storage", this.#o)));
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
//#endregion
//#region ../../node_modules/.pnpm/runed@0.25.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/runed/dist/utilities/resource/resource.svelte.js
function d_(e, t) {
	let n, r = null;
	return (...i) => new Promise((a) => {
		r && r(void 0), r = a, clearTimeout(n), n = setTimeout(async () => {
			let t = await e(...i);
			r &&= (r(t), null);
		}, t);
	});
}
function f_(e, t) {
	let n = 0, r = null;
	return (...i) => {
		let a = Date.now();
		return n && a - n < t ? r ?? Promise.resolve(void 0) : (n = a, r = e(...i), r);
	};
}
function p_(e, t, n = {}, r) {
	let { lazy: i = !1, once: a = !1, initialValue: o, debounce: s, throttle: c } = n, l = /* @__PURE__ */ I(Cn(o)), u = /* @__PURE__ */ I(!1), d = /* @__PURE__ */ I(void 0), f = /* @__PURE__ */ I(Cn([])), p = () => {
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
	}, g = s ? d_(h, s) : c ? f_(h, c) : h, _ = Array.isArray(e) ? e : [e], v;
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
function m_(e, t, n) {
	return p_(e, t, n, (t, n) => {
		let r = Array.isArray(e) ? e : [e];
		a_(() => r.map((e) => e()), (e, n) => {
			t(e, n ?? []);
		}, n);
	});
}
function h_(e, t, n) {
	return p_(e, t, n, (t, n) => {
		let r = Array.isArray(e) ? e : [e];
		a_.pre(() => r.map((e) => e()), (e, n) => {
			t(e, n ?? []);
		}, n);
	});
}
m_.pre = h_;
//#endregion
//#region ../../node_modules/.pnpm/mode-watcher@1.1.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/mode-watcher/dist/utils.js
function g_(e) {
	return e.filter((e) => e.length > 0);
}
var __ = {
	getItem: (e) => null,
	setItem: (e, t) => {}
}, v_ = typeof document < "u";
//#endregion
//#region ../../node_modules/.pnpm/svelte-toolbelt@0.7.1_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/svelte-toolbelt/dist/utils/is.js
function y_(e) {
	return typeof e == "function";
}
function b_(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region ../../node_modules/.pnpm/svelte-toolbelt@0.7.1_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/svelte-toolbelt/dist/box/box.svelte.js
var x_ = Symbol("box"), S_ = Symbol("is-writable");
function C_(e) {
	return b_(e) && x_ in e;
}
function w_(e) {
	return T_.isBox(e) && S_ in e;
}
function T_(e) {
	let t = /* @__PURE__ */ I(Cn(e));
	return {
		[x_]: !0,
		[S_]: !0,
		get current() {
			return H(t);
		},
		set current(e) {
			L(t, e, !0);
		}
	};
}
function E_(e, t) {
	let n = /* @__PURE__ */ P(e);
	return t ? {
		[x_]: !0,
		[S_]: !0,
		get current() {
			return H(n);
		},
		set current(e) {
			t(e);
		}
	} : {
		[x_]: !0,
		get current() {
			return e();
		}
	};
}
function D_(e) {
	return T_.isBox(e) ? e : y_(e) ? T_.with(e) : T_(e);
}
function O_(e) {
	return Object.entries(e).reduce((e, [t, n]) => T_.isBox(n) ? (T_.isWritableBox(n) ? Object.defineProperty(e, t, {
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
function k_(e) {
	return T_.isWritableBox(e) ? {
		[x_]: !0,
		get current() {
			return e.current;
		}
	} : e;
}
T_.from = D_, T_.with = E_, T_.flatten = O_, T_.readonly = k_, T_.isBox = C_, T_.isWritableBox = w_;
//#endregion
//#region ../../node_modules/.pnpm/inline-style-parser@0.2.7/node_modules/inline-style-parser/esm/index.mjs
var A_ = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, j_ = /\n/g, M_ = /^\s*/, N_ = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, P_ = /^:\s*/, F_ = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, I_ = /^[;\s]*/, L_ = /^\s+|\s+$/g, R_ = "\n", z_ = "/", B_ = "*", V_ = "", H_ = "comment", U_ = "declaration";
function W_(e, t) {
	if (typeof e != "string") throw TypeError("First argument must be a string");
	if (!e) return [];
	t ||= {};
	var n = 1, r = 1;
	function i(e) {
		var t = e.match(j_);
		t && (n += t.length);
		var i = e.lastIndexOf(R_);
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
		c(M_);
	}
	function u(e) {
		var t;
		for (e ||= []; t = d();) t !== !1 && e.push(t);
		return e;
	}
	function d() {
		var t = a();
		if (!(z_ != e.charAt(0) || B_ != e.charAt(1))) {
			for (var n = 2; V_ != e.charAt(n) && (B_ != e.charAt(n) || z_ != e.charAt(n + 1));) ++n;
			if (n += 2, V_ === e.charAt(n - 1)) return s("End of comment missing");
			var o = e.slice(2, n - 2);
			return r += 2, i(o), e = e.slice(n), r += 2, t({
				type: H_,
				comment: o
			});
		}
	}
	function f() {
		var e = a(), t = c(N_);
		if (t) {
			if (d(), !c(P_)) return s("property missing ':'");
			var n = c(F_), r = e({
				type: U_,
				property: G_(t[0].replace(A_, V_)),
				value: n ? G_(n[0].replace(A_, V_)) : V_
			});
			return c(I_), r;
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
function G_(e) {
	return e ? e.replace(L_, V_) : V_;
}
//#endregion
//#region ../../node_modules/.pnpm/style-to-object@1.0.14/node_modules/style-to-object/esm/index.mjs
function K_(e, t) {
	let n = null;
	if (!e || typeof e != "string") return n;
	let r = W_(e), i = typeof t == "function";
	return r.forEach((e) => {
		if (e.type !== "declaration") return;
		let { property: r, value: a } = e;
		i ? t(r, a, e) : a && (n ||= {}, n[r] = a);
	}), n;
}
//#endregion
//#region ../../node_modules/.pnpm/svelte-toolbelt@0.7.1_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/svelte-toolbelt/dist/utils/style-to-css.js
function q_(e, t) {
	let n = RegExp(e, "g");
	return (e) => {
		if (typeof e != "string") throw TypeError(`expected an argument of type string, but got ${typeof e}`);
		return e.match(n) ? e.replace(n, t) : e;
	};
}
var J_ = q_(/[A-Z]/, (e) => `-${e.toLowerCase()}`);
function Y_(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) throw TypeError(`expected an argument of type object, but got ${typeof e}`);
	return Object.keys(e).map((t) => `${J_(t)}: ${e[t]};`).join("\n");
}
//#endregion
//#region ../../node_modules/.pnpm/svelte-toolbelt@0.7.1_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/svelte-toolbelt/dist/utils/style.js
function X_(e = {}) {
	return Y_(e).replace("\n", " ");
}
X_({
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
//#endregion
//#region ../../node_modules/.pnpm/runed@0.23.4_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/runed/dist/internal/configurable-globals.js
var Z_ = typeof window < "u" ? window : void 0;
typeof window < "u" && window.document, typeof window < "u" && window.navigator, typeof window < "u" && window.location;
//#endregion
//#region ../../node_modules/.pnpm/runed@0.23.4_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/runed/dist/internal/utils/dom.js
function Q_(e) {
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
		let { window: t = Z_, document: n = t?.document } = e;
		t !== void 0 && (this.#e = n, this.#t = kt((e) => {
			let n = qr(t, "focusin", e), r = qr(t, "focusout", e);
			return () => {
				n(), r();
			};
		}));
	}
	get current() {
		return this.#t?.(), this.#e ? Q_(this.#e) : null;
	}
}();
//#endregion
//#region ../../node_modules/.pnpm/runed@0.23.4_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/runed/dist/utilities/watch/watch.svelte.js
function $_(e, t) {
	switch (e) {
		case "post":
			Un(t);
			break;
		case "pre":
			Gn(t);
			break;
	}
}
function ev(e, t, n, r = {}) {
	let { lazy: i = !1 } = r, a = !i, o = Array.isArray(e) ? [] : void 0;
	$_(t, () => {
		let t = Array.isArray(e) ? e.map((e) => e()) : e();
		if (!a) {
			a = !0, o = t;
			return;
		}
		let r = Br(() => n(t, o));
		return o = t, r;
	});
}
function tv(e, t, n) {
	let r = Kn(() => {
		let i = !1;
		ev(e, t, (e, t) => {
			if (i) {
				r();
				return;
			}
			let a = n(e, t);
			return i = !0, a;
		}, { lazy: !0 });
	});
	Un(() => r);
}
function nv(e, t, n) {
	ev(e, "post", t, n);
}
function rv(e, t, n) {
	ev(e, "pre", t, n);
}
nv.pre = rv;
function iv(e, t) {
	tv(e, "post", t);
}
function av(e, t) {
	tv(e, "pre", t);
}
iv.pre = av;
//#endregion
//#region ../../node_modules/.pnpm/mode-watcher@1.1.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/mode-watcher/dist/storage-keys.svelte.js
var ov = T_("mode-watcher-mode"), sv = T_("mode-watcher-theme"), cv = [
	"dark",
	"light",
	"system"
];
function lv(e) {
	return typeof e == "string" && cv.includes(e);
}
//#endregion
//#region ../../node_modules/.pnpm/mode-watcher@1.1.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/mode-watcher/dist/mode-states.svelte.js
var uv = class {
	#e = "system";
	#t = v_ ? localStorage : __;
	#n = this.#t.getItem(ov.current);
	#r = lv(this.#n) ? this.#n : this.#e;
	#i = /* @__PURE__ */ I(Cn(this.#a()));
	#a(e = this.#r) {
		return new u_(ov.current, e, { serializer: {
			serialize: (e) => e,
			deserialize: (e) => lv(e) ? e : this.#e
		} });
	}
	constructor() {
		Kn(() => a_.pre(() => ov.current, (e, t) => {
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
}, dv = class {
	#e = void 0;
	#t = !0;
	#n = /* @__PURE__ */ I(Cn(this.#e));
	#r = typeof window < "u" && typeof window.matchMedia == "function" ? new Zm("prefers-color-scheme: light") : { current: !1 };
	query() {
		v_ && L(this.#n, this.#r.current ? "light" : "dark", !0);
	}
	tracking(e) {
		this.#t = e;
	}
	constructor() {
		Kn(() => {
			Gn(() => {
				this.#t && this.query();
			});
		}), this.query = this.query.bind(this), this.tracking = this.tracking.bind(this);
	}
	get current() {
		return H(this.#n);
	}
}, fv = new uv(), pv = new dv(), mv = new class {
	#e = v_ ? localStorage : __;
	#t = this.#e.getItem(sv.current);
	#n = this.#t === null || this.#t === void 0 ? "" : this.#t;
	#r = /* @__PURE__ */ I(Cn(this.#i()));
	#i(e = this.#n) {
		return new u_(sv.current, e, { serializer: {
			serialize: (e) => typeof e == "string" ? e : "",
			deserialize: (e) => e
		} });
	}
	constructor() {
		Kn(() => a_.pre(() => sv.current, (e, t) => {
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
}(), hv, gv, _v = !1, vv = null;
function yv() {
	return vv || (vv = document.createElement("style"), vv.appendChild(document.createTextNode("* {\n		-webkit-transition: none !important;\n		-moz-transition: none !important;\n		-o-transition: none !important;\n		-ms-transition: none !important;\n		transition: none !important;\n	}")), vv);
}
function bv(e, t = !1) {
	if (typeof document > "u") return;
	if (!_v) {
		_v = !0, e();
		return;
	}
	if (typeof window < "u" && window.__vitest_worker__) {
		e();
		return;
	}
	clearTimeout(hv), clearTimeout(gv);
	let n = yv(), r = () => document.head.appendChild(n), i = () => {
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
	r(), hv = window.setTimeout(() => {
		e(), gv = window.setTimeout(i, 16);
	}, 16);
}
//#endregion
//#region ../../node_modules/.pnpm/mode-watcher@1.1.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/mode-watcher/dist/states.svelte.js
var xv = T_(void 0), Sv = T_(!0), Cv = T_(!1), wv = T_([]), Tv = T_([]);
function Ev() {
	let e = /* @__PURE__ */ P(() => {
		if (!v_) return;
		let e = fv.current === "system" ? pv.current : fv.current, t = g_(wv.current), n = g_(Tv.current);
		function r() {
			let r = document.documentElement, i = document.querySelector("meta[name=\"theme-color\"]");
			e === "light" ? (t.length && r.classList.remove(...t), n.length && r.classList.add(...n), r.style.colorScheme = "light", i && xv.current && i.setAttribute("content", xv.current.light)) : (n.length && r.classList.remove(...n), t.length && r.classList.add(...t), r.style.colorScheme = "dark", i && xv.current && i.setAttribute("content", xv.current.dark));
		}
		return Sv.current ? bv(r, Cv.current) : r(), e;
	});
	return { get current() {
		return H(e);
	} };
}
function Dv() {
	let e = /* @__PURE__ */ P(() => {
		if (mv.current, !v_) return;
		function e() {
			document.documentElement.setAttribute("data-theme", mv.current);
		}
		return Sv.current ? bv(e, Br(() => Cv.current)) : e(), mv.current;
	});
	return { get current() {
		return H(e);
	} };
}
var Ov = Ev(), kv = Dv();
//#endregion
//#region ../../node_modules/.pnpm/mode-watcher@1.1.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/mode-watcher/dist/mode.js
function Av(e) {
	fv.current = e;
}
function jv(e) {
	mv.current = e;
}
function Mv(e) {
	return e;
}
function Nv({ defaultMode: e = "system", themeColors: t, darkClassNames: n = ["dark"], lightClassNames: r = [], defaultTheme: i = "", modeStorageKey: a = "mode-watcher-mode", themeStorageKey: o = "mode-watcher-theme" }) {
	let s = document.documentElement, c = localStorage.getItem(a) ?? e, l = localStorage.getItem(o) ?? i, u = c === "light" || c === "system" && window.matchMedia("(prefers-color-scheme: light)").matches;
	if (u ? (n.length && s.classList.remove(...n.filter(Boolean)), r.length && s.classList.add(...r.filter(Boolean))) : (r.length && s.classList.remove(...r.filter(Boolean)), n.length && s.classList.add(...n.filter(Boolean))), s.style.colorScheme = u ? "light" : "dark", t) {
		let e = document.querySelector("meta[name=\"theme-color\"]");
		e && e.setAttribute("content", c === "light" ? t.light : t.dark);
	}
	l && (s.setAttribute("data-theme", l), localStorage.setItem(o, l)), localStorage.setItem(a, c);
}
//#endregion
//#region ../../node_modules/.pnpm/mode-watcher@1.1.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/mode-watcher/dist/components/mode-watcher-lite.svelte
var Pv = /* @__PURE__ */ U("<meta name=\"theme-color\"/>");
function Fv(e, t) {
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
		var t = Pv();
		V(() => Y(t, "content", n().dark)), K(e, t);
	};
	return J(a, (e) => {
		n() && e(o);
	}), K(e, i), N(r);
}
Z(Fv, { themeColors: {} }, [], [], { mode: "open" });
//#endregion
//#region ../../node_modules/.pnpm/mode-watcher@1.1.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/mode-watcher/dist/components/mode-watcher-full.svelte
var Iv = /* @__PURE__ */ U("<meta name=\"theme-color\"/>"), Lv = /* @__PURE__ */ U("<!> <!>", 1);
function Rv(e, t) {
	M(t, !0);
	let n = X(t, "trueNonce", 7, ""), r = X(t, "initConfig", 7), i = X(t, "themeColors", 7);
	return Wi("9wjuby", (e) => {
		var t = Lv(), a = z(t), o = (e) => {
			var t = Iv();
			V(() => Y(t, "content", i().dark)), K(e, t);
		};
		J(a, (e) => {
			i() && e(o);
		}), Vi(B(a, 2), () => `<script${n() ? ` nonce=${n()}` : ""}>(` + Nv.toString() + ")(" + JSON.stringify(r()) + ");<\/script>"), K(e, t);
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
Z(Rv, {
	trueNonce: {},
	initConfig: {},
	themeColors: {}
}, [], [], { mode: "open" });
//#endregion
//#region ../../node_modules/.pnpm/mode-watcher@1.1.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/mode-watcher/dist/components/mode-watcher.svelte
function zv(e, t) {
	M(t, !0);
	let n = X(t, "track", 7, !0), r = X(t, "defaultMode", 7, "system"), i = X(t, "themeColors", 7), a = X(t, "disableTransitions", 7, !0), o = X(t, "darkClassNames", 23, () => ["dark"]), s = X(t, "lightClassNames", 23, () => []), c = X(t, "defaultTheme", 7, ""), l = X(t, "nonce", 7, ""), u = X(t, "themeStorageKey", 7, "mode-watcher-theme"), d = X(t, "modeStorageKey", 7, "mode-watcher-mode"), f = X(t, "disableHeadScriptInjection", 7, !1), p = X(t, "synchronousModeChanges", 7, !1);
	ov.current = d(), sv.current = u(), wv.current = o(), Tv.current = s(), Sv.current = a(), xv.current = i(), Cv.current = p(), Gn(() => {
		Cv.current = p();
	}), Gn(() => {
		Sv.current = a();
	}), Gn(() => {
		xv.current = i();
	}), Gn(() => {
		wv.current = o();
	}), Gn(() => {
		Tv.current = s();
	}), Gn(() => {
		ov.current = d();
	}), Gn(() => {
		sv.current = u();
	}), Gn(() => {
		Ov.current, ov.current, sv.current, kv.current;
	}), wi(() => {
		pv.tracking(n()), pv.query();
		let e = localStorage.getItem(ov.current);
		Av(lv(e) ? e : r()), jv(localStorage.getItem(sv.current) || c());
	});
	let m = Mv({
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
		Fv(e, { get themeColors() {
			return xv.current;
		} });
	}, b = (e) => {
		Rv(e, {
			get trueNonce() {
				return H(h);
			},
			get initConfig() {
				return m;
			},
			get themeColors() {
				return xv.current;
			}
		});
	};
	return J(v, (e) => {
		f() ? e(y) : e(b, -1);
	}), K(e, _), N(g);
}
Z(zv, {
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
//#endregion
//#region src/consts.ts
var Bv = "tinyflow-component", Vv = [
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
], Hv = [
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
], Uv = [
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
], Wv = [
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
], Gv = [{
	label: "单选",
	value: "radio"
}, {
	label: "多选",
	value: "checkbox"
}], Kv = [{
	label: "单选",
	value: "radio"
}, {
	label: "多选",
	value: "checkbox"
}], qv = (e) => !e || e === "system" ? pv.current : e, Jv = class {
	options;
	rootEl;
	tinyflowEl;
	svelteFlowInstance;
	constructor(e) {
		this.rootEl = this.resolveRoot(e.element), this.options = {
			...e,
			defaultTheme: qv(e.defaultTheme)
		}, this.mount();
	}
	resolveRoot(e) {
		if (typeof e == "string") {
			let t = document.querySelector(e);
			if (!t) throw Error(`element not found by document.querySelector('${e}')`);
			return t;
		}
		if (e instanceof Element) return e;
		throw Error("element must be a string or Element");
	}
	mount() {
		let e = document.createElement(Bv);
		e.style.display = "block", e.style.width = "100%", e.style.height = "100%", e.classList.add(...this.options.defaultTheme === "dark" ? ["tf-root", "dark"] : ["tf-root"]), e.options = this.options, e.onInit = (e) => {
			this.svelteFlowInstance = e;
		}, this.tinyflowEl = e, this.rootEl.appendChild(e);
	}
	getOptions() {
		return this.options;
	}
	getData() {
		return this.svelteFlowInstance?.toObject() ?? null;
	}
	setOptions(e) {
		this.options = {
			...this.options,
			...e,
			element: this.options.element,
			defaultTheme: qv(e.defaultTheme ?? this.options.defaultTheme)
		}, this.destroy(), this.mount();
	}
	setData(e) {
		this.setOptions({ data: e });
	}
	setTheme(e) {
		this.setOptions({ defaultTheme: e });
	}
	destroy() {
		this.tinyflowEl?.remove(), this.tinyflowEl = void 0, this.svelteFlowInstance = void 0;
	}
}, Yv = Symbol("tinyflow_store"), Xv = () => {
	let e = /* @__PURE__ */ I([]), t = /* @__PURE__ */ I([]), n = /* @__PURE__ */ I({
		x: 250,
		y: 100,
		zoom: 1
	});
	return {
		init: (r, i, a) => {
			L(e, r), L(t, i), L(n, a ?? {
				x: 250,
				y: 100,
				zoom: 1
			});
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
}, Zv = (e) => (it(Yv, e), e), Qv = () => {
	let e = rt(Yv);
	if (!e) throw Error("Tinyflow store is not available outside a Tinyflow component");
	return e;
};
//#endregion
//#region src/components/utils/cn.ts
function $v(...e) {
	return Yi(e);
}
//#endregion
//#region src/components/base/button.svelte
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
]), ry = /* @__PURE__ */ U("<a><!></a>"), iy = /* @__PURE__ */ U("<button><!></button>");
function ay(e, t) {
	M(t, !0);
	let n = X(t, "class", 7), r = X(t, "variant", 7, "outline"), i = X(t, "size", 7, "default"), a = X(t, "ref", 15, null), o = X(t, "href", 7, void 0), s = X(t, "type", 7, "button"), c = X(t, "disabled", 7), l = X(t, "children", 7), u = X(t, "primary", 7), d = /* @__PURE__ */ La(t, ny);
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
		var t = ry();
		Sa(t, (e) => ({
			"data-slot": "button",
			class: e,
			href: c() ? void 0 : o(),
			"aria-disabled": c(),
			role: c() ? "link" : void 0,
			tabindex: c() ? -1 : void 0,
			...d
		}), [() => $v("nopan nodrag tf-btn", ey[r()], ty[i()], n())]), q(R(t), () => l() ?? y), A(t), Na(t, (e) => a(e), () => a()), K(e, t);
	}, g = (e) => {
		var t = iy();
		Sa(t, (e) => ({
			"data-slot": "button",
			class: e,
			type: s(),
			disabled: c(),
			...d
		}), [() => $v("nopan nodrag tf-btn", ey[r()], ty[i()], n())]), q(R(t), () => l() ?? y), A(t), Na(t, (e) => a(e), () => a()), K(e, t);
	};
	return J(m, (e) => {
		o() ? e(h) : e(g, -1);
	}), K(e, p), N(f);
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
//#endregion
//#region ../../node_modules/.pnpm/svelte-toolbelt@0.10.6_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/svelte-toolbelt/dist/utils/is.js
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
//#endregion
//#region ../../node_modules/.pnpm/svelte-toolbelt@0.10.6_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/svelte-toolbelt/dist/box/box-extras.svelte.js
var uy = Symbol("box"), dy = Symbol("is-writable");
function $(e, t) {
	let n = /* @__PURE__ */ P(e);
	return t ? {
		[uy]: !0,
		[dy]: !0,
		get current() {
			return H(n);
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
	let t = /* @__PURE__ */ I(Cn(e));
	return {
		[uy]: !0,
		[dy]: !0,
		get current() {
			return H(t);
		},
		set current(e) {
			L(t, e, !0);
		}
	};
}
//#endregion
//#region ../../node_modules/.pnpm/svelte-toolbelt@0.10.6_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/svelte-toolbelt/dist/utils/compose-handlers.js
function hy(...e) {
	return function(t) {
		for (let n of e) if (n) {
			if (t.defaultPrevented) return;
			typeof n == "function" ? n.call(this, t) : n.current?.call(this, t);
		}
	};
}
//#endregion
//#region ../../node_modules/.pnpm/svelte-toolbelt@0.10.6_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/svelte-toolbelt/dist/utils/strings.js
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
//#endregion
//#region ../../node_modules/.pnpm/svelte-toolbelt@0.10.6_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/svelte-toolbelt/dist/utils/css-to-style-obj.js
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
	return K_(e, n), t;
}
//#endregion
//#region ../../node_modules/.pnpm/svelte-toolbelt@0.10.6_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/svelte-toolbelt/dist/utils/execute-callbacks.js
function Ty(...e) {
	return (...t) => {
		for (let n of e) typeof n == "function" && n(...t);
	};
}
//#endregion
//#region ../../node_modules/.pnpm/svelte-toolbelt@0.10.6_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/svelte-toolbelt/dist/utils/style-to-css.js
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
//#endregion
//#region ../../node_modules/.pnpm/svelte-toolbelt@0.10.6_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/svelte-toolbelt/dist/utils/style.js
function ky(e = {}) {
	return Oy(e).replace("\n", " ");
}
var Ay = new Set(/* @__PURE__ */ "onabort.onanimationcancel.onanimationend.onanimationiteration.onanimationstart.onauxclick.onbeforeinput.onbeforetoggle.onblur.oncancel.oncanplay.oncanplaythrough.onchange.onclick.onclose.oncompositionend.oncompositionstart.oncompositionupdate.oncontextlost.oncontextmenu.oncontextrestored.oncopy.oncuechange.oncut.ondblclick.ondrag.ondragend.ondragenter.ondragleave.ondragover.ondragstart.ondrop.ondurationchange.onemptied.onended.onerror.onfocus.onfocusin.onfocusout.onformdata.ongotpointercapture.oninput.oninvalid.onkeydown.onkeypress.onkeyup.onload.onloadeddata.onloadedmetadata.onloadstart.onlostpointercapture.onmousedown.onmouseenter.onmouseleave.onmousemove.onmouseout.onmouseover.onmouseup.onpaste.onpause.onplay.onplaying.onpointercancel.onpointerdown.onpointerenter.onpointerleave.onpointermove.onpointerout.onpointerover.onpointerup.onprogress.onratechange.onreset.onresize.onscroll.onscrollend.onsecuritypolicyviolation.onseeked.onseeking.onselect.onselectionchange.onselectstart.onslotchange.onstalled.onsubmit.onsuspend.ontimeupdate.ontoggle.ontouchcancel.ontouchend.ontouchmove.ontouchstart.ontransitioncancel.ontransitionend.ontransitionrun.ontransitionstart.onvolumechange.onwaiting.onwebkitanimationend.onwebkitanimationiteration.onwebkitanimationstart.onwebkittransitionend.onwheel".split("."));
//#endregion
//#region ../../node_modules/.pnpm/svelte-toolbelt@0.10.6_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/svelte-toolbelt/dist/utils/merge-props.js
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
					r && a ? t[e] = Yi(n, i) : r ? t[e] = Yi(n) : a && (t[e] = Yi(i));
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
//#endregion
//#region ../../node_modules/.pnpm/svelte-toolbelt@0.10.6_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/svelte-toolbelt/dist/utils/sr-only-styles.js
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
//#endregion
//#region ../../node_modules/.pnpm/runed@0.35.1_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/runed/dist/internal/configurable-globals.js
var Py = typeof window < "u" ? window : void 0;
typeof window < "u" && window.document, typeof window < "u" && window.navigator, typeof window < "u" && window.location;
//#endregion
//#region ../../node_modules/.pnpm/runed@0.35.1_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/runed/dist/internal/utils/dom.js
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
		t !== void 0 && (this.#e = n, this.#t = kt((e) => {
			let n = qr(t, "focusin", e), r = qr(t, "focusout", e);
			return () => {
				n(), r();
			};
		}));
	}
	get current() {
		return this.#t?.(), this.#e ? Fy(this.#e) : null;
	}
}();
//#endregion
//#region ../../node_modules/.pnpm/runed@0.35.1_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/runed/dist/internal/utils/is.js
function Iy(e) {
	return typeof e == "function";
}
//#endregion
//#region ../../node_modules/.pnpm/runed@0.35.1_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/runed/dist/utilities/context/context.js
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
		return at(this.#t);
	}
	get() {
		let e = rt(this.#t);
		if (e === void 0) throw Error(`Context "${this.#e}" not found`);
		return e;
	}
	getOr(e) {
		let t = rt(this.#t);
		return t === void 0 ? e : t;
	}
	set(e) {
		return it(this.#t, e);
	}
};
//#endregion
//#region ../../node_modules/.pnpm/runed@0.35.1_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/runed/dist/utilities/watch/watch.svelte.js
function Ry(e, t) {
	switch (e) {
		case "post":
			Un(t);
			break;
		case "pre":
			Gn(t);
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
		let r = Br(() => n(t, o));
		return o = t, r;
	});
}
function By(e, t, n) {
	let r = Kn(() => {
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
	Un(() => r);
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
//#endregion
//#region ../../node_modules/.pnpm/runed@0.35.1_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/runed/dist/internal/utils/get.js
function Gy(e) {
	return Iy(e) ? e() : e;
}
//#endregion
//#region ../../node_modules/.pnpm/runed@0.35.1_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/runed/dist/utilities/element-size/element-size.svelte.js
var Ky = class {
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
		let e = Gy(this.#r);
		if (e) return kt((t) => {
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
		return H(this.#s)?.(), this.getSize();
	}
	get width() {
		return H(this.#a);
	}
	get height() {
		return H(this.#o);
	}
}, qy = class {
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
//#endregion
//#region ../../node_modules/.pnpm/runed@0.35.1_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/runed/dist/utilities/resource/resource.svelte.js
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
	let { lazy: i = !1, once: a = !1, initialValue: o, debounce: s, throttle: c } = n, l = /* @__PURE__ */ I(Cn(o)), u = /* @__PURE__ */ I(!1), d = /* @__PURE__ */ I(void 0), f = /* @__PURE__ */ I(Cn([])), p = () => {
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
	}, g = s ? Jy(h, s) : c ? Yy(h, c) : h, _ = Array.isArray(e) ? e : [e], v;
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
//#endregion
//#region ../../node_modules/.pnpm/svelte-toolbelt@0.10.6_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/svelte-toolbelt/dist/utils/on-destroy-effect.svelte.js
function $y(e) {
	Un(() => () => {
		e();
	});
}
//#endregion
//#region ../../node_modules/.pnpm/svelte-toolbelt@0.10.6_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/svelte-toolbelt/dist/utils/on-mount-effect.svelte.js
function eb(e) {
	Un(() => Br(() => e()));
}
//#endregion
//#region ../../node_modules/.pnpm/svelte-toolbelt@0.10.6_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/svelte-toolbelt/dist/utils/after-sleep.js
function tb(e, t) {
	return setTimeout(t, e);
}
//#endregion
//#region ../../node_modules/.pnpm/svelte-toolbelt@0.10.6_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/svelte-toolbelt/dist/utils/after-tick.js
function nb(e) {
	Lr().then(e);
}
//#endregion
//#region ../../node_modules/.pnpm/svelte-toolbelt@0.10.6_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/svelte-toolbelt/dist/utils/dom.js
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
//#endregion
//#region ../../node_modules/.pnpm/svelte-toolbelt@0.10.6_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/svelte-toolbelt/dist/utils/dom-context.svelte.js
var hb = class {
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
//#endregion
//#region ../../node_modules/.pnpm/svelte-toolbelt@0.10.6_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/svelte-toolbelt/dist/utils/attach-ref.js
function gb(e, t) {
	return { [Di()]: (n) => fy(e) ? (e.current = n, Br(() => t?.(n)), () => {
		"isConnected" in n && n.isConnected || (e.current = null, t?.(null));
	}) : (e(n), Br(() => t?.(n)), () => {
		"isConnected" in n && n.isConnected || (e(null), t?.(null));
	}) };
}
//#endregion
//#region ../../node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/bits-ui/dist/internal/attrs.js
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
//#endregion
//#region ../../node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/bits-ui/dist/internal/animations-complete.js
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
	#r = /* @__PURE__ */ I(!1);
	#i = /* @__PURE__ */ I(void 0);
	#a = !1;
	#o = null;
	constructor(e) {
		this.#e = e, L(this.#r, e.open.current, !0), this.#t = e.enabled ?? !0, this.#n = new Ib({
			ref: this.#e.ref,
			afterTick: this.#e.open
		}), $y(() => this.#s()), Vy(() => this.#e.open.current, (e) => {
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
//#endregion
//#region ../../node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/bits-ui/dist/internal/noop.js
function Rb() {}
//#endregion
//#region ../../node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/bits-ui/dist/internal/create-id.js
function zb(e, t) {
	return t === void 0 ? `bits-${e}` : `bits-${e}-${t}`;
}
//#endregion
//#region ../../node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/bits-ui/dist/bits/utilities/portal/portal-consumer.svelte
function Bb(e, t) {
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
	return ki(z(i), n, (e) => {
		var t = G();
		q(z(t), () => n() ?? y), K(e, t);
	}), K(e, i), N(r);
}
Z(Bb, { children: {} }, [], [], { mode: "open" });
//#endregion
//#region ../../node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/bits-ui/dist/bits/utilities/config/bits-config.js
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
//#endregion
//#region ../../node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/bits-ui/dist/bits/utilities/config/prop-resolvers.js
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
//#endregion
//#region ../../node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/bits-ui/dist/bits/utilities/portal/portal.svelte
function qb(e, t) {
	M(t, !0);
	let n = X(t, "to", 7), r = X(t, "children", 7), i = X(t, "disabled", 7), a = Kb(() => n()), o = ot(), s = /* @__PURE__ */ P(c);
	function c() {
		if (!Ab || i()) return null;
		let e = null;
		return e = typeof a.current == "string" ? document.querySelector(a.current) : a.current, e;
	}
	let l;
	function u() {
		l &&= (Si(l), null);
	}
	Vy([() => H(s), () => i()], ([e, t]) => {
		if (!e || t) {
			u();
			return;
		}
		return l = _i(Bb, {
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
		q(z(t), () => r() ?? y), K(e, t);
	};
	return J(p, (e) => {
		i() && e(m);
	}), K(e, f), N(d);
}
Z(qb, {
	to: {},
	children: {},
	disabled: {}
}, [], [], { mode: "open" });
//#endregion
//#region ../../node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/bits-ui/dist/internal/events.js
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
		return qr(e, this.eventName, (e) => {
			t(e);
		}, n);
	}
};
//#endregion
//#region ../../node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/bits-ui/dist/internal/debounce.js
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
//#endregion
//#region ../../node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/bits-ui/dist/internal/elements.js
function Xb(e, t) {
	return e === t || e.contains(t);
}
function Zb(e) {
	return e?.ownerDocument ?? document;
}
//#endregion
//#region ../../node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/bits-ui/dist/internal/dom.js
function Qb(e, t) {
	let { clientX: n, clientY: r } = e, i = t.getBoundingClientRect();
	return n < i.left || n > i.right || r < i.top || r > i.bottom;
}
//#endregion
//#region ../../node_modules/.pnpm/tabbable@6.5.0/node_modules/tabbable/dist/index.esm.js
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
//#endregion
//#region ../../node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/bits-ui/dist/internal/arrays.js
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
//#endregion
//#region ../../node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/bits-ui/dist/internal/box-auto-reset.svelte.js
var Lx = {
	afterMs: 1e4,
	onChange: Rb
};
function Rx(e, t) {
	let { afterMs: n, onChange: r, getWindow: i } = {
		...Lx,
		...t
	}, a = null, o = /* @__PURE__ */ I(Cn(e));
	function s() {
		return i().setTimeout(() => {
			L(o, e, !0), r?.(e);
		}, n);
	}
	return Un(() => () => {
		a && i().clearTimeout(a);
	}), $(() => H(o), (e) => {
		L(o, e, !0), r?.(e), a && i().clearTimeout(a), a = s();
	});
}
//#endregion
//#region ../../node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/bits-ui/dist/internal/dom-typeahead.svelte.js
var zx = class {
	#e;
	#t;
	#n = /* @__PURE__ */ P(() => this.#e.onMatch ? this.#e.onMatch : (e) => e.focus());
	#r = /* @__PURE__ */ P(() => this.#e.getCurrentItem ? this.#e.getCurrentItem : this.#e.getActiveElement);
	constructor(e) {
		this.#e = e, this.#t = Rx("", {
			afterMs: 1e3,
			getWindow: e.getWindow
		}), this.handleTypeaheadSearch = this.handleTypeaheadSearch.bind(this), this.resetTypeahead = this.resetTypeahead.bind(this);
	}
	handleTypeaheadSearch(e, t) {
		if (!t.length) return;
		this.#t.current = this.#t.current + e;
		let n = H(this.#r)(), r = t.find((e) => e === n)?.textContent?.trim() ?? "", i = Fx(t.map((e) => e.textContent?.trim() ?? ""), this.#t.current, r), a = t.find((e) => e.textContent?.trim() === i);
		return a && H(this.#n)(a), a;
	}
	resetTypeahead() {
		this.#t.current = "";
	}
	get search() {
		return this.#t.current;
	}
}, Bx = "data-context-menu-trigger", Vx = "data-context-menu-content";
//#endregion
//#region ../../node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/bits-ui/dist/bits/utilities/dismissible-layer/use-dismissable-layer.svelte.js
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
		this.opts = e, this.#t = e.interactOutsideBehavior, this.#e = e.onInteractOutside, this.#o = e.onFocusOutside, Un(() => {
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
		return Ty(qr(this.#a, "pointerdown", Ty(this.#f, this.#m), { capture: !0 }), qr(this.#a, "pointerdown", Ty(this.#p, this.#d)), qr(this.#a, "focusin", this.#c));
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
		e.pointerType === "touch" ? (this.#s(), this.#s = qr(this.#a, "click", this.#u, { once: !0 })) : this.#e.current(n);
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
//#endregion
//#region ../../node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/bits-ui/dist/bits/utilities/dismissible-layer/dismissible-layer.svelte
function qx(e, t) {
	M(t, !0);
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
			n(e), F();
		},
		get onInteractOutside() {
			return r();
		},
		set onInteractOutside(e = Rb) {
			r(e), F();
		},
		get onFocusOutside() {
			return i();
		},
		set onFocusOutside(e = Rb) {
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
	return q(z(f), () => o() ?? y, () => ({ props: u.props })), K(e, f), N(d);
}
//#endregion
//#region ../../node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/bits-ui/dist/bits/utilities/escape-layer/use-escape-layer.svelte.js
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
	#e = () => qr(this.domContext.getDocument(), "keydown", this.#t, { passive: !1 });
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
//#endregion
//#region ../../node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/bits-ui/dist/bits/utilities/escape-layer/escape-layer.svelte
function Xx(e, t) {
	M(t, !0);
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
			n(e), F();
		},
		get onEscapeKeydown() {
			return r();
		},
		set onEscapeKeydown(e = Rb) {
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
	return q(z(c), () => i() ?? y), K(e, c), N(s);
}
Z(Xx, {
	escapeKeydownBehavior: {},
	onEscapeKeydown: {},
	children: {},
	enabled: {},
	ref: {}
}, [], [], { mode: "open" });
//#endregion
//#region ../../node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/bits-ui/dist/bits/utilities/focus-scope/focus-scope-manager.js
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
		this.#r.push(qr(t, "focusin", (t) => {
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
		}, { capture: !0 }), qr(e, "keydown", (e) => {
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
//#endregion
//#region ../../node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/bits-ui/dist/bits/utilities/focus-scope/focus-scope.svelte
function $x(e, t) {
	M(t, !0);
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
		set onCloseAutoFocus(e = Rb) {
			a(e), F();
		},
		get onOpenAutoFocus() {
			return o();
		},
		set onOpenAutoFocus(e = Rb) {
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
	return q(z(d), () => s() ?? y, () => ({ props: l.props })), K(e, d), N(u);
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
//#endregion
//#region ../../node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/bits-ui/dist/bits/utilities/text-selection-layer/use-text-selection-layer.svelte.js
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
		return Ty(qr(this.domContext.getDocument(), "pointerdown", this.#o), qr(this.domContext.getDocument(), "pointerup", hy(this.#s, this.#a)));
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
//#endregion
//#region ../../node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/bits-ui/dist/bits/utilities/text-selection-layer/text-selection-layer.svelte
function oS(e, t) {
	M(t, !0);
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
			n(e), F();
		},
		get onPointerDown() {
			return r();
		},
		set onPointerDown(e = Rb) {
			r(e), F();
		},
		get onPointerUp() {
			return i();
		},
		set onPointerUp(e = Rb) {
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
	return q(z(u), () => o() ?? y), K(e, u), N(l);
}
//#endregion
//#region ../../node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/bits-ui/dist/internal/use-id.js
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
//#endregion
//#region ../../node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/bits-ui/dist/internal/shared-state.svelte.js
var cS = class {
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
		return this.#t += 1, H(this.#n) === void 0 && (this.#r = Kn(() => {
			L(this.#n, this.#e(...e), !0);
		})), Un(() => () => {
			this.#i();
		}), H(this.#n);
	}
}, lS = new qm(), uS = /* @__PURE__ */ I(null), dS = null, fS = null, pS = !1, mS = $(() => {
	for (let e of lS.values()) if (e) return !0;
	return !1;
}), hS = null, gS = new cS(() => {
	function e() {
		document.body.setAttribute("style", H(uS) ?? ""), document.body.style.removeProperty("--scrollbar-width"), jb && dS?.(), L(uS, null);
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
		H(uS) === null && lS.size === 0 && !pS && L(uS, document.body.getAttribute("style"), !0);
	}
	return Vy(() => mS.current, () => {
		if (!mS.current) return;
		r(), pS = !1;
		let e = getComputedStyle(document.documentElement), t = getComputedStyle(document.body), n = e.scrollbarGutter?.includes("stable") || t.scrollbarGutter?.includes("stable"), i = window.innerWidth - document.documentElement.clientWidth, a = {
			padding: Number.parseInt(t.paddingRight ?? "0", 10) + i,
			margin: Number.parseInt(t.marginRight ?? "0", 10)
		};
		i > 0 && !n && (document.body.style.paddingRight = `${a.padding}px`, document.body.style.marginRight = `${a.margin}px`, document.body.style.setProperty("--scrollbar-width", `${i}px`)), document.body.style.overflow = "hidden", jb && (dS = qr(document, "touchmove", (e) => {
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
//#endregion
//#region ../../node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/bits-ui/dist/bits/utilities/scroll-lock/scroll-lock.svelte
function yS(e, t) {
	M(t, !0);
	let n = X(t, "preventScroll", 7, !0), r = X(t, "restoreScrollDelay", 7, null);
	return n() && new _S(n(), () => r()), N({
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
Z(yS, {
	preventScroll: {},
	restoreScrollDelay: {}
}, [], [], { mode: "open" });
//#endregion
//#region ../../node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/bits-ui/dist/bits/checkbox/checkbox.svelte.js
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
		this.opts = e, this.group = t, this.attachment = gb(this.opts.ref), this.onkeydown = this.onkeydown.bind(this), this.onclick = this.onclick.bind(this), Vy.pre([() => $e(this.group?.opts.value.current), () => this.opts.value.current], ([e, t]) => {
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
		return H(this.#o);
	}
	set props(e) {
		L(this.#o, e);
	}
}, wS = class e {
	static create() {
		return new e(SS.get());
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
		Nb(this.root.opts.ref.current) && this.root.opts.ref.current.focus();
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
function TS(e, t) {
	return t ? "indeterminate" : e ? "checked" : "unchecked";
}
//#endregion
//#region ../../node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/bits-ui/dist/bits/utilities/hidden-input.svelte
var ES = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host",
	"value"
]), DS = /* @__PURE__ */ U("<input/>");
function OS(e, t) {
	M(t, !0);
	let n = X(t, "value", 15), r = /* @__PURE__ */ La(t, ES), i = /* @__PURE__ */ P(() => My(r, {
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
			n(e), F();
		}
	}, o = G(), s = z(o), c = (e) => {
		var t = DS();
		Sa(t, () => ({
			...H(i),
			value: n()
		}), void 0, void 0, void 0, void 0, !0), K(e, t);
	}, l = (e) => {
		var t = DS();
		Sa(t, () => ({ ...H(i) }), void 0, void 0, void 0, void 0, !0), Ea(t, n), K(e, t);
	};
	return J(s, (e) => {
		H(i).type === "checkbox" ? e(c) : e(l, -1);
	}), K(e, o), N(a);
}
Z(OS, { value: {} }, [], [], { mode: "open" });
//#endregion
//#region ../../node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/bits-ui/dist/bits/checkbox/components/checkbox-input.svelte
function kS(e, t) {
	M(t, !1);
	let n = wS.create();
	Pa();
	var r = G(), i = z(r), a = (e) => {
		OS(e, Va(() => n.props));
	};
	J(i, (e) => {
		n.shouldRender && e(a);
	}), K(e, r), N();
}
Z(kS, {}, [], [], { mode: "open" });
//#endregion
//#region ../../node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/bits-ui/dist/bits/checkbox/components/checkbox.svelte
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
]), jS = /* @__PURE__ */ U("<button><!></button>"), MS = /* @__PURE__ */ U("<!> <!>", 1);
function NS(e, t) {
	let n = ai();
	M(t, !0);
	let r = X(t, "checked", 15, !1), i = X(t, "ref", 15, null), a = X(t, "onCheckedChange", 7), o = X(t, "children", 7), s = X(t, "disabled", 7, !1), c = X(t, "required", 7, !1), l = X(t, "name", 7, void 0), u = X(t, "value", 7, "on"), d = X(t, "id", 23, () => zb(n)), f = X(t, "indeterminate", 15, !1), p = X(t, "onIndeterminateChange", 7), m = X(t, "child", 7), h = X(t, "type", 7, "button"), g = X(t, "readonly", 7), _ = /* @__PURE__ */ La(t, AS), v = xS.getOr(null);
	v && u() && (v.opts.value.current.includes(u()) ? r(!0) : r(!1)), Vy.pre(() => u(), () => {
		v && u() && (v.opts.value.current.includes(u()) ? r(!0) : r(!1));
	});
	let b = CS.create({
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
	}, v), x = /* @__PURE__ */ P(() => My({ ..._ }, b.props));
	var S = {
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
		set id(e = zb(n)) {
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
	}, C = MS(), w = z(C), T = (e) => {
		var t = G(), n = z(t);
		{
			let e = /* @__PURE__ */ P(() => ({
				props: H(x),
				...b.snippetProps
			}));
			q(n, m, () => H(e));
		}
		K(e, t);
	}, E = (e) => {
		var t = jS();
		Sa(t, () => ({ ...H(x) })), q(R(t), () => o() ?? y, () => b.snippetProps), A(t), K(e, t);
	};
	return J(w, (e) => {
		m() ? e(T) : e(E, -1);
	}), kS(B(w, 2), {}), K(e, C), N(S);
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
//#endregion
//#region ../../node_modules/.pnpm/@floating-ui+utils@0.2.12/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
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
//#endregion
//#region ../../node_modules/.pnpm/@floating-ui+core@1.8.0/node_modules/@floating-ui/core/dist/floating-ui.core.mjs
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
		let w = b / 2 - x / 2, T = C / 2 - h[m] / 2 - 1, E = FS(d[_], T), D = FS(d[v], T), ee = C - h[m] - D, te = C / 2 - h[m] / 2 + w, ne = VS(E, te, ee), re = !c.arrow && WS(i) != null && te !== ne && a.reference[m] / 2 - (te < E ? E : D) - h[m] / 2 < 0, ie = re ? te < E ? te - E : te - ee : 0;
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
//#endregion
//#region ../../node_modules/.pnpm/@floating-ui+utils@0.2.12/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
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
//#endregion
//#region ../../node_modules/.pnpm/@floating-ui+dom@1.8.0/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
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
//#endregion
//#region ../../node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/bits-ui/dist/internal/floating-svelte/floating-utils.svelte.js
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
//#endregion
//#region ../../node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/bits-ui/dist/internal/floating-svelte/use-floating.svelte.js
function Fw(e) {
	let t = e.whileElementsMounted, n = /* @__PURE__ */ P(() => jw(e.open) ?? !0), r = /* @__PURE__ */ P(() => jw(e.middleware)), i = /* @__PURE__ */ P(() => jw(e.transform) ?? !0), a = /* @__PURE__ */ P(() => jw(e.placement) ?? "bottom"), o = /* @__PURE__ */ P(() => jw(e.strategy) ?? "absolute"), s = /* @__PURE__ */ P(() => jw(e.sideOffset) ?? 0), c = /* @__PURE__ */ P(() => jw(e.alignOffset) ?? 0), l = e.reference, u = /* @__PURE__ */ I(0), d = /* @__PURE__ */ I(0), f = my(null), p = /* @__PURE__ */ I(Cn(H(o))), m = /* @__PURE__ */ I(Cn(H(a))), h = /* @__PURE__ */ I(Cn({})), g = /* @__PURE__ */ I(!1), _ = !1, v = 0, y = /* @__PURE__ */ P(() => {
		let e = f.current ? Nw(f.current, H(u)) : H(u), t = f.current ? Nw(f.current, H(d)) : H(d);
		return H(i) ? {
			position: H(p),
			left: "0",
			top: "0",
			transform: `translate(${e}px, ${t}px)`,
			...f.current && Mw(f.current) >= 1.5 && { willChange: "transform" }
		} : {
			position: H(p),
			left: `${e}px`,
			top: `${t}px`
		};
	}), b;
	function x() {
		if (l.current === null || f.current === null) return;
		let e = l.current, t = f.current, i = ++v;
		Aw(e, t, {
			middleware: H(r),
			placement: H(a),
			strategy: H(o)
		}).then((r) => {
			if (i === v && !(l.current !== e || f.current !== t)) {
				if (Iw(e)) {
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
	return Un(() => {
		t === void 0 && H(n) && x();
	}), Un(C), Un(() => {
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
	}), Un(w), Un(() => S), {
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
function Iw(e) {
	return e instanceof Element ? !e.isConnected || e instanceof HTMLElement && e.hidden ? !0 : e.getClientRects().length === 0 : !1;
}
//#endregion
//#region ../../node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/bits-ui/dist/bits/utilities/floating-layer/use-floating-layer.svelte.js
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
		Un(() => {
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
	#e = /* @__PURE__ */ P(() => {
		if (typeof this.opts.style == "string") return wy(this.opts.style);
		if (!this.opts.style) return {};
	});
	#t = void 0;
	#n = new Ky(() => this.arrowRef.current ?? void 0);
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
		boundary: H(this.#o).filter(Fb),
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
		Cw({
			mainAxis: this.opts.sideOffset.current + H(this.#i),
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
				L(this.#l, t, !0), L(this.#u, n, !0), L(this.#d, r, !0), L(this.#f, i, !0);
			}
		}),
		this.arrowRef.current && Ow({
			element: this.arrowRef.current,
			padding: this.opts.arrowPadding.current
		}),
		Ww({
			arrowWidth: H(this.#r),
			arrowHeight: H(this.#i)
		}),
		this.opts.hideWhenDetached.current && Dw({
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
	#m = /* @__PURE__ */ P(() => Kw(this.floating.placement));
	get placedSide() {
		return H(this.#m);
	}
	set placedSide(e) {
		L(this.#m, e);
	}
	#h = /* @__PURE__ */ P(() => qw(this.floating.placement));
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
	#b = /* @__PURE__ */ P(() => Lw[this.placedSide]);
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
		style: ky({ ...H(this.#e) }),
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
		this.opts = e, this.root = t, this.#t = e.updatePositionStrategy, e.customAnchor && (this.root.customAnchorNode.current = e.customAnchor.current), Vy(() => e.customAnchor.current, (e) => {
			this.root.customAnchorNode.current = e;
		}), this.floating = Fw({
			strategy: () => this.opts.strategy.current,
			placement: () => H(this.#a),
			middleware: () => this.middleware,
			reference: this.root.anchorNode,
			whileElementsMounted: (...e) => Sw(...e, { animationFrame: this.#t?.current === "always" }),
			open: () => this.opts.enabled.current,
			sideOffset: () => this.opts.sideOffset.current,
			alignOffset: () => this.opts.alignOffset.current
		}), Un(() => {
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
		}), Un(() => {
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
//#endregion
//#region ../../node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/bits-ui/dist/bits/utilities/floating-layer/components/floating-layer.svelte
function Jw(e, t) {
	M(t, !0);
	let n = X(t, "children", 7), r = X(t, "tooltip", 7, !1);
	Vw.create(r());
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
	return q(z(a), () => n() ?? y), K(e, a), N(i);
}
Z(Jw, {
	children: {},
	tooltip: {}
}, [], [], { mode: "open" });
//#endregion
//#region ../../node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/bits-ui/dist/internal/data-typeahead.svelte.js
var Yw = class {
	#e;
	#t = /* @__PURE__ */ P(() => this.#e.candidateValues());
	#n;
	constructor(e) {
		this.#e = e, this.#n = Rx("", {
			afterMs: 1e3,
			getWindow: this.#e.getWindow
		}), this.handleTypeaheadSearch = this.handleTypeaheadSearch.bind(this), this.resetTypeahead = this.resetTypeahead.bind(this);
	}
	handleTypeaheadSearch(e) {
		if (!this.#e.enabled() || !H(this.#t).length) return;
		this.#n.current = this.#n.current + e;
		let t = this.#e.getCurrentItem(), n = H(this.#t).find((e) => e === t) ?? "", r = Fx(H(this.#t).map((e) => e ?? ""), this.#n.current, n), i = H(this.#t).find((e) => e === r);
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
	domContext = new hb(() => null);
	constructor(e) {
		this.opts = e, this.isCombobox = e.isCombobox, this.contentPresence = new Lb({
			ref: $(() => this.contentNode),
			open: this.opts.open,
			onComplete: () => {
				this.opts.onOpenChangeComplete.current(this.opts.open.current);
			}
		}), Gn(() => {
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
		super(e), this.opts = e, Un(() => {
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
	#e = /* @__PURE__ */ P(() => this.opts.value.current.length > 0);
	get hasValue() {
		return H(this.#e);
	}
	set hasValue(e) {
		L(this.#e, e);
	}
	constructor(e) {
		super(e), this.opts = e, Un(() => {
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
	#a = /* @__PURE__ */ P(() => ({
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
		return H(this.#a);
	}
	set props(e) {
		L(this.#a, e);
	}
}, sT = class e {
	static create(t) {
		return tT.set(new e(t, eT.get()));
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
	#t = /* @__PURE__ */ P(() => Pw(this.root.isCombobox ? "combobox" : "select"));
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
		"data-state": bb(this.root.opts.open.current),
		...xb(this.root.contentPresence.transitionStatus),
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
}, cT = class e {
	static create(t) {
		return new e(t, eT.get());
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
	prevHighlighted = new qy(() => this.isHighlighted);
	#n = /* @__PURE__ */ I(!1);
	get mounted() {
		return H(this.#n);
	}
	set mounted(e) {
		L(this.#n, e, !0);
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
			if (e.pointerType === "touch" && !jb) {
				qr(this.opts.ref.current, "click", () => {
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
		return H(this.#i);
	}
	set props(e) {
		L(this.#i, e);
	}
}, lT = class e {
	static create(t) {
		return new e(t, eT.get());
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
		disabled: yb(this.root.opts.disabled.current),
		required: yb(this.root.opts.required.current),
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
}, uT = class e {
	static create(t) {
		return new e(t, tT.get());
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
		this.opts = e, this.content = t, this.root = t.root, this.attachment = gb(e.ref, (e) => {
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
//#endregion
//#region ../../node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/bits-ui/dist/bits/select/components/select-hidden-input.svelte
function dT(e, t) {
	M(t, !0);
	let n = X(t, "value", 15), r = X(t, "autocomplete", 7), i = lT.create({ value: $(() => n()) });
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
		OS(e, Va(() => i.props, {
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
Z(dT, {
	value: {},
	autocomplete: {}
}, [], [], { mode: "open" });
//#endregion
//#region ../../node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/bits-ui/dist/bits/utilities/floating-layer/components/floating-layer-anchor.svelte
function fT(e, t) {
	M(t, !0);
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
	return q(z(c), () => r() ?? y), K(e, c), N(s);
}
Z(fT, {
	id: {},
	children: {},
	virtualEl: {},
	ref: {},
	tooltip: {}
}, [], [], { mode: "open" });
//#endregion
//#region ../../node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/bits-ui/dist/bits/utilities/floating-layer/components/floating-layer-content.svelte
function pT(e, t) {
	M(t, !0);
	let n = X(t, "content", 7), r = X(t, "side", 7, "bottom"), i = X(t, "sideOffset", 7, 0), a = X(t, "align", 7, "center"), o = X(t, "alignOffset", 7, 0), s = X(t, "id", 7), c = X(t, "arrowPadding", 7, 0), l = X(t, "avoidCollisions", 7, !0), u = X(t, "collisionBoundary", 23, () => []), d = X(t, "collisionPadding", 7, 0), f = X(t, "hideWhenDetached", 7, !1), p = X(t, "onPlaced", 7, () => {}), m = X(t, "sticky", 7, "partial"), h = X(t, "updatePositionStrategy", 7, "optimized"), g = X(t, "strategy", 7, "fixed"), _ = X(t, "dir", 7, "ltr"), v = X(t, "style", 23, () => ({})), b = X(t, "wrapperId", 23, sS), x = X(t, "customAnchor", 7, null), S = X(t, "enabled", 7), C = X(t, "tooltip", 7, !1), w = Hw.create({
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
		enabled: $(() => S()),
		wrapperId: $(() => b()),
		customAnchor: $(() => x())
	}, C()), T = /* @__PURE__ */ P(() => My(w.wrapperProps, { style: { pointerEvents: "auto" } }));
	var E = {
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
			return b();
		},
		set wrapperId(e = sS()) {
			b(e), F();
		},
		get customAnchor() {
			return x();
		},
		set customAnchor(e = null) {
			x(e), F();
		},
		get enabled() {
			return S();
		},
		set enabled(e) {
			S(e), F();
		},
		get tooltip() {
			return C();
		},
		set tooltip(e = !1) {
			C(e), F();
		}
	}, D = G();
	return q(z(D), () => n() ?? y, () => ({
		props: w.props,
		wrapperProps: H(T)
	})), K(e, D), N(E);
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
//#endregion
//#region ../../node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/bits-ui/dist/bits/utilities/floating-layer/components/floating-layer-content-static.svelte
function mT(e, t) {
	M(t, !0);
	let n = X(t, "content", 7), r = X(t, "onPlaced", 7);
	wi(() => {
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
	return q(z(a), () => n() ?? y, () => ({
		props: {},
		wrapperProps: {}
	})), K(e, a), N(i);
}
Z(mT, {
	content: {},
	onPlaced: {}
}, [], [], { mode: "open" });
//#endregion
//#region ../../node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/bits-ui/dist/bits/utilities/popper-layer/popper-content.svelte
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
	M(t, !0);
	let n = X(t, "content", 7), r = X(t, "isStatic", 7, !1), i = X(t, "onPlaced", 7), a = /* @__PURE__ */ La(t, hT);
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
		mT(e, {
			get content() {
				return n();
			},
			get onPlaced() {
				return i();
			}
		});
	}, u = (e) => {
		pT(e, Va({
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
Z(gT, {
	content: {},
	isStatic: {},
	onPlaced: {}
}, [], [], { mode: "open" });
//#endregion
//#region ../../node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/bits-ui/dist/bits/utilities/popper-layer/popper-layer-inner.svelte
var _T = /* @__PURE__ */ new Set(/* @__PURE__ */ "$$slots.$$events.$$legacy.$$host.popper.onEscapeKeydown.escapeKeydownBehavior.preventOverflowTextSelection.id.onPointerDown.onPointerUp.side.sideOffset.align.alignOffset.arrowPadding.avoidCollisions.collisionBoundary.collisionPadding.sticky.hideWhenDetached.updatePositionStrategy.strategy.dir.preventScroll.wrapperId.style.onPlaced.onInteractOutside.onCloseAutoFocus.onOpenAutoFocus.onFocusOutside.interactOutsideBehavior.loop.trapFocus.isValidEvent.customAnchor.isStatic.enabled.ref.tooltip.contentPointerEvents".split(".")), vT = /* @__PURE__ */ U("<!> <!>", 1);
function yT(e, t) {
	M(t, !0);
	let n = X(t, "popper", 7), r = X(t, "onEscapeKeydown", 7), i = X(t, "escapeKeydownBehavior", 7), a = X(t, "preventOverflowTextSelection", 7), o = X(t, "id", 7), s = X(t, "onPointerDown", 7), c = X(t, "onPointerUp", 7), l = X(t, "side", 7), u = X(t, "sideOffset", 7), d = X(t, "align", 7), f = X(t, "alignOffset", 7), p = X(t, "arrowPadding", 7), m = X(t, "avoidCollisions", 7), h = X(t, "collisionBoundary", 7), g = X(t, "collisionPadding", 7), _ = X(t, "sticky", 7), v = X(t, "hideWhenDetached", 7), b = X(t, "updatePositionStrategy", 7), x = X(t, "strategy", 7), S = X(t, "dir", 7), C = X(t, "preventScroll", 7), w = X(t, "wrapperId", 7), T = X(t, "style", 7), E = X(t, "onPlaced", 7), D = X(t, "onInteractOutside", 7), ee = X(t, "onCloseAutoFocus", 7), te = X(t, "onOpenAutoFocus", 7), ne = X(t, "onFocusOutside", 7), re = X(t, "interactOutsideBehavior", 7, "close"), ie = X(t, "loop", 7), ae = X(t, "trapFocus", 7, !0), oe = X(t, "isValidEvent", 7, () => !1), se = X(t, "customAnchor", 7, null), ce = X(t, "isStatic", 7, !1), le = X(t, "enabled", 7), ue = X(t, "ref", 7), de = X(t, "tooltip", 7, !1), fe = X(t, "contentPointerEvents", 7, "auto"), pe = /* @__PURE__ */ La(t, _T), me = /* @__PURE__ */ P(() => C() ?? !0), he = /* @__PURE__ */ P(() => x() ?? (H(me) ? "fixed" : "absolute"));
	return gT(e, {
		get isStatic() {
			return ce();
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
			return b();
		},
		get strategy() {
			return H(he);
		},
		get dir() {
			return S();
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
			return se();
		},
		get enabled() {
			return le();
		},
		get tooltip() {
			return de();
		},
		content: (e, l) => {
			let u = () => (l?.()).props, d = () => (l?.()).wrapperProps;
			var f = vT(), p = z(f), m = (e) => {
				yS(e, { get preventScroll() {
					return H(me);
				} });
			}, h = (e) => {
				yS(e, { get preventScroll() {
					return H(me);
				} });
			};
			J(p, (e) => {
				t.forceMount && le() ? e(m) : t.forceMount || e(h, 1);
			}), $x(B(p, 2), {
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
					return le();
				},
				get trapFocus() {
					return ae();
				},
				get forceMount() {
					return t.forceMount;
				},
				get ref() {
					return ue();
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
							return le();
						},
						get ref() {
							return ue();
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
									return ne();
								},
								get interactOutsideBehavior() {
									return re();
								},
								get isValidEvent() {
									return oe();
								},
								get enabled() {
									return le();
								},
								get ref() {
									return ue();
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
											return le();
										},
										get ref() {
											return ue();
										},
										children: (e, t) => {
											var i = G(), a = z(i);
											{
												let e = /* @__PURE__ */ P(() => ({
													props: My(pe, u(), r(), l(), { style: { pointerEvents: fe() } }),
													wrapperProps: d()
												}));
												q(a, () => n() ?? y, () => H(e));
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
			return se();
		},
		set customAnchor(e = null) {
			se(e), F();
		},
		get isStatic() {
			return ce();
		},
		set isStatic(e = !1) {
			ce(e), F();
		},
		get enabled() {
			return le();
		},
		set enabled(e) {
			le(e), F();
		},
		get ref() {
			return ue();
		},
		set ref(e) {
			ue(e), F();
		},
		get tooltip() {
			return de();
		},
		set tooltip(e = !1) {
			de(e), F();
		},
		get contentPointerEvents() {
			return fe();
		},
		set contentPointerEvents(e = "auto") {
			fe(e), F();
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
//#endregion
//#region ../../node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/bits-ui/dist/bits/utilities/popper-layer/popper-layer.svelte
var bT = /* @__PURE__ */ new Set(/* @__PURE__ */ "$$slots.$$events.$$legacy.$$host.popper.open.onEscapeKeydown.escapeKeydownBehavior.preventOverflowTextSelection.id.onPointerDown.onPointerUp.side.sideOffset.align.alignOffset.arrowPadding.avoidCollisions.collisionBoundary.collisionPadding.sticky.hideWhenDetached.updatePositionStrategy.strategy.dir.preventScroll.wrapperId.style.onPlaced.onInteractOutside.onCloseAutoFocus.onOpenAutoFocus.onFocusOutside.interactOutsideBehavior.loop.trapFocus.isValidEvent.customAnchor.isStatic.ref.shouldRender".split("."));
function xT(e, t) {
	M(t, !0);
	let n = X(t, "popper", 7), r = X(t, "open", 7), i = X(t, "onEscapeKeydown", 7), a = X(t, "escapeKeydownBehavior", 7), o = X(t, "preventOverflowTextSelection", 7), s = X(t, "id", 7), c = X(t, "onPointerDown", 7), l = X(t, "onPointerUp", 7), u = X(t, "side", 7), d = X(t, "sideOffset", 7), f = X(t, "align", 7), p = X(t, "alignOffset", 7), m = X(t, "arrowPadding", 7), h = X(t, "avoidCollisions", 7), g = X(t, "collisionBoundary", 7), _ = X(t, "collisionPadding", 7), v = X(t, "sticky", 7), y = X(t, "hideWhenDetached", 7), b = X(t, "updatePositionStrategy", 7), x = X(t, "strategy", 7), S = X(t, "dir", 7), C = X(t, "preventScroll", 7), w = X(t, "wrapperId", 7), T = X(t, "style", 7), E = X(t, "onPlaced", 7), D = X(t, "onInteractOutside", 7), ee = X(t, "onCloseAutoFocus", 7), te = X(t, "onOpenAutoFocus", 7), ne = X(t, "onFocusOutside", 7), re = X(t, "interactOutsideBehavior", 7, "close"), ie = X(t, "loop", 7), ae = X(t, "trapFocus", 7, !0), oe = X(t, "isValidEvent", 7, () => !1), se = X(t, "customAnchor", 7, null), ce = X(t, "isStatic", 7, !1), le = X(t, "ref", 7), ue = X(t, "shouldRender", 7), de = /* @__PURE__ */ La(t, bT);
	var fe = {
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
			return se();
		},
		set customAnchor(e = null) {
			se(e), F();
		},
		get isStatic() {
			return ce();
		},
		set isStatic(e = !1) {
			ce(e), F();
		},
		get ref() {
			return le();
		},
		set ref(e) {
			le(e), F();
		},
		get shouldRender() {
			return ue();
		},
		set shouldRender(e) {
			ue(e), F();
		}
	}, pe = G(), me = z(pe), he = (e) => {
		yT(e, Va({
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
				return se();
			},
			get isStatic() {
				return ce();
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
				return le();
			}
		}, () => de));
	};
	return J(me, (e) => {
		ue() && e(he);
	}), K(e, pe), N(fe);
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
//#endregion
//#region ../../node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/bits-ui/dist/bits/utilities/popper-layer/popper-layer-force-mount.svelte
var ST = /* @__PURE__ */ new Set(/* @__PURE__ */ "$$slots.$$events.$$legacy.$$host.popper.onEscapeKeydown.escapeKeydownBehavior.preventOverflowTextSelection.id.onPointerDown.onPointerUp.side.sideOffset.align.alignOffset.arrowPadding.avoidCollisions.collisionBoundary.collisionPadding.sticky.hideWhenDetached.updatePositionStrategy.strategy.dir.preventScroll.wrapperId.style.onPlaced.onInteractOutside.onCloseAutoFocus.onOpenAutoFocus.onFocusOutside.interactOutsideBehavior.loop.trapFocus.isValidEvent.customAnchor.isStatic.enabled".split("."));
function CT(e, t) {
	M(t, !0);
	let n = X(t, "popper", 7), r = X(t, "onEscapeKeydown", 7), i = X(t, "escapeKeydownBehavior", 7), a = X(t, "preventOverflowTextSelection", 7), o = X(t, "id", 7), s = X(t, "onPointerDown", 7), c = X(t, "onPointerUp", 7), l = X(t, "side", 7), u = X(t, "sideOffset", 7), d = X(t, "align", 7), f = X(t, "alignOffset", 7), p = X(t, "arrowPadding", 7), m = X(t, "avoidCollisions", 7), h = X(t, "collisionBoundary", 7), g = X(t, "collisionPadding", 7), _ = X(t, "sticky", 7), v = X(t, "hideWhenDetached", 7), y = X(t, "updatePositionStrategy", 7), b = X(t, "strategy", 7), x = X(t, "dir", 7), S = X(t, "preventScroll", 7), C = X(t, "wrapperId", 7), w = X(t, "style", 7), T = X(t, "onPlaced", 7), E = X(t, "onInteractOutside", 7), D = X(t, "onCloseAutoFocus", 7), ee = X(t, "onOpenAutoFocus", 7), te = X(t, "onFocusOutside", 7), ne = X(t, "interactOutsideBehavior", 7, "close"), re = X(t, "loop", 7), ie = X(t, "trapFocus", 7, !0), ae = X(t, "isValidEvent", 7, () => !1), oe = X(t, "customAnchor", 7, null), se = X(t, "isStatic", 7, !1), ce = X(t, "enabled", 7), le = /* @__PURE__ */ La(t, ST);
	return yT(e, Va({
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
			return se();
		},
		get enabled() {
			return ce();
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
	}, () => le, { forceMount: !0 })), N({
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
//#endregion
//#region ../../node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/bits-ui/dist/bits/select/components/select-content.svelte
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
]), TT = /* @__PURE__ */ U("<div><div><!></div></div>");
function ET(e, t) {
	let n = ai();
	M(t, !0);
	let r = X(t, "id", 23, () => zb(n)), i = X(t, "ref", 15, null), a = X(t, "forceMount", 7, !1), o = X(t, "side", 7, "bottom"), s = X(t, "onInteractOutside", 7, Rb), c = X(t, "onEscapeKeydown", 7, Rb), l = X(t, "children", 7), u = X(t, "child", 7), d = X(t, "preventScroll", 7, !1), f = X(t, "style", 7), p = /* @__PURE__ */ La(t, wT), m = sT.create({
		id: $(() => r()),
		ref: $(() => i(), (e) => i(e)),
		onInteractOutside: $(() => s()),
		onEscapeKeydown: $(() => c())
	}), h = /* @__PURE__ */ P(() => My(p, m.props));
	var g = {
		get id() {
			return r();
		},
		set id(e = zb(n)) {
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
		set onInteractOutside(e = Rb) {
			s(e), F();
		},
		get onEscapeKeydown() {
			return c();
		},
		set onEscapeKeydown(e = Rb) {
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
	}, _ = G(), v = z(_), b = (e) => {
		CT(e, Va(() => H(h), () => m.popperProps, {
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
				let n = () => (t?.()).props, r = () => (t?.()).wrapperProps, i = /* @__PURE__ */ P(() => My(n(), { style: m.props.style }, { style: f() }));
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
					var t = TT();
					Sa(t, () => ({ ...r() }));
					var n = R(t);
					Sa(n, () => ({ ...H(i) })), q(R(n), () => l() ?? y), A(n), A(t), K(e, t);
				};
				J(o, (e) => {
					u() ? e(s) : e(c, -1);
				}), K(e, a);
			},
			$$slots: { popper: !0 }
		}));
	}, x = (e) => {
		xT(e, Va(() => H(h), () => m.popperProps, {
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
				let n = () => (t?.()).props, r = () => (t?.()).wrapperProps, i = /* @__PURE__ */ P(() => My(n(), { style: m.props.style }, { style: f() }));
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
					var t = TT();
					Sa(t, () => ({ ...r() }));
					var n = R(t);
					Sa(n, () => ({ ...H(i) })), q(R(n), () => l() ?? y), A(n), A(t), K(e, t);
				};
				J(o, (e) => {
					u() ? e(s) : e(c, -1);
				}), K(e, a);
			},
			$$slots: { popper: !0 }
		}));
	};
	return J(v, (e) => {
		a() ? e(b) : a() || e(x, 1);
	}), K(e, _), N(g);
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
//#endregion
//#region ../../node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/bits-ui/dist/bits/utilities/mounted.svelte
function DT(e, t) {
	M(t, !0);
	let n = X(t, "mounted", 15, !1), r = X(t, "onMountedChange", 7, Rb);
	return eb(() => (n(!0), r()(!0), () => {
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
		set onMountedChange(e = Rb) {
			r(e), F();
		}
	});
}
Z(DT, {
	mounted: {},
	onMountedChange: {}
}, [], [], { mode: "open" });
//#endregion
//#region ../../node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/bits-ui/dist/bits/select/components/select-item.svelte
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
]), kT = /* @__PURE__ */ U("<div><!></div>"), AT = /* @__PURE__ */ U("<!> <!>", 1);
function jT(e, t) {
	let n = ai();
	M(t, !0);
	let r = X(t, "id", 23, () => zb(n)), i = X(t, "ref", 15, null), a = X(t, "value", 7), o = X(t, "label", 23, a), s = X(t, "disabled", 7, !1), c = X(t, "children", 7), l = X(t, "child", 7), u = X(t, "onHighlight", 7, Rb), d = X(t, "onUnhighlight", 7, Rb), f = /* @__PURE__ */ La(t, OT), p = cT.create({
		id: $(() => r()),
		ref: $(() => i(), (e) => i(e)),
		value: $(() => a()),
		disabled: $(() => s()),
		label: $(() => o()),
		onHighlight: $(() => u()),
		onUnhighlight: $(() => d())
	}), m = /* @__PURE__ */ P(() => My(f, p.props));
	var h = {
		get id() {
			return r();
		},
		set id(e = zb(n)) {
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
		set onHighlight(e = Rb) {
			u(e), F();
		},
		get onUnhighlight() {
			return d();
		},
		set onUnhighlight(e = Rb) {
			d(e), F();
		}
	}, g = AT(), _ = z(g), v = (e) => {
		var t = G(), n = z(t);
		{
			let e = /* @__PURE__ */ P(() => ({
				props: H(m),
				...p.snippetProps
			}));
			q(n, l, () => H(e));
		}
		K(e, t);
	}, b = (e) => {
		var t = kT();
		Sa(t, () => ({ ...H(m) })), q(R(t), () => c() ?? y, () => p.snippetProps), A(t), K(e, t);
	};
	return J(_, (e) => {
		l() ? e(v) : e(b, -1);
	}), DT(B(_, 2), {
		get mounted() {
			return p.mounted;
		},
		set mounted(e) {
			p.mounted = e;
		}
	}), K(e, g), N(h);
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
//#endregion
//#region ../../node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/bits-ui/dist/bits/select/components/select-viewport.svelte
var MT = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host",
	"id",
	"ref",
	"children",
	"child"
]), NT = /* @__PURE__ */ U("<div><!></div>"), PT = {
	hash: "svelte-111dell",
	code: "\n	/* Hide scrollbars cross browser and enable momentum scroll for touch devices */[data-select-viewport] {scrollbar-width:none !important;-ms-overflow-style:none !important;-webkit-overflow-scrolling:touch !important;}[data-combobox-viewport] {scrollbar-width:none !important;-ms-overflow-style:none !important;-webkit-overflow-scrolling:touch !important;}[data-combobox-viewport]::-webkit-scrollbar {display:none !important;}[data-select-viewport]::-webkit-scrollbar {display:none !important;}"
};
function FT(e, t) {
	let n = ai();
	M(t, !0), Gi(e, PT);
	let r = X(t, "id", 23, () => zb(n)), i = X(t, "ref", 15, null), a = X(t, "children", 7), o = X(t, "child", 7), s = /* @__PURE__ */ La(t, MT), c = uT.create({
		id: $(() => r()),
		ref: $(() => i(), (e) => i(e))
	}), l = /* @__PURE__ */ P(() => My(s, c.props));
	var u = {
		get id() {
			return r();
		},
		set id(e = zb(n)) {
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
		var t = NT();
		Sa(t, () => ({ ...H(l) })), q(R(t), () => a() ?? y), A(t), K(e, t);
	};
	return J(f, (e) => {
		o() ? e(p) : e(m, -1);
	}), K(e, d), N(u);
}
Z(FT, {
	id: {},
	ref: {},
	children: {},
	child: {}
}, [], [], { mode: "open" });
//#endregion
//#region ../../node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/bits-ui/dist/bits/select/components/select.svelte
var IT = /* @__PURE__ */ U("<!> <!>", 1);
function LT(e, t) {
	M(t, !0);
	let n = X(t, "value", 15), r = X(t, "onValueChange", 7, Rb), i = X(t, "name", 7, ""), a = X(t, "disabled", 7, !1), o = X(t, "type", 7), s = X(t, "open", 15, !1), c = X(t, "onOpenChange", 7, Rb), l = X(t, "onOpenChangeComplete", 7, Rb), u = X(t, "loop", 7, !1), d = X(t, "scrollAlignment", 7, "nearest"), f = X(t, "required", 7, !1), p = X(t, "items", 23, () => []), m = X(t, "allowDeselect", 7, !1), h = X(t, "autocomplete", 7), g = X(t, "children", 7);
	function _() {
		n() === void 0 && n(o() === "single" ? "" : []);
	}
	_(), Vy.pre(() => n(), () => {
		_();
	});
	let v = /* @__PURE__ */ I(""), b = aT.create({
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
	var x = {
		get value() {
			return n();
		},
		set value(e) {
			n(e), F();
		},
		get onValueChange() {
			return r();
		},
		set onValueChange(e = Rb) {
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
		set onOpenChange(e = Rb) {
			c(e), F();
		},
		get onOpenChangeComplete() {
			return l();
		},
		set onOpenChangeComplete(e = Rb) {
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
	}, S = IT(), C = z(S);
	Jw(C, {
		children: (e, t) => {
			var n = G();
			q(z(n), () => g() ?? y), K(e, n);
		},
		$$slots: { default: !0 }
	});
	var w = B(C, 2), T = (e) => {
		var t = G(), n = z(t), r = (e) => {
			dT(e, { get autocomplete() {
				return h();
			} });
		}, i = (e) => {
			var t = G();
			Fi(z(t), 16, () => b.opts.value.current, (e) => e, (e, t) => {
				dT(e, {
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
			b.opts.value.current.length === 0 ? e(r) : e(i, -1);
		}), K(e, t);
	}, E = /* @__PURE__ */ P(() => Array.isArray(b.opts.value.current)), D = (e) => {
		dT(e, {
			get autocomplete() {
				return h();
			},
			get value() {
				return b.opts.value.current;
			},
			set value(e) {
				b.opts.value.current = e;
			}
		});
	};
	return J(w, (e) => {
		H(E) ? e(T) : e(D, -1);
	}), K(e, S), N(x);
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
//#endregion
//#region ../../node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/bits-ui/dist/bits/select/components/select-trigger.svelte
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
]), zT = /* @__PURE__ */ U("<button><!></button>");
function BT(e, t) {
	let n = ai();
	M(t, !0);
	let r = X(t, "id", 23, () => zb(n)), i = X(t, "ref", 15, null), a = X(t, "child", 7), o = X(t, "children", 7), s = X(t, "type", 7, "button"), c = /* @__PURE__ */ La(t, RT), l = oT.create({
		id: $(() => r()),
		ref: $(() => i(), (e) => i(e))
	}), u = /* @__PURE__ */ P(() => My(c, l.props, { type: s() }));
	var d = {
		get id() {
			return r();
		},
		set id(e = zb(n)) {
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
	return Hi(z(f), () => fT, (e, t) => {
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
					var t = zT();
					Sa(t, () => ({ ...H(u) })), q(R(t), () => o() ?? y), A(t), K(e, t);
				};
				J(r, (e) => {
					a() ? e(i) : e(s, -1);
				}), K(e, n);
			},
			$$slots: { default: !0 }
		});
	}), K(e, f), N(d);
}
Z(BT, {
	id: {},
	ref: {},
	child: {},
	children: {},
	type: {}
}, [], [], { mode: "open" });
//#endregion
//#region ../../node_modules/.pnpm/@lucide+svelte@1.27.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@lucide/svelte/dist/defaultAttributes.js
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
}, UT = Symbol("lucide-context"), WT = () => rt(UT), GT = /* @__PURE__ */ new Set([
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
]), KT = /* @__PURE__ */ W("<svg><!><!></svg>");
function qT(e, t) {
	M(t, !0);
	let n = WT() ?? {}, r = X(t, "name", 7), i = X(t, "color", 23, () => n.color ?? "currentColor"), a = X(t, "size", 23, () => n.size ?? 24), o = X(t, "strokeWidth", 23, () => n.strokeWidth ?? 2), s = X(t, "absoluteStrokeWidth", 23, () => n.absoluteStrokeWidth ?? !1), c = X(t, "iconNode", 23, () => []), l = X(t, "children", 7), u = /* @__PURE__ */ La(t, GT), d = /* @__PURE__ */ P(() => s() ? Number(o()) * 24 / Number(a()) : o());
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
	}, p = KT();
	Sa(p, (e) => ({
		...VT,
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
	}), [() => !l() && !HT(u) && { "aria-hidden": "true" }]);
	var m = R(p);
	return Fi(m, 17, c, ji, (e, t) => {
		var n = /* @__PURE__ */ P(() => w(H(t), 2));
		let r = () => H(n)[0], i = () => H(n)[1];
		var a = G();
		Ui(z(a), r, !0, (e, t) => {
			Sa(e, () => ({ ...i() }));
		}), K(e, a);
	}), q(B(m), () => l() ?? y), A(p), K(e, p), N(f);
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
//#endregion
//#region ../../node_modules/.pnpm/@lucide+svelte@1.27.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@lucide/svelte/dist/icons/check.svelte
var JT = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host"
]);
function YT(e, t) {
	let n = /* @__PURE__ */ La(t, JT), r = [["path", { d: "M20 6 9 17l-5-5" }]];
	qT(e, Va({ name: "check" }, () => n, { get iconNode() {
		return r;
	} }));
}
Z(YT, {}, [], [], { mode: "open" });
//#endregion
//#region ../../node_modules/.pnpm/@lucide+svelte@1.27.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@lucide/svelte/dist/icons/minus.svelte
var XT = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host"
]);
function ZT(e, t) {
	let n = /* @__PURE__ */ La(t, XT), r = [["path", { d: "M5 12h14" }]];
	qT(e, Va({ name: "minus" }, () => n, { get iconNode() {
		return r;
	} }));
}
Z(ZT, {}, [], [], { mode: "open" });
//#endregion
//#region src/components/base/checkbox.svelte
var QT = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host",
	"ref",
	"checked",
	"indeterminate",
	"class"
]), $T = /* @__PURE__ */ U("<div data-slot=\"checkbox-indicator\" class=\"tf-checkbox-indicator\"><!></div>");
function eE(e, t) {
	M(t, !0);
	let n = X(t, "ref", 15, null), r = X(t, "checked", 15, !1), i = X(t, "indeterminate", 15, !1), a = X(t, "class", 7), o = /* @__PURE__ */ La(t, QT);
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
			var i = $T(), a = R(i), o = (e) => {
				YT(e, {
					color: "var(--tf-checkbox-checkmark)",
					strokeWidth: 3
				});
			}, s = (e) => {
				ZT(e, {
					color: "var(--tf-checkbox-checkmark)",
					strokeWidth: 3
				});
			};
			J(a, (e) => {
				n() ? e(o) : r() && e(s, 1);
			}), A(i), K(e, i);
		}, t = /* @__PURE__ */ P(() => $v("nopan nodrag tf-checkbox peer", a()));
		Hi(l, () => NS, (a, s) => {
			s(a, Va({
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
Z(eE, {
	ref: {},
	checked: {},
	indeterminate: {},
	class: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/components/base/chosen.svelte
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
]), nE = /* @__PURE__ */ U("<div><input type=\"hidden\"/> <!> <!></div>"), rE = {
	hash: "svelte-1o3a23c",
	code: ".tf-chosen.svelte-1o3a23c {display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:5px;}"
};
function iE(e, t) {
	M(t, !0), Gi(e, rE);
	let n = X(t, "placeholder", 7), r = X(t, "label", 7), i = X(t, "value", 7), a = X(t, "buttonText", 7, "选择..."), o = X(t, "onChosen", 7), s = X(t, "class", 7), c = X(t, "style", 7), l = /* @__PURE__ */ La(t, tE);
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
	}, d = nE();
	Sa(d, () => ({
		...l,
		style: c(),
		class: `tf-chosen nopan nodrag ${(s() || "") ?? ""}`
	}), void 0, void 0, void 0, "svelte-1o3a23c");
	var f = R(d);
	_a(f);
	var p = B(f, 2);
	return sE(p, {
		get value() {
			return r();
		},
		get placeholder() {
			return n();
		},
		style: "flex-grow: 1;",
		disabled: !0
	}), ay(B(p, 2), {
		variant: "outline",
		onclick: (e) => {
			o()?.(i(), r(), e);
		},
		style: "padding: 3px",
		children: (e, t) => {
			j();
			var n = ii();
			V(() => gi(n, a())), K(e, n);
		},
		$$slots: { default: !0 }
	}), A(d), V(() => va(f, i())), K(e, d), N(u);
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
//#endregion
//#region src/components/base/input.svelte
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
]), oE = /* @__PURE__ */ U("<input/>");
function sE(e, t) {
	M(t, !0);
	let n = X(t, "ref", 15, null), r = X(t, "value", 15), i = X(t, "type", 7), a = X(t, "files", 15), o = X(t, "class", 7), s = X(t, "data-slot", 7, "input"), c = /* @__PURE__ */ La(t, aE);
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
		var t = oE();
		Sa(t, (e) => ({
			"data-slot": s(),
			class: e,
			type: "file",
			...c
		}), [() => $v("nopan nodrag tf-input", o())], void 0, void 0, void 0, !0), Na(t, (e) => n(e), () => n()), ka(t, a), Ea(t, r), K(e, t);
	}, p = (e) => {
		var t = oE();
		Sa(t, (e) => ({
			"data-slot": s(),
			spellcheck: "false",
			class: e,
			type: i(),
			...c
		}), [() => $v("nopan nodrag tf-input", o())], void 0, void 0, void 0, !0), Na(t, (e) => n(e), () => n()), Ea(t, r), K(e, t);
	};
	return J(d, (e) => {
		i() === "file" ? e(f) : e(p, -1);
	}), K(e, u), N(l);
}
Z(sE, {
	ref: {},
	value: {},
	type: {},
	files: {},
	class: {},
	"data-slot": {}
}, [], [], { mode: "open" });
//#endregion
//#region src/components/base/textarea.svelte
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
]), lE = /* @__PURE__ */ U("<textarea></textarea>");
function uE(e, t) {
	M(t, !0);
	let n = X(t, "ref", 15, null), r = X(t, "value", 15), i = X(t, "class", 7), a = X(t, "data-slot", 7, "textarea"), o = X(t, "height", 7), s = X(t, "autoHeight", 7, !0), c = X(t, "maxHeight", 7), l = X(t, "onHeightChange", 7), u = /* @__PURE__ */ La(t, cE), d, f;
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
	Un(() => {
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
	}, h = lE();
	wt(h);
	var g = (e) => {
		p(), t.oninput?.(e);
	}, _ = (e) => {
		p(), t.onchange?.(e);
	};
	return Sa(h, (e) => ({
		spellcheck: "false",
		...u,
		"data-slot": a(),
		oninput: g,
		onchange: _,
		class: e
	}), [() => $v("nodrag nowheel tf-textarea", i())]), Na(h, (e) => d = e, () => d), Ea(h, r), K(e, h), N(m);
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
//#endregion
//#region src/components/base/tabs.svelte
var dE = /* @__PURE__ */ U("<div role=\"button\"><!></div>"), fE = /* @__PURE__ */ U("<div></div>");
function pE(e, t) {
	let n = za(za(t, [
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
	Pa();
	var c = fE();
	return Sa(c, () => ({
		...n,
		class: `tf-tabs ${(Vr(n), Br(() => n.class)) ?? ""}`
	})), Fi(c, 5, r, ji, (e, t, n) => {
		var r = dE();
		Y(r, "tabindex", n);
		var i = R(r), s = (e) => {
			var n = ii();
			V(() => gi(n, (H(t), Br(() => H(t).label)))), K(e, n);
		}, c = (e) => {
			var n = G();
			q(z(n), () => (H(t), Br(() => H(t).label)) ?? y), K(e, n);
		};
		J(i, (e) => {
			H(t), Br(() => typeof H(t).label == "string") ? e(s) : e(c, -1);
		}), A(r), V(() => na(r, 1, `tf-tabs-item ${n === a() ? "active" : ""}`)), Yr("click", r, () => o(H(t), n)), Yr("keydown", r, (e) => {
			(e.key === "Enter" || e.key === " ") && (e.preventDefault(), o(H(t), n));
		}), K(e, r);
	}), A(c), K(e, c), N(s);
}
Xr(["click", "keydown"]), Z(pE, {
	items: {},
	onChange: {},
	activeIndex: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/components/base/collapse.svelte
var mE = /* @__PURE__ */ U("<span class=\"tf-collapse-item-title-icon\"><!></span>"), hE = /* @__PURE__ */ U("<div class=\"tf-collapse-item-description\"><!></div>"), gE = /* @__PURE__ */ U("<div class=\"tf-collapse-item-content\"><!></div>"), _E = /* @__PURE__ */ U("<div class=\"tf-collapse-item\"><div class=\"tf-collapse-item-title\" role=\"button\"><!> <!> <span><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z\"></path></svg></span></div> <!> <!></div>"), vE = /* @__PURE__ */ U("<div></div>"), yE = {
	hash: "svelte-ynwjxt",
	code: "\n    /* 定义旋转的 CSS 类 */.rotate-90.svelte-ynwjxt {transform:rotate(90deg);transition:transform 0.3s ease;}"
};
function bE(e, t) {
	M(t, !0), Gi(e, yE);
	let n = X(t, "items", 7), r = X(t, "onChange", 7), i = X(t, "activeKeys", 31, () => Cn([]));
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
	}, s = vE();
	return Fi(s, 21, n, ji, (e, t, n) => {
		var r = _E(), o = R(r);
		Y(o, "tabindex", n);
		var s = R(o), c = (e) => {
			var n = mE();
			xE(R(n), { get target() {
				return H(t).icon;
			} }), A(n), K(e, n);
		};
		J(s, (e) => {
			H(t).icon && e(c);
		});
		var l = B(s, 2);
		xE(l, { get target() {
			return H(t).title;
		} });
		var u = B(l, 2);
		A(o);
		var d = B(o, 2), f = (e) => {
			var n = hE();
			xE(R(n), { get target() {
				return H(t).description;
			} }), A(n), K(e, n);
		};
		J(d, (e) => {
			H(t).description && e(f);
		});
		var p = B(d, 2), m = (e) => {
			var n = gE();
			xE(R(n), { get target() {
				return H(t).content;
			} }), A(n), K(e, n);
		}, h = /* @__PURE__ */ P(() => i().includes(H(t).key));
		J(p, (e) => {
			H(h) && e(m);
		}), A(r), V((e) => na(u, 1, `tf-collapse-item-title-arrow ${e ?? ""}`, "svelte-ynwjxt"), [() => i().includes(H(t).key) ? "rotate-90" : ""]), Yr("click", o, () => a(H(t))), Yr("keydown", o, (e) => {
			(e.key === "Enter" || e.key === " ") && (e.preventDefault(), a(H(t)));
		}), K(e, r);
	}), A(s), V(() => {
		ia(s, t.style), na(s, 1, `tf-collapse ${t.class ?? ""}`, "svelte-ynwjxt");
	}), K(e, s), N(o);
}
Xr(["click", "keydown"]), Z(bE, {
	items: {},
	onChange: {},
	activeKeys: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/components/base/render.svelte
function xE(e, t) {
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
		q(z(t), () => n() ?? y), K(e, t);
	}, s = (e) => {
		var t = G();
		Vi(z(t), n), K(e, t);
	};
	return J(a, (e) => {
		typeof n() == "function" ? e(o) : e(s, -1);
	}), K(e, i), N(r);
}
Z(xE, { target: {} }, [], [], { mode: "open" });
//#endregion
//#region ../../node_modules/.pnpm/@lucide+svelte@1.27.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@lucide/svelte/dist/icons/chevron-down.svelte
var SE = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host"
]);
function CE(e, t) {
	let n = /* @__PURE__ */ La(t, SE), r = [["path", { d: "m6 9 6 6 6-6" }]];
	qT(e, Va({ name: "chevron-down" }, () => n, { get iconNode() {
		return r;
	} }));
}
Z(CE, {}, [], [], { mode: "open" });
//#endregion
//#region src/components/utils/NodeUtils.ts
var wE = Symbol("tinyflow_node_id"), TE = (e) => {
	it(wE, e);
}, EE = () => rt(wE), DE = () => rt("tinyflow_options"), OE = /* @__PURE__ */ new Set([
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
	let n = X(t, "items", 7), r = X(t, "onSelect", 7), i = X(t, "value", 23, () => []), a = X(t, "defaultValue", 23, () => []), o = X(t, "expandAll", 7, !0), s = X(t, "multiple", 7, !1), c = X(t, "expandValue", 23, () => []), l = X(t, "placeholder", 7), u = X(t, "disabled", 7, !1), d = X(t, "class", 7), f = /* @__PURE__ */ La(t, OE), p = DE().defaultTheme, m = /* @__PURE__ */ P(() => {
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
		Hi(z(t), () => LT, (e, t) => {
			t(e, Va({
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
						let e = /* @__PURE__ */ P(() => $v("nopan nodrag tf-select", u() && "tf-select-disabled", d()));
						Hi(r, () => BT, (t, n) => {
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
										Fi(z(t), 19, () => H(h), (e) => e.value, (e, t, n) => {
											var r = AE(), i = z(r);
											xE(i, { get target() {
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
										A(t), V(() => gi(n, l() ?? "")), K(e, t);
									};
									J(i, (e) => {
										H(h).length > 0 ? e(a) : e(o, -1);
									}), A(r), CE(B(r, 2), { class: "tf-select-heading-icon" }), K(e, n);
								},
								$$slots: { default: !0 }
							});
						});
					}
					Hi(B(r, 2), () => qb, (e, t) => {
						t(e, {
							children: (e, t) => {
								var n = G(), r = z(n);
								{
									let e = /* @__PURE__ */ P(() => $v("nopan nodrag nowheel tf-root tf-select-content", p === "dark" && "dark"));
									Hi(r, () => ET, (t, n) => {
										n(t, {
											get class() {
												return H(e);
											},
											children: (e, t) => {
												var n = G();
												Hi(z(n), () => FT, (e, t) => {
													t(e, {
														style: "padding: 4px;",
														children: (e, t) => {
															var n = G(), r = z(n), i = (e) => {
																K(e, NE());
															}, a = (e) => {
																var t = G();
																Fi(z(t), 19, () => H(b), ({ item: e, level: t }, n) => `${n}_${e.value}`, (e, t) => {
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
																			}), xE(B(s, 2), { get target() {
																				return n().label;
																			} }), A(o);
																			var u = B(o, 2), d = (e) => {
																				K(e, IE());
																			};
																			J(u, (e) => {
																				r() && e(d);
																			}), K(e, a);
																		}, t = /* @__PURE__ */ P(() => r() * 12);
																		Hi(s, () => jT, (r, i) => {
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
		Hi(z(t), () => LT, (e, t) => {
			t(e, Va({
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
						let e = /* @__PURE__ */ P(() => $v("nopan nodrag tf-select", u() && " tf-select-disabled", d()));
						Hi(r, () => BT, (t, n) => {
							n(t, {
								get class() {
									return H(e);
								},
								get disabled() {
									return u();
								},
								children: (e, t) => {
									var n = ME(), r = z(n), i = R(r), a = (e) => {
										xE(e, { get target() {
											return H(h)[0].label;
										} });
									}, o = (e) => {
										var t = jE(), n = R(t, !0);
										A(t), V(() => gi(n, l() ?? "")), K(e, t);
									};
									J(i, (e) => {
										H(h).length > 0 ? e(a) : e(o, -1);
									}), A(r), CE(B(r, 2), { class: "tf-select-icon" }), K(e, n);
								},
								$$slots: { default: !0 }
							});
						});
					}
					Hi(B(r, 2), () => qb, (e, t) => {
						t(e, {
							children: (e, t) => {
								var n = G(), r = z(n);
								{
									let e = /* @__PURE__ */ P(() => $v("nopan nodrag nowheel tf-root tf-select-content", p === "dark" && "dark"));
									Hi(r, () => ET, (t, n) => {
										n(t, {
											get class() {
												return H(e);
											},
											children: (e, t) => {
												var n = G();
												Hi(z(n), () => FT, (e, t) => {
													t(e, {
														style: "padding: 4px;",
														children: (e, t) => {
															var n = G(), r = z(n), i = (e) => {
																K(e, NE());
															}, a = (e) => {
																var t = G();
																Fi(z(t), 19, () => H(b), ({ item: e, level: t }, n) => `${n}_${e.value}`, (e, t) => {
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
																			}), xE(B(s, 2), { get target() {
																				return n().label;
																			} }), A(o);
																			var u = B(o, 2), d = (e) => {
																				K(e, IE());
																			};
																			J(u, (e) => {
																				r() && e(d);
																			}), K(e, a);
																		}, t = /* @__PURE__ */ P(() => r() * 12);
																		Hi(s, () => jT, (r, i) => {
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
//#endregion
//#region src/components/utils/createFloating.ts
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
}, BE = /* @__PURE__ */ U("<div style=\"position: relative\"><div><!></div> <div style=\"display: none; width: 100%;z-index: 9999\"><!></div></div>");
function VE(e, t) {
	M(t, !0);
	let n = X(t, "children", 7), r = X(t, "floating", 7), i = X(t, "placement", 7, "bottom"), a, o, s;
	wi(() => (s = zE({
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
	q(R(d), n), A(d), Na(d, (e) => a = e, () => a);
	var f = B(d, 2);
	return q(R(f), r), A(f), Na(f, (e) => o = e, () => o), A(u), K(e, u), N(l);
}
Z(VE, {
	children: {},
	floating: {},
	placement: {}
}, [], ["hide"], { mode: "open" });
//#endregion
//#region src/components/base/heading.svelte
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
	return Ui(z(s), () => `h${r()}`, !1, (e, t) => {
		Sa(e, () => ({
			class: "tf-heading",
			style: `margin-top:${(i() || "0") ?? ""};margin-bottom:${(a() || "0") ?? ""}`
		}));
		var r = G();
		q(z(r), () => n() ?? y), K(t, r);
	}), K(e, s), N(o);
}
Z(HE, {
	children: {},
	level: {},
	mt: {},
	mb: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/components/base/menu-button.svelte
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
	M(t, !0), Gi(e, GE);
	let n = /* @__PURE__ */ La(t, UE);
	{
		let r = /* @__PURE__ */ P(() => $v("input-btn-more", t.class));
		ay(e, Va({
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
//#endregion
//#region src/components/utils/workflowMutations.ts
var qE = (e, t) => {
	let n = /* @__PURE__ */ new Set([t]), r = !0;
	for (; r;) {
		r = !1;
		for (let t of e) t.parentId && n.has(t.parentId) && !n.has(t.id) && (n.add(t.id), r = !0);
	}
	return n;
}, JE = (e, t) => {
	if (Array.isArray(e)) return e.map((e) => JE(e, t));
	if (!e || typeof e != "object") return e;
	let n = e, r = {};
	for (let [e, i] of Object.entries(n)) r[e] = JE(i, t);
	if (n.refType === "ref" && typeof n.ref == "string") {
		let e = n.ref.split(".", 1)[0];
		t.has(e) && (r.ref = void 0);
	}
	return r;
}, YE = (e, t, n) => {
	let r = qE(e, n);
	return {
		nodes: e.filter((e) => !r.has(e.id)).map((e) => ({
			...e,
			data: JE(e.data, r)
		})),
		edges: t.filter((e) => !r.has(e.source) && !r.has(e.target)),
		deletedIds: r
	};
}, XE = () => {
	let e = Qv();
	return { deleteNode: (t) => {
		let n = YE(e.getNodes(), e.getEdges(), t);
		e.setNodes(n.nodes), e.setEdges(n.edges);
	} };
}, ZE = (e = 16) => {
	let t = new Uint8Array(e);
	return crypto.getRandomValues(t), Array.from(t, (e) => "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"[e % 62]).join("");
}, QE = (e) => JSON.parse(JSON.stringify(e)), $E = (e, t = {}, n = !1) => {
	if (Array.isArray(e)) return e.map((e) => $E(e, t, n));
	if (!e || typeof e != "object") return e;
	let r = e, i = {};
	for (let [e, a] of Object.entries(r)) i[e] = $E(a, t, n || e === "parameters" || e === "outputDefs");
	return t.regenerateIds && n && "id" in r && (i.id = (t.idFactory ?? ZE)()), t.clearRefs && r.refType === "ref" && (i.ref = void 0), i;
}, eD = () => {
	let e = Qv();
	return { copyNode: (t) => {
		let n = e.getNode(t);
		if (n) {
			let t = {
				...QE(n),
				id: ZE(),
				data: $E(QE(n.data), {
					regenerateIds: !0,
					clearRefs: !0
				}),
				position: {
					x: n.position.x + 50,
					y: n.position.y + 50
				}
			};
			e.updateNodes((e) => [...e.map((e) => ({
				...e,
				selected: !1
			})), t]);
		}
	} };
}, tD = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z\"></path></svg>"), nD = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z\"></path></svg>"), rD = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z\"></path></svg>"), iD = /* @__PURE__ */ U("<div class=\"input-item svelte-ana6zl\">执行条件： <!></div>"), aD = /* @__PURE__ */ U("<div class=\"input-item svelte-ana6zl\">循环间隔时间（单位：毫秒）： <!></div> <div class=\"input-item svelte-ana6zl\">最大循环次数（0 表示不限制）： <!></div> <div class=\"input-item svelte-ana6zl\">退出条件： <!></div>", 1), oD = /* @__PURE__ */ U("<div class=\"input-item svelte-ana6zl\">错误重试间隔时间（单位：毫秒）： <!></div> <div class=\"input-item svelte-ana6zl\">最大重试次数： <!></div> <label class=\"input-item-inline svelte-ana6zl\"><span>正常后重置重试次数记录：</span> <input type=\"checkbox\"/></label>", 1), sD = /* @__PURE__ */ U("<div class=\"settings svelte-ana6zl\"><div class=\"input-item svelte-ana6zl\">节点名称： <!></div> <div class=\"input-item svelte-ana6zl\">参数描述： <!></div> <!> <label class=\"input-item-inline svelte-ana6zl\"><span>循环执行：</span> <input type=\"checkbox\"/></label> <!> <label class=\"input-item-inline svelte-ana6zl\"><span>错误重试：</span> <input type=\"checkbox\"/></label> <!></div>"), cD = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z\"></path></svg>"), lD = /* @__PURE__ */ U("<div class=\"tf-node-toolbar svelte-ana6zl\"><!> <!> <!> <!></div>"), uD = /* @__PURE__ */ U("<!> <div class=\"tf-node-wrapper\"><div class=\"tf-node-wrapper-title\">TinyFlow.ai</div> <div class=\"tf-node-wrapper-body\"><!></div></div> <!> <!> <!>", 1), dD = {
	hash: "svelte-ana6zl",
	code: ".tf-node-toolbar.svelte-ana6zl {display:flex;gap:5px;padding:5px;border-radius:5px;background:var(--tf-background);border:1px solid var(--tf-border);box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-ana6zl {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--tf-background);border:1px solid var(--tf-border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-ana6zl .input-item:where(.svelte-ana6zl) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--tf-muted-foreground);}.settings.svelte-ana6zl .input-item-inline:where(.svelte-ana6zl) {display:flex;align-items:center;font-size:12px;color:var(--tf-muted-foreground);}"
};
function fD(e, t) {
	M(t, !0), Gi(e, dD);
	let n = X(t, "data", 7), r = X(t, "id", 7, ""), i = X(t, "icon", 7), a = X(t, "handle", 7), o = X(t, "children", 7), s = X(t, "allowExecute", 7, !0), c = X(t, "allowCopy", 7, !0), l = X(t, "allowDelete", 7, !0), u = X(t, "allowSetting", 7, !0), d = X(t, "allowSettingOfCondition", 7, !0), f = X(t, "showSourceHandle", 7, !0), p = X(t, "showTargetHandle", 7, !0), m = X(t, "onCollapse", 7), h = n().expand ? ["key"] : [], { updateNodeData: g, getNode: _ } = Yh(), v = /* @__PURE__ */ P(() => [{
		key: "key",
		icon: i(),
		title: n().title,
		description: n().description,
		content: o()
	}]), { deleteNode: b } = XE(), { copyNode: x } = eD(), S = DE(), C = () => {
		S.onNodeExecute?.(_(r()));
	}, w = EE();
	var T = {
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
	}, E = uD(), D = z(E), ee = (e) => {
		Qg(e, {
			get position() {
				return Q.Top;
			},
			align: "start",
			children: (e, t) => {
				var i = lD(), a = R(i), o = (e) => {
					ay(e, {
						size: "icon",
						class: "tf-node-toolbar-item",
						onclick: () => {
							b(r());
						},
						children: (e, t) => {
							K(e, tD());
						},
						$$slots: { default: !0 }
					});
				};
				J(a, (e) => {
					l() && e(o);
				});
				var f = B(a, 2), p = (e) => {
					ay(e, {
						size: "icon",
						class: "tf-node-toolbar-item",
						onclick: () => {
							x(r());
						},
						children: (e, t) => {
							K(e, nD());
						},
						$$slots: { default: !0 }
					});
				};
				J(f, (e) => {
					c() && e(p);
				});
				var m = B(f, 2), h = (e) => {
					ay(e, {
						size: "icon",
						class: "tf-node-toolbar-item",
						onclick: C,
						children: (e, t) => {
							K(e, rD());
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
							var t = sD(), r = R(t);
							sE(B(R(r)), {
								style: "width: 100%;",
								onchange: (e) => {
									let t = e.target.value;
									g(w, { title: t });
								},
								get value() {
									return n().title;
								}
							}), A(r);
							var i = B(r, 2);
							uE(B(R(i)), {
								rows: 3,
								style: "width: 100%;",
								onchange: (e) => {
									let t = e.target.value;
									g(w, { description: t });
								},
								get value() {
									return n().description;
								}
							}), A(i);
							var a = B(i, 2), o = (e) => {
								var t = iD();
								uE(B(R(t)), {
									rows: 2,
									style: "width: 100%;",
									onchange: (e) => {
										let t = e.target.value;
										g(w, { condition: t });
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
							_a(c), A(s);
							var l = B(s, 2), u = (e) => {
								var t = aD(), r = z(t), i = B(R(r));
								{
									let e = /* @__PURE__ */ P(() => n().loopIntervalMs || "1000");
									uE(i, {
										rows: 1,
										style: "width: 100%;",
										onchange: (e) => {
											let t = e.target.value;
											g(w, { loopIntervalMs: t });
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
									uE(o, {
										rows: 1,
										style: "width: 100%;",
										onchange: (e) => {
											let t = e.target.value;
											g(w, { maxLoopCount: t });
										},
										get value() {
											return H(e);
										}
									});
								}
								A(a);
								var s = B(a, 2);
								uE(B(R(s)), {
									rows: 2,
									style: "width: 100%;",
									onchange: (e) => {
										let t = e.target.value;
										g(w, { loopBreakCondition: t });
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
							_a(p), A(f);
							var m = B(f, 2), h = (e) => {
								var t = oD(), r = z(t), i = B(R(r));
								{
									let e = /* @__PURE__ */ P(() => n().retryIntervalMs || "1000");
									uE(i, {
										rows: 1,
										style: "width: 100%;",
										onchange: (e) => {
											let t = e.target.value;
											g(w, { retryIntervalMs: t });
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
									uE(o, {
										rows: 1,
										style: "width: 100%;",
										onchange: (e) => {
											let t = e.target.value;
											g(w, { maxRetryCount: t });
										},
										get value() {
											return H(e);
										}
									});
								}
								A(a);
								var s = B(a, 2), c = B(R(s), 2);
								_a(c), A(s), V(() => ya(c, !!n().resetRetryCountAfterNormal)), Yr("change", c, (e) => {
									let t = e.target.checked;
									g(w, { resetRetryCountAfterNormal: t });
								}), K(e, t);
							};
							J(m, (e) => {
								n().retryEnable && e(h);
							}), A(t), V(() => {
								ya(c, !!n().loopEnable), ya(p, !!n().retryEnable);
							}), Yr("change", c, (e) => {
								let t = e.target.checked;
								g(w, { loopEnable: t });
							}), Yr("change", p, (e) => {
								let t = e.target.checked;
								g(w, { retryEnable: t });
							}), K(e, t);
						},
						children: (e, t) => {
							ay(e, {
								size: "icon",
								class: "tf-node-toolbar-item",
								children: (e, t) => {
									K(e, cD());
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
	J(D, (e) => {
		(s() || c() || l()) && e(ee);
	});
	var te = B(D, 2), ne = B(R(te), 2);
	bE(R(ne), {
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
		bm(e, {
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
		bm(e, {
			type: "source",
			get position() {
				return Q.Right;
			},
			style: "right: -12px;top: 20px"
		});
	};
	return J(ae, (e) => {
		f() && e(oe);
	}), q(B(ae, 2), () => a() ?? y), K(e, E), N(T);
}
Xr(["change"]), Z(fD, {
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
//#endregion
//#region src/components/core/DefinedParameterItem.svelte
var pD = /* @__PURE__ */ U("<div class=\"input-more-item svelte-n5iecj\">数据选项： <!></div>"), mD = /* @__PURE__ */ U("<div class=\"input-more-setting svelte-n5iecj\"><div class=\"input-more-item svelte-n5iecj\">数据类型： <!></div> <div class=\"input-more-item svelte-n5iecj\">输入方式： <!></div> <!> <div class=\"input-more-item svelte-n5iecj\">数据标题： <!></div> <div class=\"input-more-item svelte-n5iecj\">数据描述： <!></div> <div class=\"input-more-item svelte-n5iecj\">占位符： <!></div> <div class=\"input-more-item svelte-n5iecj\">参数描述： <!></div> <div class=\"input-more-item svelte-n5iecj\"><!></div></div>"), hD = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z\"></path></svg>"), gD = /* @__PURE__ */ U("<div class=\"input-item svelte-n5iecj\"><!></div> <div class=\"input-item svelte-n5iecj\"><!></div> <div class=\"input-item svelte-n5iecj\"><!></div>", 1), _D = {
	hash: "svelte-n5iecj",
	code: ".input-item.svelte-n5iecj {display:flex;align-items:center;}.input-more-setting.svelte-n5iecj {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--tf-background);border:1px solid var(--tf-border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-n5iecj .input-more-item:where(.svelte-n5iecj) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--tf-muted-foreground);}"
};
function vD(e, t) {
	M(t, !0), Gi(e, _D);
	let n = X(t, "parameter", 7), r = X(t, "index", 7), i = EE(), a = $g(i), o = /* @__PURE__ */ P(() => ({
		...n(),
		...(a?.current?.data?.parameters)[r()]
	})), s = /* @__PURE__ */ P(() => ["text", "other"].includes(H(o).contentType || "text") ? Wv : Gv), c = /* @__PURE__ */ P(() => H(o).contentType === "text" || !H(o).contentType), { updateNodeData: l } = Yh(), u = (e, t) => {
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
	}, y = gD(), b = z(y);
	sE(R(b), {
		style: "width: 100%;",
		get value() {
			return H(o).name;
		},
		placeholder: "请输入参数",
		oninput: f
	}), A(b);
	var x = B(b, 2);
	eE(R(x), {
		get checked() {
			return H(o).required;
		},
		onCheckedChange: p
	}), A(x);
	var S = B(x, 2);
	return Na(VE(R(S), {
		placement: "bottom",
		floating: (e) => {
			var t = mD(), n = R(t), r = B(R(n));
			{
				let e = /* @__PURE__ */ P(() => H(o).contentType ? [H(o).contentType] : []);
				RE(r, {
					get items() {
						return Uv;
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
				var t = pD(), n = B(R(t));
				{
					let e = /* @__PURE__ */ P(() => H(o).enums?.join("\n"));
					uE(n, {
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
			uE(B(R(p)), {
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
			uE(B(R(g)), {
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
			uE(B(R(v)), {
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
			uE(B(R(y)), {
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
			ay(R(b), {
				variant: "destructive",
				onclick: _,
				children: (e, t) => {
					j(), K(e, ii("删除"));
				},
				$$slots: { default: !0 }
			}), A(b), A(t), K(e, t);
		},
		children: (e, t) => {
			ay(e, {
				size: "icon-xs",
				class: "input-btn-more",
				children: (e, t) => {
					K(e, hD());
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
Z(vD, {
	parameter: {},
	index: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/components/core/DefinedParameterList.svelte
var yD = /* @__PURE__ */ U("<div class=\"input-header svelte-1yp5n1k\">参数名称</div> <div class=\"input-header svelte-1yp5n1k\">必填</div> <div class=\"input-header svelte-1yp5n1k\"></div>", 1), bD = /* @__PURE__ */ U("<div class=\"none-params svelte-1yp5n1k\">无输入参数</div>"), xD = /* @__PURE__ */ U("<div class=\"input-container svelte-1yp5n1k\"><!> <!></div>"), SD = {
	hash: "svelte-1yp5n1k",
	code: ".input-container.svelte-1yp5n1k {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1yp5n1k .none-params:where(.svelte-1yp5n1k) {font-size:12px;background:var(--tf-secondary);height:20px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;\n  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1yp5n1k .input-header:where(.svelte-1yp5n1k) {font-size:12px;color:var(--tf-muted-foreground);}"
};
function CD(e, t) {
	M(t, !0), Gi(e, SD);
	let n = $g(EE()), r = /* @__PURE__ */ P(() => [...n?.current?.data?.parameters || []]);
	var i = xD(), a = R(i), o = (e) => {
		var t = yD();
		j(4), K(e, t);
	};
	J(a, (e) => {
		H(r).length !== 0 && e(o);
	}), Fi(B(a, 2), 19, () => H(r), (e) => e.id, (e, t, n) => {
		vD(e, {
			get parameter() {
				return H(t);
			},
			get index() {
				return H(n);
			}
		});
	}, (e) => {
		K(e, bD());
	}), A(i), K(e, i), N();
}
Z(CD, {}, [], [], { mode: "open" });
//#endregion
//#region src/components/utils/useAddParameter.svelte.ts
var wD = (e) => (!e || e.length == 0 || e.forEach((e) => {
	e.id ||= ZE(), wD(e.children);
}), e), TD = () => {
	let { updateNodeData: e } = Yh();
	return { addParameter: (t, n = "parameters", r) => {
		Array.isArray(r) ? r.forEach((e) => wD(e?.children)) : wD(r?.children);
		function i(e) {
			return {
				name: "",
				refType: "ref",
				...e,
				id: ZE()
			};
		}
		let a = [];
		Array.isArray(r) ? a.push(...r.map(i)) : a.push(i(r)), e(t, (e) => {
			let t = e.data[n];
			return t ? t.push(...a) : t = [...a], { [n]: [...t] };
		});
	} };
}, ED = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host",
	"id",
	"data"
]), DD = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z\"></path></svg>"), OD = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z\"></path></svg>"), kD = /* @__PURE__ */ U("<div class=\"heading svelte-llt1qy\"><!> <!></div> <!>", 1), AD = {
	hash: "svelte-llt1qy",
	code: ".heading.svelte-llt1qy {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:var(--tf-muted);border:1px solid transparent;}"
};
function jD(e, t) {
	M(t, !0), Gi(e, AD);
	let n = X(t, "id", 7), r = X(t, "data", 7), i = /* @__PURE__ */ La(t, ED);
	TE(n());
	let { addParameter: a } = TD();
	return fD(e, Va({ get id() {
		return n();
	} }, () => i, {
		get data() {
			return r();
		},
		allowExecute: !1,
		showTargetHandle: !1,
		allowSettingOfCondition: !1,
		icon: (e) => {
			K(e, DD());
		},
		children: (e, t) => {
			var r = kD(), i = z(r), o = R(i);
			HE(o, {
				level: 3,
				children: (e, t) => {
					j(), K(e, ii("输入参数"));
				},
				$$slots: { default: !0 }
			}), ay(B(o, 2), {
				size: "icon-xs",
				class: "input-btn-more",
				style: "margin-left: auto",
				onclick: () => {
					a(n(), "parameters", {
						refType: "input",
						name: "newParam",
						dataType: "String"
					});
				},
				children: (e, t) => {
					K(e, OD());
				},
				$$slots: { default: !0 }
			}), A(i), CD(B(i, 2), {}), K(e, r);
		},
		$$slots: {
			icon: !0,
			default: !0
		}
	})), N({
		get id() {
			return n();
		},
		set id(e) {
			n(e), F();
		},
		get data() {
			return r();
		},
		set data(e) {
			r(e), F();
		}
	});
}
Z(jD, {
	id: {},
	data: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/components/utils/useRefOptions.svelte.ts
var MD = (e, t, n) => {
	for (let r of n) r.target === t && r.source && !e.includes(r.source) && (e.push(r.source), MD(e, r.source, n));
}, ND = (e, t, n, r) => !e || e.length === 0 ? [] : e.map((e) => ({
	label: e.name + r(e, n),
	value: t + "." + e.name,
	children: ND(e.children, t + "." + e.name, n, r)
})), PD = (e) => e.contentType === "text" || !e.contentType, FD = (e, t, n, r) => {
	if (e.type === "startNode") {
		let n = e.data.parameters, i = [];
		if (n) for (let a of n) i.push({
			label: a.name + r(a, t || !PD(a) && a.formType === "checkbox"),
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
			children: ND(n, e.id, t || e.type === "loopNode", r)
		};
	}
}, ID = (e = !1) => {
	let t = EE(), n = $g(t), r = /* @__PURE__ */ P(oh), i = /* @__PURE__ */ P(() => H(r).nodes), a = /* @__PURE__ */ P(() => H(r).edges), o = /* @__PURE__ */ P(() => H(r).nodeLookup), s = /* @__PURE__ */ P(() => {
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
				let n = FD(e, t, s, c);
				n && r.push(n);
			}
		}
		else {
			let e = [];
			MD(e, t, H(a));
			for (let t of H(i)) if (e.includes(t.id)) {
				let e = FD(t, t.parentId === n.current.id, s, c);
				e && r.push(e);
			}
		}
		return r;
	});
	return { get current() {
		return H(s);
	} };
}, LD = /* @__PURE__ */ U("<div class=\"input-more-item svelte-jmeys3\">数据类型： <!></div>"), RD = /* @__PURE__ */ U("<div class=\"input-more-item svelte-jmeys3\">数据选项： <!></div>"), zD = /* @__PURE__ */ U("<div class=\"input-more-item svelte-jmeys3\">输入方式： <!></div> <label class=\"input-more-item svelte-jmeys3\" style=\"display: flex;flex-direction: row;align-items: center\">是否必填: <input type=\"checkbox\"/></label> <!> <div class=\"input-more-item svelte-jmeys3\">数据标题： <!></div> <div class=\"input-more-item svelte-jmeys3\">数据描述： <!></div> <div class=\"input-more-item svelte-jmeys3\">占位符： <!></div>", 1), BD = /* @__PURE__ */ U("<div class=\"input-more-setting svelte-jmeys3\"><div class=\"input-more-item svelte-jmeys3\">数据来源： <!></div> <!> <!> <div class=\"input-more-item svelte-jmeys3\">默认值： <!></div> <div class=\"input-more-item svelte-jmeys3\"><!></div></div>"), VD = /* @__PURE__ */ U("<div class=\"input-item svelte-jmeys3\"><!></div> <div class=\"input-item svelte-jmeys3\"><!></div> <div class=\"input-item svelte-jmeys3\"><!></div>", 1), HD = {
	hash: "svelte-jmeys3",
	code: ".input-item.svelte-jmeys3 {display:flex;align-items:center;}.input-more-setting.svelte-jmeys3 {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--tf-background);border:1px solid var(--tf-border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-jmeys3 .input-more-item:where(.svelte-jmeys3) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--tf-muted-foreground);}"
};
function UD(e, t) {
	M(t, !0), Gi(e, HD), wi(() => {
		H(l).refType || g({ value: "ref" });
	});
	let n = X(t, "parameter", 7), r = X(t, "index", 7), i = X(t, "dataKeyName", 7), a = X(t, "useChildrenOnly", 7), o = X(t, "showContentType", 7, !1), s = EE(), c = $g(s), l = /* @__PURE__ */ P(() => ({
		...n(),
		...(c?.current?.data?.[i()])[r()]
	})), u = /* @__PURE__ */ P(() => ["text", "other"].includes(H(l).contentType || "text") ? Wv : Gv), d = /* @__PURE__ */ P(() => H(l).contentType === "text" || !H(l).contentType), { updateNodeData: f } = Yh(), p = (e, t) => {
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
	}, x = ID(a()), S = DE().formRefTypeEnable ? Hv : Hv.filter((e) => e.value !== "form");
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
	}, w = VD(), T = z(w), E = R(T);
	{
		let e = /* @__PURE__ */ P(() => H(l).nameDisabled === !0);
		sE(E, {
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
		sE(e, {
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
		sE(e, {
			placeholder: "在执行期间，由用户输入",
			disabled: !0
		});
	};
	J(ee, (e) => {
		H(l).refType === "fixed" ? e(te) : H(l).refType === "ref" ? e(ne, 1) : H(l).refType === "form" && e(re, 2);
	}), A(D);
	var ie = B(D, 2);
	return Na(VE(R(ie), {
		placement: "bottom",
		floating: (e) => {
			var t = BD(), n = R(t), r = B(R(n));
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
				var t = LD(), n = B(R(t));
				{
					let e = /* @__PURE__ */ P(() => H(l).contentType ? [H(l).contentType] : []);
					RE(n, {
						get items() {
							return Uv;
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
				var t = zD(), n = z(t), r = B(R(n));
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
				_a(a), A(i);
				var o = B(i, 2), s = (e) => {
					var t = RD(), n = B(R(t));
					{
						let e = /* @__PURE__ */ P(() => H(l).enums?.join("\n"));
						uE(n, {
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
				uE(B(R(c)), {
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
				uE(B(R(f)), {
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
				uE(B(R(h)), {
					rows: 2,
					placeholder: "请输入占位符内容",
					style: "width: 100%;",
					onchange: (e) => {
						m("formPlaceholder", e);
					},
					get value() {
						return H(l).formPlaceholder;
					}
				}), A(h), V(() => ya(a, !!H(l).required)), Yr("change", a, (e) => {
					let t = e.target.checked;
					p("required", t);
				}), K(e, t);
			};
			J(s, (e) => {
				H(l).refType === "form" && e(c);
			});
			var f = B(s, 2);
			uE(B(R(f)), {
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
			ay(R(h), {
				variant: "destructive",
				onclick: b,
				children: (e, t) => {
					j(), K(e, ii("删除"));
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
Xr(["change"]), Z(UD, {
	parameter: {},
	index: {},
	dataKeyName: {},
	useChildrenOnly: {},
	showContentType: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/components/core/RefParameterList.svelte
var WD = /* @__PURE__ */ U("<div class=\"input-header svelte-32f1pk\">参数名称</div> <div class=\"input-header svelte-32f1pk\">参数值</div> <div class=\"input-header svelte-32f1pk\"></div>", 1), GD = /* @__PURE__ */ U("<div class=\"none-params svelte-32f1pk\"> </div>"), KD = /* @__PURE__ */ U("<div class=\"input-container svelte-32f1pk\"><!> <!></div>"), qD = {
	hash: "svelte-32f1pk",
	code: ".input-container.svelte-32f1pk {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-32f1pk .none-params:where(.svelte-32f1pk) {font-size:12px;background:var(--tf-secondary);height:20px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;\n  /* 从第一列开始到最后一列结束 */}.input-container.svelte-32f1pk .input-header:where(.svelte-32f1pk) {font-size:12px;color:var(--tf-muted-foreground);}"
};
function JD(e, t) {
	M(t, !0), Gi(e, qD);
	let n = X(t, "noneParameterText", 7, "无输入参数"), r = X(t, "dataKeyName", 7, "parameters"), i = X(t, "useChildrenOnly", 7), a = X(t, "showContentType", 7, !1), o = $g(EE()), s = /* @__PURE__ */ P(() => [...o?.current?.data?.[r()] || []]);
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
	}, l = KD(), u = R(l), d = (e) => {
		var t = WD();
		j(4), K(e, t);
	};
	return J(u, (e) => {
		H(s).length !== 0 && e(d);
	}), Fi(B(u, 2), 19, () => H(s), (e) => e.id, (e, t, n) => {
		UD(e, {
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
		var t = GD(), r = R(t, !0);
		A(t), V(() => gi(r, n())), K(e, t);
	}), A(l), K(e, l), N(c);
}
Z(JD, {
	noneParameterText: {},
	dataKeyName: {},
	useChildrenOnly: {},
	showContentType: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/components/nodes/EndNode.svelte
var YD = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host",
	"id",
	"data"
]), XD = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z\"></path></svg>"), ZD = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z\"></path></svg>"), QD = /* @__PURE__ */ U("<div class=\"heading svelte-1fiuxu3\"><!> <!></div> <!>", 1), $D = {
	hash: "svelte-1fiuxu3",
	code: ".heading.svelte-1fiuxu3 {display:flex;margin-bottom:10px;}"
};
function eO(e, t) {
	M(t, !0), Gi(e, $D);
	let n = X(t, "id", 7), r = X(t, "data", 7), i = /* @__PURE__ */ La(t, YD);
	TE(n());
	let { addParameter: a } = TD();
	return fD(e, Va({
		get id() {
			return n();
		},
		get data() {
			return r();
		}
	}, () => i, {
		allowExecute: !1,
		showSourceHandle: !1,
		icon: (e) => {
			K(e, XD());
		},
		children: (e, t) => {
			var r = QD(), i = z(r), o = R(i);
			HE(o, {
				level: 3,
				children: (e, t) => {
					j(), K(e, ii("输出参数"));
				},
				$$slots: { default: !0 }
			}), ay(B(o, 2), {
				size: "icon-xs",
				class: "input-btn-more",
				style: "margin-left: auto",
				onclick: () => {
					a(n(), "outputDefs", { name: "output" });
				},
				children: (e, t) => {
					K(e, ZD());
				},
				$$slots: { default: !0 }
			}), A(i), JD(B(i, 2), {
				noneParameterText: "无输出参数",
				dataKeyName: "outputDefs",
				showContentType: !0
			}), K(e, r);
		},
		$$slots: {
			icon: !0,
			default: !0
		}
	})), N({
		get id() {
			return n();
		},
		set id(e) {
			n(e), F();
		},
		get data() {
			return r();
		},
		set data(e) {
			r(e), F();
		}
	});
}
Z(eO, {
	id: {},
	data: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/components/core/OutputDefItem.svelte
var tO = /* @__PURE__ */ W("<svg style=\"transform: scaleY(-1)\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z\"></path></svg>"), nO = /* @__PURE__ */ U("<div class=\"input-more-item svelte-hwmib9\"><!></div>"), rO = /* @__PURE__ */ U("<div class=\"input-more-setting svelte-hwmib9\"><div class=\"input-more-item svelte-hwmib9\">默认值： <!></div> <div class=\"input-more-item svelte-hwmib9\">参数描述： <!></div> <!></div>"), iO = /* @__PURE__ */ U("<div class=\"input-item svelte-hwmib9\"><!></div> <div class=\"input-item svelte-hwmib9\"><!> <!></div> <div class=\"input-item svelte-hwmib9\"><!></div>", 1), aO = {
	hash: "svelte-hwmib9",
	code: ".input-item.svelte-hwmib9 {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-hwmib9 {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--tf-background);border:1px solid var(--tf-border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-hwmib9 .input-more-item:where(.svelte-hwmib9) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--tf-muted-foreground);}"
};
function oO(e, t) {
	M(t, !0), Gi(e, aO);
	let n = X(t, "parameter", 7), r = X(t, "position", 7), i = X(t, "dataKeyName", 7), a = X(t, "placeholder", 7, "请输入参数值"), o = EE(), s = $g(o), c = /* @__PURE__ */ P(() => {
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
	}), { updateNodeData: l } = Yh(), u = (e, t) => {
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
			return { [i()]: [...QE(a)] };
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
			return { [i()]: [...QE(t)] };
		}), p?.hide();
	}, h = () => {
		l(o, (e) => {
			let t = e.data?.[i()];
			if (t && r().length > 0) {
				let e = t;
				for (let t = 0; t < r().length; t++) {
					let n = r()[t];
					t == r().length - 1 ? e[n].children ? e[n].children.push({
						id: ZE(),
						name: "newParam",
						dataType: "String"
					}) : e[n].children = [{
						id: ZE(),
						name: "newParam",
						dataType: "String"
					}] : e = e[n].children;
				}
			}
			return { [i()]: [...QE(t)] };
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
	}, _ = iO(), v = z(_), y = R(v);
	{
		let e = /* @__PURE__ */ P(() => (r().length - 1) * 12), t = /* @__PURE__ */ P(() => H(c).nameDisabled === !0);
		sE(y, {
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
		let e = /* @__PURE__ */ P(() => H(c).dataTypeItems || Vv), t = /* @__PURE__ */ P(() => H(c).dataType ? [H(c).dataType] : []), n = /* @__PURE__ */ P(() => H(c).dataTypeDisabled === !0);
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
		ay(e, {
			size: "icon-xs",
			class: "input-btn-more",
			style: "margin-left: auto",
			onclick: h,
			children: (e, t) => {
				K(e, tO());
			},
			$$slots: { default: !0 }
		});
	};
	J(S, (e) => {
		(H(c).dataType === "Object" || H(c).dataType === "Array") && H(c).addChildDisabled !== !0 && e(C);
	}), A(b);
	var w = B(b, 2);
	return Na(VE(R(w), {
		placement: "bottom",
		floating: (e) => {
			var t = rO(), n = R(t), r = B(R(n));
			{
				let e = /* @__PURE__ */ P(() => H(c).defaultValue || "");
				uE(r, {
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
				uE(a, {
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
				var t = nO();
				ay(R(t), {
					variant: "destructive",
					onclick: m,
					children: (e, t) => {
						j(), K(e, ii("删除"));
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
Z(oO, {
	parameter: {},
	position: {},
	dataKeyName: {},
	placeholder: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/components/core/OutputDefList.svelte
var sO = /* @__PURE__ */ U("<!> <!>", 1), cO = /* @__PURE__ */ U("<div class=\"none-params svelte-1oz5kx0\"> </div>"), lO = /* @__PURE__ */ U("<div class=\"input-header svelte-1oz5kx0\">参数名称</div> <div class=\"input-header svelte-1oz5kx0\">参数类型</div> <div class=\"input-header svelte-1oz5kx0\"></div>", 1), uO = /* @__PURE__ */ U("<div class=\"input-container svelte-1oz5kx0\"><!> <!></div>"), dO = {
	hash: "svelte-1oz5kx0",
	code: ".input-container.svelte-1oz5kx0 {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1oz5kx0 .none-params:where(.svelte-1oz5kx0) {font-size:12px;background:var(--tf-secondary);height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;\n  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1oz5kx0 .input-header:where(.svelte-1oz5kx0) {font-size:12px;color:var(--tf-muted-foreground);}"
};
function fO(e, t) {
	M(t, !0), Gi(e, dO);
	let n = (e, t = y, o = y) => {
		var s = G();
		Fi(z(s), 19, t, (e) => `${e.id}_${e.children ? e.children.length : 0}`, (e, t, r) => {
			var s = sO(), c = z(s);
			{
				let e = /* @__PURE__ */ P(() => [...o(), H(r)]);
				oO(c, {
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
				var t = cO(), n = R(t, !0);
				A(t), V(() => gi(n, r())), K(e, t);
			};
			J(n, (e) => {
				o().length === 0 && e(i);
			}), K(e, t);
		}), K(e, s);
	}, r = X(t, "noneParameterText", 7, "无输出参数"), i = X(t, "dataKeyName", 7, "outputDefs"), a = X(t, "placeholder", 7, "请输入参数"), o = $g(EE()), s = /* @__PURE__ */ P(() => [...o?.current?.data?.[i()] || []]);
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
	}, l = uO(), u = R(l), d = (e) => {
		var t = lO();
		j(4), K(e, t);
	};
	return J(u, (e) => {
		H(s).length !== 0 && e(d);
	}), n(B(u, 2), () => H(s) || [], () => []), A(l), K(e, l), N(c);
}
Z(fO, {
	noneParameterText: {},
	dataKeyName: {},
	placeholder: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/components/nodes/LLMNode.svelte
var pO = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host",
	"id",
	"data"
]), mO = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z\"></path></svg>"), hO = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z\"></path></svg>"), gO = /* @__PURE__ */ U("<div class=\"llm-setting svelte-j81vcl\"><div class=\"setting-title svelte-j81vcl\">采样参数</div> <div class=\"setting-item svelte-j81vcl\"><div class=\"slider-container svelte-j81vcl\"><span class=\"svelte-j81vcl\"> </span> <input class=\"nodrag svelte-j81vcl\" type=\"range\" min=\"0\" max=\"1\" step=\"0.1\"/></div></div> <div class=\"setting-item svelte-j81vcl\"><div class=\"slider-container svelte-j81vcl\"><span class=\"svelte-j81vcl\"> </span> <input class=\"nodrag svelte-j81vcl\" type=\"range\" min=\"0\" max=\"1\" step=\"0.1\"/></div></div> <div class=\"setting-item svelte-j81vcl\"><div class=\"slider-container svelte-j81vcl\"><span class=\"svelte-j81vcl\"> </span> <input class=\"nodrag svelte-j81vcl\" type=\"range\" min=\"0\" max=\"100\" step=\"1\"/></div></div></div>"), _O = /* @__PURE__ */ U("<div class=\"setting-title svelte-j81vcl\">JSON Schema</div> <div class=\"setting-item svelte-j81vcl\"><!></div>", 1), vO = /* @__PURE__ */ U("<div class=\"heading svelte-j81vcl\"><!> <!></div> <!> <div class=\"heading svelte-j81vcl\" style=\"padding-top: 10px\"><!> <!></div> <!> <!> <div class=\"setting-title svelte-j81vcl\">模型</div> <div class=\"setting-item svelte-j81vcl\"><!> <!></div> <div class=\"setting-title svelte-j81vcl\">系统提示词</div> <div class=\"setting-item svelte-j81vcl\"><!></div> <div class=\"setting-title svelte-j81vcl\">用户提示词</div> <div class=\"setting-item svelte-j81vcl\"><!></div> <!> <div class=\"heading svelte-j81vcl\"><!> <!></div> <!>", 1), yO = {
	hash: "svelte-j81vcl",
	code: ".heading.svelte-j81vcl {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-j81vcl {font-size:12px;color:var(--tf-secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-j81vcl {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}\n\n    /* 新增样式 */.slider-container.svelte-j81vcl {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-j81vcl span:where(.svelte-j81vcl) {font-size:12px;color:var(--tf-muted-foreground);display:flex;justify-content:space-between;align-items:center;}.llm-setting.svelte-j81vcl {width:200px;background:var(--tf-background);padding:10px;border-radius:5px;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);border:1px solid var(--tf-border);}input[type='range'].svelte-j81vcl {width:100%;height:4px;background:var(--tf-muted);border-radius:2px;outline:none;-webkit-appearance:none;}input[type='range'].svelte-j81vcl::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:var(--tf-primary);border-radius:50%;cursor:pointer;}"
};
function bO(e, t) {
	M(t, !0), Gi(e, yO);
	let n = X(t, "id", 7), r = X(t, "data", 7), i = /* @__PURE__ */ La(t, pO);
	TE(n());
	let { addParameter: a } = TD(), o = DE(), s = /* @__PURE__ */ I(Cn([]));
	wi(async () => {
		let e = await o.provider?.llm?.();
		H(s).push(...e || []);
	});
	let { updateNodeData: c } = Yh(), l = (e) => {
		c(n(), () => ({ outType: e })), e === "text" ? c(n(), { outputDefs: [{
			name: "output",
			dataType: "String",
			dataTypeDisabled: !0,
			deleteDisabled: !0
		}] }) : c(n(), { outputDefs: [{
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
	return Un(() => {
		r().outType || l("text");
	}), fD(e, Va({
		get id() {
			return n();
		},
		get data() {
			return r();
		}
	}, () => i, {
		icon: (e) => {
			K(e, mO());
		},
		children: (e, t) => {
			var i = vO(), o = z(i), u = R(o);
			HE(u, {
				level: 3,
				children: (e, t) => {
					j(), K(e, ii("输入参数"));
				},
				$$slots: { default: !0 }
			}), ay(B(u, 2), {
				size: "icon-xs",
				class: "input-btn-more",
				style: "margin-left: auto",
				onclick: () => {
					a(n());
				},
				children: (e, t) => {
					K(e, hO());
				},
				$$slots: { default: !0 }
			}), A(o);
			var d = B(o, 2);
			JD(d, {});
			var f = B(d, 2), p = R(f);
			HE(p, {
				level: 3,
				children: (e, t) => {
					j(), K(e, ii("图片识别"));
				},
				$$slots: { default: !0 }
			}), ay(B(p, 2), {
				size: "icon-xs",
				class: "input-btn-more",
				style: "margin-left: auto",
				onclick: () => {
					a(n(), "images");
				},
				children: (e, t) => {
					K(e, hO());
				},
				$$slots: { default: !0 }
			}), A(f);
			var m = B(f, 2);
			JD(m, {
				dataKeyName: "images",
				noneParameterText: "无图片参数"
			});
			var h = B(m, 2);
			HE(h, {
				level: 3,
				mt: "10px",
				children: (e, t) => {
					j(), K(e, ii("模型设置"));
				},
				$$slots: { default: !0 }
			});
			var g = B(h, 4), _ = R(g);
			{
				let e = /* @__PURE__ */ P(() => r().llmId ? [r().llmId] : []);
				RE(_, {
					get items() {
						return H(s);
					},
					style: "width: 100%",
					placeholder: "请选择模型",
					onSelect: (e) => {
						let t = e.value;
						c(n(), () => ({ llmId: t }));
					},
					get value() {
						return H(e);
					}
				});
			}
			VE(B(_, 2), {
				placement: "bottom",
				floating: (e) => {
					var t = gO(), i = B(R(t), 2), a = R(i), o = R(a), s = R(o);
					A(o);
					var l = B(o, 2);
					_a(l), A(a), A(i);
					var u = B(i, 2), d = R(u), f = R(d), p = R(f);
					A(f);
					var m = B(f, 2);
					_a(m), A(d), A(u);
					var h = B(u, 2), g = R(h), _ = R(g), v = R(_);
					A(_);
					var y = B(_, 2);
					_a(y), A(g), A(h), A(t), V(() => {
						gi(s, `Temperature: ${r().temperature ?? .5 ?? ""}`), va(l, r().temperature ?? .5), gi(p, `Top P: ${r().topP ?? .9 ?? ""}`), va(m, r().topP ?? .9), gi(v, `Top K: ${r().topK ?? 50 ?? ""}`), va(y, r().topK ?? 50);
					}), Yr("input", l, (e) => c(n(), { temperature: parseFloat(e.currentTarget.value) })), Yr("input", m, (e) => c(n(), { topP: parseFloat(e.currentTarget.value) })), Yr("input", y, (e) => c(n(), { topK: parseInt(e.currentTarget.value) })), K(e, t);
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
				let e = /* @__PURE__ */ P(() => r().systemPrompt || "");
				uE(y, {
					rows: 5,
					placeholder: "请输入系统提示词",
					style: "width: 100%",
					get value() {
						return H(e);
					},
					oninput: (e) => {
						c(n(), { systemPrompt: e.currentTarget.value });
					}
				});
			}
			A(v);
			var b = B(v, 4), x = R(b);
			{
				let e = /* @__PURE__ */ P(() => r().userPrompt || "");
				uE(x, {
					rows: 5,
					placeholder: "请输入用户提示词",
					style: "width: 100%",
					get value() {
						return H(e);
					},
					oninput: (e) => {
						c(n(), { userPrompt: e.currentTarget.value });
					}
				});
			}
			A(b);
			var S = B(b, 2), C = (e) => {
				var t = _O(), i = B(z(t), 2), a = R(i);
				{
					let e = /* @__PURE__ */ P(() => r().jsonSchema || "");
					uE(a, {
						rows: 5,
						placeholder: "请输入 SON Schema",
						style: "width: 100%",
						get value() {
							return H(e);
						},
						oninput: (e) => {
							c(n(), { jsonSchema: e.currentTarget.value });
						}
					});
				}
				A(i), K(e, t);
			};
			J(S, (e) => {
				r().outType === "json" && e(C);
			});
			var w = B(S, 2), T = R(w);
			HE(T, {
				level: 3,
				children: (e, t) => {
					j(), K(e, ii("输出参数"));
				},
				$$slots: { default: !0 }
			});
			var E = B(T, 2);
			{
				let e = /* @__PURE__ */ P(() => r().outType ? [r().outType] : []);
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
			A(w), fO(B(w, 2), {}), K(e, i);
		},
		$$slots: {
			icon: !0,
			default: !0
		}
	})), N({
		get id() {
			return n();
		},
		set id(e) {
			n(e), F();
		},
		get data() {
			return r();
		},
		set data(e) {
			r(e), F();
		}
	});
}
Xr(["input"]), Z(bO, {
	id: {},
	data: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/components/nodes/CodeNode.svelte
var xO = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host",
	"id",
	"data"
]), SO = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z\"></path></svg>"), CO = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z\"></path></svg>"), wO = /* @__PURE__ */ U("<div class=\"heading svelte-1wcsayx\"><!> <!></div> <!> <!> <div class=\"setting-title svelte-1wcsayx\">执行引擎</div> <div class=\"setting-item svelte-1wcsayx\"><!></div> <div class=\"setting-title svelte-1wcsayx\">执行代码</div> <div class=\"setting-item svelte-1wcsayx\"><!></div> <div class=\"heading svelte-1wcsayx\"><!> <!></div> <!>", 1), TO = {
	hash: "svelte-1wcsayx",
	code: ".heading.svelte-1wcsayx {display:flex;margin-bottom:10px;}.setting-title.svelte-1wcsayx {font-size:12px;color:var(--tf-secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1wcsayx {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function EO(e, t) {
	M(t, !0), Gi(e, TO);
	let n = X(t, "id", 7), r = X(t, "data", 7), i = /* @__PURE__ */ La(t, xO);
	wi(() => {
		r().engine || o(n(), () => ({ engine: "qlexpress" }));
	}), TE(n());
	let { addParameter: a } = TD(), { updateNodeData: o } = Yh(), s = [
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
	return fD(e, Va({
		get id() {
			return n();
		},
		get data() {
			return r();
		}
	}, () => i, {
		icon: (e) => {
			K(e, SO());
		},
		children: (e, t) => {
			var i = wO(), c = z(i), l = R(c);
			HE(l, {
				level: 3,
				children: (e, t) => {
					j(), K(e, ii("输入参数"));
				},
				$$slots: { default: !0 }
			}), ay(B(l, 2), {
				size: "icon-xs",
				class: "input-btn-more",
				style: "margin-left: auto",
				onclick: () => {
					a(n());
				},
				children: (e, t) => {
					K(e, CO());
				},
				$$slots: { default: !0 }
			}), A(c);
			var u = B(c, 2);
			JD(u, {});
			var d = B(u, 2);
			HE(d, {
				level: 3,
				mt: "10px",
				children: (e, t) => {
					j(), K(e, ii("代码"));
				},
				$$slots: { default: !0 }
			});
			var f = B(d, 4), p = R(f);
			{
				let e = /* @__PURE__ */ P(() => r().engine ? [r().engine] : ["qlexpress"]);
				RE(p, {
					get items() {
						return s;
					},
					style: "width: 100%",
					placeholder: "请选择执行引擎",
					onSelect: (e) => {
						let t = e.value;
						o(n(), () => ({ engine: t }));
					},
					get value() {
						return H(e);
					}
				});
			}
			A(f);
			var m = B(f, 4), h = R(m);
			{
				let e = /* @__PURE__ */ P(() => r().code || "");
				uE(h, {
					rows: 10,
					placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result['key'] = value 或者 _result.key = value",
					style: "width: 100%",
					onchange: (e) => {
						o(n(), () => ({ code: e.target.value }));
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
					j(), K(e, ii("输出参数"));
				},
				$$slots: { default: !0 }
			}), ay(B(_, 2), {
				size: "icon-xs",
				class: "input-btn-more",
				style: "margin-left: auto",
				onclick: () => {
					a(n(), "outputDefs");
				},
				children: (e, t) => {
					K(e, CO());
				},
				$$slots: { default: !0 }
			}), A(g), fO(B(g, 2), {}), K(e, i);
		},
		$$slots: {
			icon: !0,
			default: !0
		}
	})), N({
		get id() {
			return n();
		},
		set id(e) {
			n(e), F();
		},
		get data() {
			return r();
		},
		set data(e) {
			r(e), F();
		}
	});
}
Z(EO, {
	id: {},
	data: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/components/nodes/TemplateNode.svelte
var DO = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host",
	"id",
	"data"
]), OO = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z\"></path></svg>"), kO = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z\"></path></svg>"), AO = /* @__PURE__ */ U("<div class=\"heading svelte-1lcrzpc\"><!> <!></div> <!> <!> <div class=\"setting-item svelte-1lcrzpc\"><!></div> <div class=\"heading svelte-1lcrzpc\"><!></div> <!>", 1), jO = {
	hash: "svelte-1lcrzpc",
	code: ".heading.svelte-1lcrzpc {display:flex;margin-bottom:10px;}.setting-item.svelte-1lcrzpc {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function MO(e, t) {
	M(t, !0), Gi(e, jO);
	let n = X(t, "id", 7), r = X(t, "data", 7), i = /* @__PURE__ */ La(t, DO);
	TE(n());
	let { addParameter: a } = TD(), { updateNodeData: o } = Yh();
	return Un(() => {
		(!r().outputDefs || r().outputDefs.length === 0) && a(n(), "outputDefs", {
			name: "output",
			dataType: "String",
			dataTypeDisabled: !0,
			deleteDisabled: !0
		});
	}), fD(e, Va({
		get id() {
			return n();
		},
		get data() {
			return r();
		}
	}, () => i, {
		icon: (e) => {
			K(e, OO());
		},
		children: (e, t) => {
			var i = AO(), s = z(i), c = R(s);
			HE(c, {
				level: 3,
				children: (e, t) => {
					j(), K(e, ii("输入参数"));
				},
				$$slots: { default: !0 }
			}), ay(B(c, 2), {
				size: "icon-xs",
				class: "input-btn-more",
				style: "margin-left: auto",
				onclick: () => {
					a(n());
				},
				children: (e, t) => {
					K(e, kO());
				},
				$$slots: { default: !0 }
			}), A(s);
			var l = B(s, 2);
			JD(l, {});
			var u = B(l, 2);
			HE(u, {
				level: 3,
				mt: "10px",
				mb: "10px",
				children: (e, t) => {
					j(), K(e, ii("模板内容"));
				},
				$$slots: { default: !0 }
			});
			var d = B(u, 2), f = R(d);
			{
				let e = /* @__PURE__ */ P(() => r().template || "");
				uE(f, {
					rows: 10,
					placeholder: "请输入模板内容",
					style: "width: 100%",
					onchange: (e) => {
						o(n(), () => ({ template: e.target.value }));
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
					j(), K(e, ii("输出参数"));
				},
				$$slots: { default: !0 }
			}), A(p), fO(B(p, 2), {}), K(e, i);
		},
		$$slots: {
			icon: !0,
			default: !0
		}
	})), N({
		get id() {
			return n();
		},
		set id(e) {
			n(e), F();
		},
		get data() {
			return r();
		},
		set data(e) {
			r(e), F();
		}
	});
}
Z(MO, {
	id: {},
	data: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/components/nodes/HttpNode.svelte
var NO = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host",
	"id",
	"data"
]), PO = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z\"></path></svg>"), FO = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z\"></path></svg>"), IO = /* @__PURE__ */ U("<!> <div class=\"radio-group svelte-19uflw6\"><label class=\"svelte-19uflw6\"><!>none</label> <label class=\"svelte-19uflw6\"><!>form-data</label> <label class=\"svelte-19uflw6\"><!>x-www-form-urlencoded</label> <label class=\"svelte-19uflw6\"><!>json</label> <label class=\"svelte-19uflw6\"><!>raw</label></div>", 1), LO = /* @__PURE__ */ U("<div class=\"heading svelte-19uflw6\" style=\"padding-top: 10px\"><!> <!></div> <!>", 1), RO = /* @__PURE__ */ U("<div style=\"width: 100%\"><!></div>"), zO = /* @__PURE__ */ U("<div class=\"heading svelte-19uflw6\"><!> <!></div> <!> <!> <div style=\"display: flex;gap: 2px;width: 100%;padding: 10px 0\"><div><!></div> <div style=\"width: 100%\"><!></div></div> <div class=\"heading svelte-19uflw6\"><!> <!></div> <!> <!> <!> <!> <!> <!> <div class=\"heading svelte-19uflw6\"><!> <!></div> <!>", 1), BO = {
	hash: "svelte-19uflw6",
	code: ".heading.svelte-19uflw6 {display:flex;margin-bottom:10px;}.radio-group.svelte-19uflw6 {display:flex;margin:10px 0;flex-wrap:wrap;gap:8px;}.radio-group.svelte-19uflw6 label:where(.svelte-19uflw6) {display:flex;font-size:14px;box-sizing:border-box;gap:4px;}"
};
function VO(e, t) {
	M(t, !0), Gi(e, BO);
	let n = X(t, "id", 7), r = X(t, "data", 7), i = /* @__PURE__ */ La(t, NO);
	wi(() => {
		r().method || s(n(), () => ({ method: "get" })), r().outputDefs || o(n(), "outputDefs", [
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
	let a = [
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
	];
	TE(n());
	let { addParameter: o } = TD(), { updateNodeData: s } = Yh();
	return fD(e, Va({
		get id() {
			return n();
		},
		get data() {
			return r();
		}
	}, () => i, {
		icon: (e) => {
			K(e, PO());
		},
		children: (e, t) => {
			var i = zO(), c = z(i), l = R(c);
			HE(l, {
				level: 3,
				children: (e, t) => {
					j(), K(e, ii("输入参数"));
				},
				$$slots: { default: !0 }
			}), ay(B(l, 2), {
				size: "icon-xs",
				class: "input-btn-more",
				style: "margin-left: auto",
				onclick: () => {
					o(n());
				},
				children: (e, t) => {
					K(e, FO());
				},
				$$slots: { default: !0 }
			}), A(c);
			var u = B(c, 2);
			JD(u, {});
			var d = B(u, 2);
			HE(d, {
				level: 3,
				mt: "10px",
				children: (e, t) => {
					j(), K(e, ii("URL 地址"));
				},
				$$slots: { default: !0 }
			});
			var f = B(d, 2), p = R(f), m = R(p);
			{
				let e = /* @__PURE__ */ P(() => r().method ? [r().method] : ["get"]);
				RE(m, {
					get items() {
						return a;
					},
					style: "width: 100%",
					placeholder: "请选择请求方式",
					onSelect: (e) => {
						let t = e.value;
						s(n(), () => ({ method: t }));
					},
					get value() {
						return H(e);
					}
				});
			}
			A(p);
			var h = B(p, 2), g = R(h);
			{
				let e = /* @__PURE__ */ P(() => r().url || "");
				sE(g, {
					placeholder: "请输入url",
					style: "width: 100%",
					onchange: (e) => {
						s(n(), () => ({ url: e.target.value }));
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
					j(), K(e, ii("Http 头信息"));
				},
				$$slots: { default: !0 }
			}), ay(B(v, 2), {
				size: "icon-xs",
				class: "input-btn-more",
				style: "margin-left: auto",
				onclick: () => {
					o(n(), "headers");
				},
				children: (e, t) => {
					K(e, FO());
				},
				$$slots: { default: !0 }
			}), A(_);
			var y = B(_, 2);
			JD(y, { dataKeyName: "headers" });
			var b = B(y, 2), x = (e) => {
				var t = IO(), i = z(t);
				HE(i, {
					level: 3,
					mt: "10px",
					children: (e, t) => {
						j(), K(e, ii("Body"));
					},
					$$slots: { default: !0 }
				});
				var a = B(i, 2), o = R(a), c = R(o);
				{
					let e = /* @__PURE__ */ P(() => !r().bodyType || r().bodyType === "");
					sE(c, {
						type: "radio",
						value: "",
						get checked() {
							return H(e);
						},
						onchange: (e) => {
							e.target?.checked && s(n(), { bodyType: "" });
						}
					});
				}
				j(), A(o);
				var l = B(o, 2), u = R(l);
				{
					let e = /* @__PURE__ */ P(() => r().bodyType === "form-data");
					sE(u, {
						type: "radio",
						value: "form-data",
						get checked() {
							return H(e);
						},
						onchange: (e) => {
							e.target?.checked && s(n(), { bodyType: "form-data" });
						}
					});
				}
				j(), A(l);
				var d = B(l, 2), f = R(d);
				{
					let e = /* @__PURE__ */ P(() => r().bodyType === "x-www-form-urlencoded");
					sE(f, {
						type: "radio",
						value: "x-www-form-urlencoded",
						get checked() {
							return H(e);
						},
						onchange: (e) => {
							e.target?.checked && s(n(), { bodyType: "x-www-form-urlencoded" });
						}
					});
				}
				j(), A(d);
				var p = B(d, 2), m = R(p);
				{
					let e = /* @__PURE__ */ P(() => r().bodyType === "json");
					sE(m, {
						type: "radio",
						value: "json",
						get checked() {
							return H(e);
						},
						onchange: (e) => {
							e.target?.checked && s(n(), { bodyType: "json" });
						}
					});
				}
				j(), A(p);
				var h = B(p, 2), g = R(h);
				{
					let e = /* @__PURE__ */ P(() => r().bodyType === "raw");
					sE(g, {
						type: "radio",
						value: "raw",
						get checked() {
							return H(e);
						},
						onchange: (e) => {
							e.target?.checked && s(n(), { bodyType: "raw" });
						}
					});
				}
				j(), A(h), A(a), K(e, t);
			};
			J(b, (e) => {
				(r().method === "post" || r().method === "put" || r().method === "delete" || r().method === "patch") && e(x);
			});
			var S = B(b, 2), C = (e) => {
				var t = LO(), r = z(t), i = R(r);
				HE(i, {
					level: 3,
					children: (e, t) => {
						j(), K(e, ii("参数"));
					},
					$$slots: { default: !0 }
				}), ay(B(i, 2), {
					size: "icon-xs",
					class: "input-btn-more",
					style: "margin-left: auto",
					onclick: () => {
						o(n(), "formData");
					},
					children: (e, t) => {
						K(e, FO());
					},
					$$slots: { default: !0 }
				}), A(r), JD(B(r, 2), { dataKeyName: "formData" }), K(e, t);
			};
			J(S, (e) => {
				r().bodyType === "form-data" && (r().method === "post" || r().method === "put" || r().method === "delete" || r().method === "patch") && e(C);
			});
			var w = B(S, 2), T = (e) => {
				var t = LO(), r = z(t), i = R(r);
				HE(i, {
					level: 3,
					children: (e, t) => {
						j(), K(e, ii("Body 参数"));
					},
					$$slots: { default: !0 }
				}), ay(B(i, 2), {
					size: "icon-xs",
					class: "input-btn-more",
					style: "margin-left: auto",
					onclick: () => {
						o(n(), "formUrlencoded");
					},
					children: (e, t) => {
						K(e, FO());
					},
					$$slots: { default: !0 }
				}), A(r), JD(B(r, 2), { dataKeyName: "formUrlencoded" }), K(e, t);
			};
			J(w, (e) => {
				r().bodyType === "x-www-form-urlencoded" && (r().method === "post" || r().method === "put" || r().method === "delete" || r().method === "patch") && e(T);
			});
			var E = B(w, 2), D = (e) => {
				var t = RO();
				uE(R(t), {
					rows: 5,
					style: "width: 100%",
					placeholder: "请输入 json 信息",
					get value() {
						return r().bodyJson;
					},
					oninput: (e) => {
						s(n(), { bodyJson: e.target.value });
					}
				}), A(t), K(e, t);
			};
			J(E, (e) => {
				r().bodyType === "json" && (r().method === "post" || r().method === "put" || r().method === "delete" || r().method === "patch") && e(D);
			});
			var ee = B(E, 2), te = (e) => {
				var t = RO();
				uE(R(t), {
					rows: 5,
					style: "width: 100%",
					placeholder: "请输入请求信息",
					get value() {
						return r().bodyRaw;
					},
					oninput: (e) => {
						s(n(), { bodyRaw: e.target.value });
					}
				}), A(t), K(e, t);
			};
			J(ee, (e) => {
				r().bodyType === "raw" && (r().method === "post" || r().method === "put" || r().method === "delete" || r().method === "patch") && e(te);
			});
			var ne = B(ee, 2), re = R(ne);
			HE(re, {
				level: 3,
				mt: "10px",
				children: (e, t) => {
					j(), K(e, ii("输出参数"));
				},
				$$slots: { default: !0 }
			}), ay(B(re, 2), {
				size: "icon-xs",
				class: "input-btn-more",
				style: "margin-left: auto",
				onclick: () => {
					o(n(), "outputDefs");
				},
				children: (e, t) => {
					K(e, FO());
				},
				$$slots: { default: !0 }
			}), A(ne), fO(B(ne, 2), {}), K(e, i);
		},
		$$slots: {
			icon: !0,
			default: !0
		}
	})), N({
		get id() {
			return n();
		},
		set id(e) {
			n(e), F();
		},
		get data() {
			return r();
		},
		set data(e) {
			r(e), F();
		}
	});
}
Z(VO, {
	id: {},
	data: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/components/nodes/KnowledgeNode.svelte
var HO = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host",
	"id",
	"data"
]), UO = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z\"></path></svg>"), WO = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z\"></path></svg>"), GO = /* @__PURE__ */ U("<div class=\"heading svelte-ddi5i\"><!> <!></div> <!> <!> <div class=\"setting-title svelte-ddi5i\">知识库</div> <div class=\"setting-item svelte-ddi5i\"><!></div> <div class=\"setting-title svelte-ddi5i\">关键字</div> <div class=\"setting-item svelte-ddi5i\"><!></div> <div class=\"setting-title svelte-ddi5i\">获取数据量</div> <div class=\"setting-item svelte-ddi5i\"><!></div> <div class=\"heading svelte-ddi5i\"><!></div> <!>", 1), KO = {
	hash: "svelte-ddi5i",
	code: ".heading.svelte-ddi5i {display:flex;margin-bottom:10px;}.setting-title.svelte-ddi5i {font-size:12px;color:var(--tf-secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-ddi5i {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function qO(e, t) {
	M(t, !0), Gi(e, KO);
	let n = X(t, "id", 7), r = X(t, "data", 7), i = /* @__PURE__ */ La(t, HO);
	TE(n());
	let { addParameter: a } = TD(), o = DE(), s = /* @__PURE__ */ I(Cn([]));
	wi(async () => {
		let e = await o.provider?.knowledge?.();
		H(s).push(...e || []);
	});
	let { updateNodeData: c } = Yh();
	return Un(() => {
		(!r().outputDefs || r().outputDefs.length === 0) && a(n(), "outputDefs", {
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
	}), fD(e, Va({
		get id() {
			return n();
		},
		get data() {
			return r();
		}
	}, () => i, {
		icon: (e) => {
			K(e, UO());
		},
		children: (e, t) => {
			var i = GO(), o = z(i), l = R(o);
			HE(l, {
				level: 3,
				children: (e, t) => {
					j(), K(e, ii("输入参数"));
				},
				$$slots: { default: !0 }
			}), ay(B(l, 2), {
				size: "icon-xs",
				class: "input-btn-more",
				style: "margin-left: auto",
				onclick: () => {
					a(n());
				},
				children: (e, t) => {
					K(e, WO());
				},
				$$slots: { default: !0 }
			}), A(o);
			var u = B(o, 2);
			JD(u, {});
			var d = B(u, 2);
			HE(d, {
				level: 3,
				mt: "10px",
				children: (e, t) => {
					j(), K(e, ii("知识库设置"));
				},
				$$slots: { default: !0 }
			});
			var f = B(d, 4), p = R(f);
			{
				let e = /* @__PURE__ */ P(() => r().knowledgeId ? [r().knowledgeId] : []);
				RE(p, {
					get items() {
						return H(s);
					},
					style: "width: 100%",
					placeholder: "请选择知识库",
					onSelect: (e) => {
						let t = e.value;
						c(n(), () => ({ knowledgeId: t }));
					},
					get value() {
						return H(e);
					}
				});
			}
			A(f);
			var m = B(f, 4);
			sE(R(m), {
				placeholder: "请输入关键字",
				style: "width: 100%",
				get value() {
					return r().keyword;
				},
				onchange: (e) => {
					let t = e.currentTarget.value;
					c(n(), () => ({ keyword: t }));
				}
			}), A(m);
			var h = B(m, 4), g = R(h);
			{
				let e = /* @__PURE__ */ P(() => r().limit || "");
				sE(g, {
					placeholder: "搜索的数据条数",
					style: "width: 100%",
					onchange: (e) => {
						let t = e.currentTarget.value;
						c(n(), () => ({ limit: t }));
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
					j(), K(e, ii("输出参数"));
				},
				$$slots: { default: !0 }
			}), A(_), fO(B(_, 2), {}), K(e, i);
		},
		$$slots: {
			icon: !0,
			default: !0
		}
	})), N({
		get id() {
			return n();
		},
		set id(e) {
			n(e), F();
		},
		get data() {
			return r();
		},
		set data(e) {
			r(e), F();
		}
	});
}
Z(qO, {
	id: {},
	data: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/components/nodes/SearchEngineNode.svelte
var JO = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host",
	"id",
	"data"
]), YO = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z\"></path></svg>"), XO = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z\"></path></svg>"), ZO = /* @__PURE__ */ U("<div class=\"heading svelte-1qblm04\"><!> <!></div> <!> <!> <div class=\"setting-title svelte-1qblm04\">搜索引擎</div> <div class=\"setting-item svelte-1qblm04\"><!></div> <div class=\"setting-title svelte-1qblm04\">关键字</div> <div class=\"setting-item svelte-1qblm04\"><!></div> <div class=\"setting-title svelte-1qblm04\">搜索数据量</div> <div class=\"setting-item svelte-1qblm04\"><!></div> <div class=\"heading svelte-1qblm04\"><!></div> <!>", 1), QO = {
	hash: "svelte-1qblm04",
	code: ".heading.svelte-1qblm04 {display:flex;margin-bottom:10px;}.setting-title.svelte-1qblm04 {font-size:12px;color:var(--tf-secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-1qblm04 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function $O(e, t) {
	M(t, !0), Gi(e, QO);
	let n = X(t, "id", 7), r = X(t, "data", 7), i = /* @__PURE__ */ La(t, JO);
	TE(n());
	let { addParameter: a } = TD(), o = DE(), s = /* @__PURE__ */ I(Cn([]));
	wi(async () => {
		let e = await o.provider?.searchEngine?.();
		H(s).push(...e || []);
	});
	let { updateNodeData: c } = Yh();
	return Un(() => {
		(!r().outputDefs || r().outputDefs.length === 0) && a(n(), "outputDefs", {
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
	}), fD(e, Va({
		get id() {
			return n();
		},
		get data() {
			return r();
		}
	}, () => i, {
		icon: (e) => {
			K(e, YO());
		},
		children: (e, t) => {
			var i = ZO(), o = z(i), l = R(o);
			HE(l, {
				level: 3,
				children: (e, t) => {
					j(), K(e, ii("输入参数"));
				},
				$$slots: { default: !0 }
			}), ay(B(l, 2), {
				size: "icon-xs",
				class: "input-btn-more",
				style: "margin-left: auto",
				onclick: () => {
					a(n());
				},
				children: (e, t) => {
					K(e, XO());
				},
				$$slots: { default: !0 }
			}), A(o);
			var u = B(o, 2);
			JD(u, {});
			var d = B(u, 2);
			HE(d, {
				level: 3,
				mt: "10px",
				children: (e, t) => {
					j(), K(e, ii("搜索引擎设置"));
				},
				$$slots: { default: !0 }
			});
			var f = B(d, 4), p = R(f);
			{
				let e = /* @__PURE__ */ P(() => r().engine ? [r().engine] : []);
				RE(p, {
					get items() {
						return H(s);
					},
					style: "width: 100%",
					placeholder: "请选择搜索引擎",
					onSelect: (e) => {
						let t = e.value;
						c(n(), () => ({ engine: t }));
					},
					get value() {
						return H(e);
					}
				});
			}
			A(f);
			var m = B(f, 4);
			sE(R(m), {
				placeholder: "请输入关键字",
				style: "width: 100%",
				get value() {
					return r().keyword;
				},
				onchange: (e) => {
					let t = e.currentTarget.value;
					c(n(), () => ({ keyword: t }));
				}
			}), A(m);
			var h = B(m, 4);
			sE(R(h), {
				placeholder: "搜索的数据条数",
				style: "width: 100%",
				get value() {
					return r().limit;
				},
				onchange: (e) => {
					let t = e.currentTarget.value;
					c(n(), () => ({ limit: t }));
				}
			}), A(h);
			var g = B(h, 2);
			HE(R(g), {
				level: 3,
				mt: "10px",
				children: (e, t) => {
					j(), K(e, ii("输出参数"));
				},
				$$slots: { default: !0 }
			}), A(g), fO(B(g, 2), {}), K(e, i);
		},
		$$slots: {
			icon: !0,
			default: !0
		}
	})), N({
		get id() {
			return n();
		},
		set id(e) {
			n(e), F();
		},
		get data() {
			return r();
		},
		set data(e) {
			r(e), F();
		}
	});
}
Z($O, {
	id: {},
	data: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/components/nodes/LoopNode.svelte
var ek = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host",
	"id",
	"data"
]), tk = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z\"></path></svg>"), nk = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z\"></path></svg>"), rk = /* @__PURE__ */ U("<div class=\"heading svelte-1o34e8c\"><!></div> <!> <div class=\"heading svelte-1o34e8c\"><!> <!></div> <!>", 1), ik = {
	hash: "svelte-1o34e8c",
	code: ".heading.svelte-1o34e8c {display:flex;margin:10px 0;align-items:center;}.loop_handle_wrapper::after {content:'循环体';width:100px;height:20px;background:var(--tf-primary);color:var(--tf-primary-foreground);display:flex;justify-content:center;align-items:center;}"
};
function ak(e, t) {
	M(t, !0), Gi(e, ik);
	let n = X(t, "id", 7), r = X(t, "data", 7), i = /* @__PURE__ */ La(t, ek);
	TE(n());
	let { addParameter: a } = TD();
	return Un(() => {
		(!r().loopVars || r().loopVars.length === 0) && a(n(), "loopVars", {
			name: "loopVar",
			nameDisabled: !0,
			deleteDisabled: !0
		});
	}), fD(e, Va({
		get id() {
			return n();
		},
		get data() {
			return r();
		}
	}, () => i, {
		icon: (e) => {
			K(e, tk());
		},
		handle: (e) => {
			bm(e, {
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
			var r = rk(), i = z(r);
			HE(R(i), {
				level: 3,
				children: (e, t) => {
					j(), K(e, ii("循环变量"));
				},
				$$slots: { default: !0 }
			}), A(i);
			var o = B(i, 2);
			JD(o, { dataKeyName: "loopVars" });
			var s = B(o, 2), c = R(s);
			HE(c, {
				level: 3,
				children: (e, t) => {
					j(), K(e, ii("输出参数"));
				},
				$$slots: { default: !0 }
			}), ay(B(c, 2), {
				size: "icon-xs",
				class: "input-btn-more",
				style: "margin-left: auto",
				onclick: () => {
					a(n(), "outputDefs");
				},
				children: (e, t) => {
					K(e, nk());
				},
				$$slots: { default: !0 }
			}), A(s), JD(B(s, 2), {
				noneParameterText: "无输出参数",
				dataKeyName: "outputDefs",
				useChildrenOnly: !0
			}), K(e, r);
		},
		$$slots: {
			icon: !0,
			handle: !0,
			default: !0
		}
	})), N({
		get id() {
			return n();
		},
		set id(e) {
			n(e), F();
		},
		get data() {
			return r();
		},
		set data(e) {
			r(e), F();
		}
	});
}
Z(ak, {
	id: {},
	data: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/components/core/ConfirmParameterItem.svelte
var ok = /* @__PURE__ */ U("<div class=\"input-more-setting svelte-5x0hls\"><div class=\"input-more-item svelte-5x0hls\">数据类型： <!></div> <div class=\"input-more-item svelte-5x0hls\">确认方式： <!></div> <div class=\"input-more-item svelte-5x0hls\">数据标题： <!></div> <div class=\"input-more-item svelte-5x0hls\">数据描述： <!></div>   <div class=\"input-more-item svelte-5x0hls\"><!></div></div>"), sk = /* @__PURE__ */ U("<div class=\"input-item svelte-5x0hls\"><!></div> <div class=\"input-item svelte-5x0hls\"><!></div> <div class=\"input-item svelte-5x0hls\"><!></div>", 1), ck = {
	hash: "svelte-5x0hls",
	code: ".input-item.svelte-5x0hls {display:flex;align-items:center;}.input-more-setting.svelte-5x0hls {display:flex;flex-direction:column;gap:10px;padding:10px;background:var(--tf-background);border:1px solid var(--tf-border);border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-5x0hls .input-more-item:where(.svelte-5x0hls) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:var(--tf-muted-foreground);}"
};
function lk(e, t) {
	M(t, !0), Gi(e, ck);
	let n = X(t, "parameter", 7), r = X(t, "index", 7), i = X(t, "dataKeyName", 7), a = X(t, "useChildrenOnly", 7), o = EE(), s = $g(o), c = /* @__PURE__ */ P(() => ({
		...n(),
		...(s?.current?.data?.[i()])[r()]
	})), { updateNodeData: l } = Yh(), u = (e, t) => {
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
	}, _ = ID(a());
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
	}, y = sk(), b = z(y), x = R(b);
	{
		let e = /* @__PURE__ */ P(() => H(c).nameDisabled === !0);
		sE(x, {
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
		sE(e, {
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
	return Na(VE(R(E), {
		placement: "bottom",
		floating: (e) => {
			var t = ok(), n = R(t), r = B(R(n));
			{
				let e = /* @__PURE__ */ P(() => H(c).contentType ? [H(c).contentType] : []);
				RE(r, {
					get items() {
						return Uv;
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
						return Kv;
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
			uE(B(R(o)), {
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
			uE(B(R(s)), {
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
			ay(R(l), {
				variant: "destructive",
				onclick: g,
				children: (e, t) => {
					j(), K(e, ii("删除"));
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
Z(lk, {
	parameter: {},
	index: {},
	dataKeyName: {},
	useChildrenOnly: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/components/core/ConfirmParameterList.svelte
var uk = /* @__PURE__ */ U("<div class=\"input-header svelte-1fllp9b\">参数名称</div> <div class=\"input-header svelte-1fllp9b\">参数值</div> <div class=\"input-header svelte-1fllp9b\"></div>", 1), dk = /* @__PURE__ */ U("<div class=\"none-params svelte-1fllp9b\"> </div>"), fk = /* @__PURE__ */ U("<div class=\"input-container svelte-1fllp9b\"><!> <!></div>"), pk = {
	hash: "svelte-1fllp9b",
	code: ".input-container.svelte-1fllp9b {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1fllp9b .none-params:where(.svelte-1fllp9b) {font-size:12px;background:var(--tf-secondary);height:20px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;\n  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1fllp9b .input-header:where(.svelte-1fllp9b) {font-size:12px;color:var(--tf-muted-foreground);}"
};
function mk(e, t) {
	M(t, !0), Gi(e, pk);
	let n = X(t, "noneParameterText", 7, "无确认数据"), r = X(t, "dataKeyName", 7, "parameters"), i = X(t, "useChildrenOnly", 7), a = $g(EE()), o = /* @__PURE__ */ P(() => [...a?.current?.data?.[r()] || []]);
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
	}, c = fk(), l = R(c), u = (e) => {
		var t = uk();
		j(4), K(e, t);
	};
	return J(l, (e) => {
		H(o).length !== 0 && e(u);
	}), Fi(B(l, 2), 19, () => H(o), (e) => e.id, (e, t, n) => {
		lk(e, {
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
		var t = dk(), r = R(t, !0);
		A(t), V(() => gi(r, n())), K(e, t);
	}), A(c), K(e, c), N(s);
}
Z(mk, {
	noneParameterText: {},
	dataKeyName: {},
	useChildrenOnly: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/components/utils/deepEqual.ts
var hk = (e, t) => {
	if (e === t) return !0;
	if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
	let n = Array.isArray(e), r = Array.isArray(t);
	if (n !== r) return !1;
	if (n && r) {
		if (e.length !== t.length) return !1;
		for (let n = 0; n < e.length; n++) if (!hk(e[n], t[n])) return !1;
		return !0;
	} else {
		let n = Object.keys(e), r = Object.keys(t);
		if (n.length !== r.length) return !1;
		for (let r of n) if (!(r in t) || !hk(e[r], t[r])) return !1;
		return !0;
	}
}, gk = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host",
	"id",
	"data"
]), _k = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z\"></path></svg>"), vk = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z\"></path></svg>"), yk = /* @__PURE__ */ U("<div class=\"heading svelte-8iukvu\"><!> <!></div> <!> <!> <div class=\"setting-title svelte-8iukvu\">消息内容</div> <div class=\"setting-item svelte-8iukvu\"><!></div> <div class=\"heading svelte-8iukvu\"><!></div> <!>", 1), bk = {
	hash: "svelte-8iukvu",
	code: ".heading.svelte-8iukvu {display:flex;margin-bottom:10px;}.setting-title.svelte-8iukvu {font-size:12px;color:var(--tf-secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-8iukvu {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function xk(e, t) {
	M(t, !0), Gi(e, bk);
	let n = X(t, "id", 7), r = X(t, "data", 7), i = /* @__PURE__ */ La(t, gk);
	TE(n());
	let { addParameter: a } = TD(), { updateNodeData: o } = Yh();
	return Un(() => {
		if (r().confirms) {
			let e = r().confirms.map((e) => ({
				...e,
				nameDisabled: !0,
				dataTypeDisabled: !0,
				dataType: e.formType === "checkbox" || e.formType === "select" ? "Array" : "String",
				addChildDisabled: !0
			}));
			hk(e, r().outputDefs) || o(n(), () => ({ outputDefs: e }));
		}
	}), fD(e, Va({
		get id() {
			return n();
		},
		get data() {
			return r();
		}
	}, () => i, {
		icon: (e) => {
			K(e, _k());
		},
		children: (e, t) => {
			var i = yk(), s = z(i), c = R(s);
			HE(c, {
				level: 3,
				children: (e, t) => {
					j(), K(e, ii("确认数据"));
				},
				$$slots: { default: !0 }
			}), ay(B(c, 2), {
				size: "icon-xs",
				class: "input-btn-more",
				style: "margin-left: auto",
				onclick: () => {
					a(n(), "confirms");
				},
				children: (e, t) => {
					K(e, vk());
				},
				$$slots: { default: !0 }
			}), A(s);
			var l = B(s, 2);
			mk(l, {
				dataKeyName: "confirms",
				noneParameterText: "无确认数据"
			});
			var u = B(l, 2);
			HE(u, {
				level: 3,
				mt: "10px",
				children: (e, t) => {
					j(), K(e, ii("确认消息"));
				},
				$$slots: { default: !0 }
			});
			var d = B(u, 4), f = R(d);
			{
				let e = /* @__PURE__ */ P(() => r().message || "");
				uE(f, {
					rows: 5,
					placeholder: "请输入用户需要确认的消息内容",
					style: "width: 100%",
					onchange: (e) => {
						o(n(), () => ({ message: e.target.value }));
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
					j(), K(e, ii("输出参数"));
				},
				$$slots: { default: !0 }
			}), A(p), fO(B(p, 2), { placeholder: "" }), K(e, i);
		},
		$$slots: {
			icon: !0,
			default: !0
		}
	})), N({
		get id() {
			return n();
		},
		set id(e) {
			n(e), F();
		},
		get data() {
			return r();
		},
		set data(e) {
			r(e), F();
		}
	});
}
Z(xk, {
	id: {},
	data: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/components/nodes/index.ts
var Sk = {
	startNode: jD,
	codeNode: EO,
	confirmNode: xk,
	llmNode: bO,
	templateNode: MO,
	httpNode: VO,
	knowledgeNode: qO,
	searchEngineNode: $O,
	loopNode: ak,
	endNode: eO
}, Ck = /* @__PURE__ */ U("<!> ", 1);
function wk(e, t) {
	M(t, !0);
	let n = X(t, "icon", 7), r = X(t, "title", 7), i = X(t, "type", 7), a = X(t, "description", 7), o = X(t, "extra", 7), s = Yh(), c = Qv();
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
			}), l = {
				id: `node_${ZE()}`,
				type: i(),
				position: n,
				data: {
					title: r(),
					description: a(),
					...o()
				}
			};
			c.addNode(l), c.selectNodeOnly(l.id);
		},
		get "data-node-type"() {
			return i();
		},
		children: (e, t) => {
			var i = Ck(), a = z(i);
			Vi(a, n);
			var o = B(a);
			V(() => gi(o, ` ${r() ?? ""}`)), K(e, i);
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
Z(wk, {
	icon: {},
	title: {},
	type: {},
	description: {},
	extra: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/components/Toolbar.svelte
var Tk = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z\"></path></svg>"), Ek = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z\"></path></svg>"), Dk = /* @__PURE__ */ U("<div><div class=\"tf-toolbar-container\"><div class=\"tf-toolbar-container-header\"><!></div> <div class=\"tf-toolbar-container-body\"><div class=\"tf-toolbar-container-base\"></div> <div class=\"tf-toolbar-container-tools\"></div></div></div> <!></div>");
function Ok(e, t) {
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
	var l = Dk(), u = R(l), d = R(u);
	pE(R(d), {
		style: "width: 100%",
		get items() {
			return a;
		},
		onChange: (e) => {
			L(n, e.value.toString(), !0);
		}
	}), A(d);
	var f = B(d, 2), p = R(f);
	Fi(p, 21, () => i, ji, (e, t) => {
		wk(e, Va(() => H(t)));
	}), A(p);
	var m = B(p, 2);
	Fi(m, 21, () => o, ji, (e, t) => {
		wk(e, Va(() => H(t)));
	}), A(m), A(f), A(u), ay(B(u, 2), {
		size: "icon",
		variant: "outline",
		onclick: () => {
			L(r, H(r) ? "" : "show", !0);
		},
		children: (e, t) => {
			var n = G(), i = z(n), a = (e) => {
				K(e, Tk());
			}, o = (e) => {
				K(e, Ek());
			};
			J(i, (e) => {
				H(r) === "show" ? e(a) : e(o, -1);
			}), K(e, n);
		},
		$$slots: { default: !0 }
	}), A(l), V(() => {
		na(l, 1, `tf-toolbar ${H(r) ?? ""}`), ia(p, `display: ${H(n) === "base" ? "flex" : "none"}`), ia(m, `display: ${H(n) === "base" ? "none" : "flex"}`);
	}), K(e, l), N();
}
Z(Ok, {}, [], [], { mode: "open" });
//#endregion
//#region src/components/utils/useGetNode.svelte.ts
var kk = () => {
	let e = Qv();
	return { getNode: (t) => e.getNode(t) };
}, Ak = () => {
	let e = Qv();
	return { ensureParentInNodesBefore: (t, n) => {
		e.updateNodes((e) => {
			let r = -1;
			for (let n = 0; n < e.length; n++) if (e[n].id === t) {
				r = n;
				break;
			}
			if (r <= 0) return e;
			let i = -1;
			for (let a = 0; a < r; a++) if (e[a].parentId === t || e[a].id === n) {
				i = a;
				break;
			}
			if (i == -1) return e;
			let a = e[r];
			for (let t = r; t > i; t--) e[t] = e[t - 1];
			return e[i] = a, e;
		});
	} };
}, jk = () => {
	let e = Qv();
	return { getEdgesByTarget: (t) => e.getEdges().filter((e) => e.target === t) };
}, Mk = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"$$host",
	"id",
	"data"
]), Nk = /* @__PURE__ */ W("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z\"></path></svg>"), Pk = /* @__PURE__ */ U("<div class=\"heading svelte-qt4m0r\"><!> <!></div> <!>", 1), Fk = /* @__PURE__ */ U("<div class=\"setting-title svelte-qt4m0r\"> </div> <div class=\"setting-item svelte-qt4m0r\"><!></div>", 1), Ik = /* @__PURE__ */ U("<div class=\"setting-title svelte-qt4m0r\"> </div> <div class=\"setting-item svelte-qt4m0r\"><div class=\"slider-container svelte-qt4m0r\"><span class=\"svelte-qt4m0r\"> </span> <input/></div></div>", 1), Lk = /* @__PURE__ */ U("<!> <!> <div></div> <!>", 1), Rk = {
	hash: "svelte-qt4m0r",
	code: ".heading.svelte-qt4m0r {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-qt4m0r {font-size:12px;color:var(--tf-secondary-foreground);margin-bottom:4px;margin-top:10px;}.setting-item.svelte-qt4m0r {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}\n\n    /* 新增样式 */.slider-container.svelte-qt4m0r {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-qt4m0r span:where(.svelte-qt4m0r) {font-size:12px;color:var(--tf-muted-foreground);display:flex;justify-content:space-between;align-items:center;}input[type='range'].svelte-qt4m0r {width:100%;height:4px;background:var(--tf-muted);border-radius:2px;outline:none;-webkit-appearance:none;}input[type='range'].svelte-qt4m0r::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:var(--tf-primary);border-radius:50%;cursor:pointer;}"
};
function zk(e, t) {
	M(t, !0), Gi(e, Rk);
	let n = X(t, "id", 7), r = X(t, "data", 7), i = /* @__PURE__ */ La(t, Mk);
	TE(n());
	let { addParameter: a } = TD(), o = Yh(), { updateNodeData: s } = o, c = (e) => {
		s(n(), e);
	}, l = (e, t) => {
		c({ [e]: t.target?.value });
	}, u = {
		...i,
		id: n(),
		data: r()
	}, d = document.createElement("div"), f = DE().customNodes[t.type];
	f.render?.(d, u, o);
	let p = f.forms, m;
	Un(() => {
		r().expand && m && m.append(d);
	}), Un(() => {
		r() && f.onUpdate?.(d, {
			...u,
			data: r()
		});
	}), Un(() => {
		!r().parameters && f.parameters && c({ parameters: wD(JSON.parse(JSON.stringify(f.parameters))) });
	}), Un(() => {
		!r().outputDefs && f.outputDefs && c({ outputDefs: wD(JSON.parse(JSON.stringify(f.outputDefs))) });
	});
	var h = {
		get id() {
			return n();
		},
		set id(e) {
			n(e), F();
		},
		get data() {
			return r();
		},
		set data(e) {
			r(e), F();
		}
	};
	{
		let t = (e) => {
			var t = G();
			Vi(z(t), () => f.icon), K(e, t);
		}, o = /* @__PURE__ */ P(() => ({
			...r(),
			description: f.description
		}));
		fD(e, Va({
			get id() {
				return n();
			},
			get data() {
				return H(o);
			}
		}, () => i, {
			icon: t,
			children: (e, t) => {
				var i = Lk(), o = z(i), s = (e) => {
					var t = Pk(), r = z(t), i = R(r);
					HE(i, {
						level: 3,
						children: (e, t) => {
							j(), K(e, ii("输入参数"));
						},
						$$slots: { default: !0 }
					});
					var o = B(i, 2), s = (e) => {
						ay(e, {
							size: "icon-xs",
							class: "input-btn-more",
							style: "margin-left: auto",
							onclick: () => {
								a(n());
							},
							children: (e, t) => {
								K(e, Nk());
							},
							$$slots: { default: !0 }
						});
					};
					J(o, (e) => {
						f.parametersAddEnable !== !1 && e(s);
					}), A(r), JD(B(r, 2), {}), K(e, t);
				};
				J(o, (e) => {
					f.parametersEnable !== !1 && e(s);
				});
				var u = B(o, 2), d = (e) => {
					var t = G();
					Fi(z(t), 17, () => p, ji, (e, t) => {
						var n = G(), i = z(n), a = (e) => {
							var n = Fk(), i = z(n), a = R(i, !0);
							A(i);
							var o = B(i, 2), s = R(o);
							{
								let e = /* @__PURE__ */ P(() => r()[H(t).name] || H(t).defaultValue);
								sE(s, Va({
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
							A(o), V(() => gi(a, H(t).label)), K(e, n);
						}, o = (e) => {
							var n = Fk(), i = z(n), a = R(i, !0);
							A(i);
							var o = B(i, 2), s = R(o);
							{
								let e = /* @__PURE__ */ P(() => r()[H(t).name] || H(t).defaultValue);
								uE(s, Va({
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
							A(o), V(() => gi(a, H(t).label)), K(e, n);
						}, s = (e) => {
							var n = Ik(), i = z(n), a = R(i, !0);
							A(i);
							var o = B(i, 2), s = R(o), l = R(s), u = R(l);
							A(l);
							var d = B(l, 2), f = (e) => c({ [H(t).name]: parseFloat(e.currentTarget.value) });
							Sa(d, () => ({
								class: "nodrag",
								type: "range",
								...H(t).attrs,
								value: r()[H(t).name] ?? H(t).defaultValue,
								oninput: f
							}), void 0, void 0, void 0, "svelte-qt4m0r", !0), A(s), A(o), V(() => {
								gi(a, H(t).label), gi(u, `${H(t).description ?? ""}: ${r()[H(t).name] ?? H(t).defaultValue ?? ""}`);
							}), K(e, n);
						}, u = (e) => {
							var n = Fk(), i = z(n), a = R(i, !0);
							A(i);
							var o = B(i, 2), s = R(o);
							{
								let e = /* @__PURE__ */ P(() => H(t).options || []), n = /* @__PURE__ */ P(() => r()[H(t).name] ? [r()[H(t).name]] : [H(t).defaultValue]);
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
										return H(n);
									}
								});
							}
							A(o), V(() => gi(a, H(t).label)), K(e, n);
						}, d = (e) => {
							var n = Fk(), i = z(n), a = R(i, !0);
							A(i);
							var o = B(i, 2), s = R(o);
							{
								let e = /* @__PURE__ */ P(() => H(t).chosen?.buttonText);
								iE(s, {
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
										return r()[H(t).chosen?.valueDataKey || ""];
									},
									get label() {
										return r()[H(t).chosen?.labelDataKey || ""];
									}
								});
							}
							A(o), V(() => gi(a, H(t).label)), K(e, n);
						}, f = (e) => {
							HE(e, Va({
								level: 3,
								mt: "10px"
							}, () => H(t).attrs, {
								children: (e, n) => {
									j();
									var r = ii();
									V(() => gi(r, H(t).label)), K(e, r);
								},
								$$slots: { default: !0 }
							}));
						};
						J(i, (e) => {
							H(t).type === "input" ? e(a) : H(t).type === "textarea" ? e(o, 1) : H(t).type === "slider" ? e(s, 2) : H(t).type === "select" ? e(u, 3) : H(t).type === "chosen" ? e(d, 4) : H(t).type === "heading" && e(f, 5);
						}), K(e, n);
					}), K(e, t);
				};
				J(u, (e) => {
					p && e(d);
				});
				var h = B(u, 2);
				Na(h, (e) => m = e, () => m);
				var g = B(h, 2), _ = (e) => {
					var t = Pk(), r = z(t), i = R(r);
					HE(i, {
						level: 3,
						mt: "10px",
						children: (e, t) => {
							j(), K(e, ii("输出参数"));
						},
						$$slots: { default: !0 }
					});
					var o = B(i, 2), s = (e) => {
						ay(e, {
							size: "icon-xs",
							class: "input-btn-more",
							style: "margin-left: auto",
							onclick: () => {
								a(n(), "outputDefs");
							},
							children: (e, t) => {
								K(e, Nk());
							},
							$$slots: { default: !0 }
						});
					};
					J(o, (e) => {
						f.outputDefsAddEnable !== !1 && e(s);
					}), A(r), fO(B(r, 2), {}), K(e, t);
				};
				J(g, (e) => {
					f.outputDefsEnable !== !1 && e(_);
				}), V(() => {
					ia(h, f.rootStyle || ""), na(h, 1, Xi(f.rootClass), "svelte-qt4m0r");
				}), K(e, i);
			},
			$$slots: {
				icon: !0,
				default: !0
			}
		}));
	}
	return N(h);
}
Z(zk, {
	id: {},
	data: {}
}, [], [], { mode: "open" });
//#endregion
//#region src/components/utils/useUpdateEdgeData.svelte.ts
var Bk = () => {
	let e = Qv();
	return { updateEdgeData: (t, n, r) => {
		let i = e.getEdge(t);
		if (!i) return;
		let a = typeof n == "function" ? n(i) : n;
		i.data = r?.replace ? a : {
			...i.data,
			...a
		}, e.updateEdges((e) => e.map((e) => e.id === t ? i : e));
	} };
}, Vk = () => {
	let e = Qv();
	return { deleteEdge: (t) => {
		e.removeEdge(t);
	} };
}, Hk = () => {
	let e = Qv(), t = (e, t) => t.filter((t) => t.source === e && t.sourceHandle !== "loop_handle");
	return { getNodesFromSource: (n) => {
		let r = e.getEdges(), i = [], a = t(n, r);
		for (; a.length > 0;) {
			let n = [];
			a.forEach((a) => {
				i.push(e.getNode(a.target)), n.push(...t(a.target, r));
			}), a = n;
		}
		return i;
	} };
}, Uk = () => {
	let e = Qv();
	return { getNodeRelativePosition: (t) => {
		let n = e.getNode(t), r = {
			x: 0,
			y: 0
		};
		for (; n;) r.x += n.position.x, r.y += n.position.y, n = n.parentId ? e.getNode(n.parentId) : void 0;
		return r;
	} };
};
//#endregion
//#region src/components/utils/useCopyPasteHandler.svelte.ts
function Wk(e) {
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
function Gk(e) {
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
function Kk(e) {
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
function qk(e, t) {
	if (e == null) return e;
	if (Array.isArray(e)) return e.map((e) => qk(e, t));
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
		for (let r in e) Object.hasOwn(e, r) && (n[r] = qk(e[r], t));
		return n;
	}
	return e;
}
var Jk = () => {
	let e = Qv();
	return {
		copyHandler: async (t) => {
			let n = e.getNodes().filter((e) => e.selected);
			if (n.length === 0) return;
			let r = e.getEdges().filter((e) => n.some((t) => t.id === e.source) && n.some((t) => t.id === e.target)), i = {
				tinyflowNodes: n.map(Wk),
				tinyflowEdges: r.map(Kk),
				version: "1.0"
			}, a = JSON.stringify(i, null, 0);
			try {
				"clipboardData" in t && t.clipboardData ? (t.clipboardData.setData("text/plain", a), t instanceof ClipboardEvent && t.preventDefault()) : await navigator.clipboard.writeText(a), console.log("Copied nodes and edges to clipboard");
			} catch (e) {
				console.error("Failed to copy:", e);
				try {
					sessionStorage.setItem("tinyflow_clipboard", a);
				} catch {}
			}
		},
		pasteHandler: (t) => {
			let n = t.clipboardData?.getData("text/plain");
			if (!n) return;
			let r = null;
			try {
				r = JSON.parse(n);
			} catch {
				return;
			}
			if (!r?.tinyflowNodes || !Array.isArray(r.tinyflowNodes)) return;
			t.preventDefault();
			let i = Gk(r.tinyflowNodes), a = r.tinyflowEdges || [], o = /* @__PURE__ */ new Map(), s = [];
			for (let e of i) {
				let t = `node_${ZE()}`;
				o.set(e.id, t);
			}
			for (let e of i) {
				let t = o.get(e.id), n = e.parentId === void 0 ? void 0 : o.get(e.parentId), r = $E(qk(e.data, o), { regenerateIds: !0 });
				s.push({
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
			let c = [];
			for (let e of a) {
				let t = o.get(e.source), n = o.get(e.target);
				t && n && c.push({
					...e,
					id: `edge_${ZE()}`,
					source: t,
					target: n
				});
			}
			e.updateNodes((e) => [...e.map((e) => ({
				...e,
				selected: !1
			})), ...s]), e.updateEdges((e) => [...e.map((e) => ({
				...e,
				selected: !1
			})), ...c]);
		}
	};
}, Yk = () => {
	let e = document.activeElement;
	return !e || !(e instanceof HTMLElement) ? !1 : e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement || e.isContentEditable;
}, Xk = /* @__PURE__ */ U("<div class=\"panel-content svelte-woejl3\"><div>边属性设置</div> <div class=\"setting-title svelte-woejl3\">边条件设置</div> <div class=\"setting-item svelte-woejl3\"><!></div> <div class=\"setting-item svelte-woejl3\" style=\"padding: 8px 0\"><!> <!></div></div>"), Zk = /* @__PURE__ */ U("<!> <!> <!> <!>", 1), Qk = /* @__PURE__ */ U("<div class=\"tinyflow-editor-root\" style=\"position: relative; height: 100%; width: 100%;overflow: hidden\" role=\"application\" aria-label=\"Tinyflow 工作流编辑器\" tabindex=\"0\"><!> <!></div>"), $k = {
	hash: "svelte-woejl3",
	code: ".panel-content.svelte-woejl3 {padding:10px;background-color:var(--tf-background);border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid var(--tf-border);}.setting-title.svelte-woejl3 {margin:10px 0;font-size:12px;color:var(--tf-muted-foreground);}.setting-item.svelte-woejl3 {display:flex;gap:5px;align-items:center;justify-content:end;}"
};
function eA(e, t) {
	M(t, !0), Gi(e, $k);
	let n = X(t, "onInit", 7), r = Qv(), i = Yh();
	n()(i);
	let a = /* @__PURE__ */ I(!1), o = /* @__PURE__ */ I(null), { updateEdgeData: s } = Bk(), c = (e) => {
		e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "move");
	}, l = (e) => {
		e.preventDefault();
		let t = i.screenToFlowPosition({
			x: e.clientX,
			y: e.clientY
		}), n = e.dataTransfer?.getData("application/tinyflow");
		if (!n) return;
		let a = JSON.parse(n), o = {
			id: `node_${ZE()}`,
			position: t,
			data: {},
			...a
		};
		r.addNode(o), r.selectNodeOnly(o.id);
	}, { getNode: u } = kk(), d = (e) => {
		let t = u(e.source), n = u(e.target);
		if (e.sourceHandle === "loop_handle" || t.parentId) {
			let n = i.getEdges();
			for (let r of n) if (r.target === e.target) {
				let n = u(r.source);
				if (e.sourceHandle === "loop_handle" && n.parentId !== t.id || t.parentId && n.parentId !== t.parentId) return !1;
			}
		}
		return !(!t.parentId && n.parentId && n.parentId !== t.id);
	}, { getNodesFromSource: f } = Hk(), { getNodeRelativePosition: p } = Uk(), { ensureParentInNodesBefore: m } = Ak(), h = (e, t) => {
		if (!t.isValid) return;
		let n = t.toNode;
		if (n.parentId) return;
		let s = t.fromNode, c = t.fromHandle, l = { position: { ...n.position } };
		if (c.id === "loop_handle" ? l.parentId = s.id : s.parentId && (l.parentId = s.parentId), l.parentId) {
			let { x: e, y: t } = p(l.parentId);
			l.position = {
				x: n.position.x - e,
				y: n.position.y - t
			}, i.updateNode(n.id, l), f(n.id).forEach((n) => {
				i.updateNode(n.id, {
					parentId: l.parentId,
					position: {
						x: n.position.x - e,
						y: n.position.y - t
					}
				});
			}), m(l.parentId, n.id);
		}
		setTimeout(() => {
			r.getEdges().forEach((e) => {
				e.target === n.id && e.source == s.id && (L(a, !0), L(o, e, !0));
			});
		});
	}, { getEdgesByTarget: g } = jk(), _ = (e) => {
		e.edges.forEach((e) => {
			e.id === H(o)?.id && (L(o, null), L(a, !1));
			let t = u(e.target);
			if (t && t.parentId) {
				let n = g(e.target), { x: r, y: a } = p(t.parentId);
				if (n.length === 0) i.updateNode(t.id, {
					parentId: void 0,
					position: {
						x: t.position.x + r,
						y: t.position.y + a
					}
				}), f(t.id).forEach((e) => {
					i.updateNode(e.id, {
						parentId: void 0,
						position: {
							x: e.position.x + r,
							y: e.position.y + a
						}
					});
				});
				else {
					let e = !1;
					for (let t = 0; t < n.length; t++) {
						let r = n[t], i = u(r.source);
						if (i.parentId || i.type === "loopNode") {
							e = !0;
							break;
						}
					}
					e || (i.updateNode(t.id, {
						parentId: void 0,
						position: {
							x: t.position.x + r,
							y: t.position.y + a
						}
					}), f(t.id).forEach((e) => {
						i.updateNode(e.id, {
							parentId: void 0,
							position: {
								x: e.position.x + r,
								y: e.position.y + a
							}
						});
					}));
				}
			}
		});
	}, { deleteEdge: v } = Vk(), y = () => {}, b = () => {}, { copyHandler: x, pasteHandler: S } = Jk(), C = (e) => {
		Yk() || document.getSelection()?.type !== "Range" && ((e.ctrlKey || e.metaKey) && e.key === "c" ? (e.preventDefault(), x(e)) : (e.ctrlKey || e.metaKey) && e.key === "a" && (e.preventDefault(), r.updateNodes((e) => e.map((e) => ({
			...e,
			selected: !0
		}))), r.updateEdges((e) => e.map((e) => ({
			...e,
			selected: !0
		})))));
	}, w = async (e) => {
		Yk() || S(e);
	}, T = () => {
		let e = document.getSelection();
		e && e.removeAllRanges();
	}, E = (e) => {
		e.target.closest("input, textarea, select, button, a, [contenteditable=\"true\"]") || e.currentTarget.focus({ preventScroll: !0 });
	}, D = {}, ee = DE().customNodes;
	if (ee) for (let e of Object.keys(ee)) D[e] = zk;
	let te = DE().onDataChange;
	Un(() => {
		te?.({
			nodes: r.getNodes(),
			edges: r.getEdges(),
			viewport: r.getViewport()
		});
	});
	var ne = {
		get onInit() {
			return n();
		},
		set onInit(e) {
			n(e), F();
		}
	}, re = Qk(), ie = R(re), ae = r.getNodes, oe = r.setNodes, se = r.getEdges, ce = r.setEdges, le = r.getViewport, ue = r.setViewport;
	{
		let e = /* @__PURE__ */ P(() => DE().defaultTheme ?? "system"), t = /* @__PURE__ */ P(() => ({
			...Sk,
			...D
		})), n = /* @__PURE__ */ P(() => ({ markerEnd: {
			type: Bd.ArrowClosed,
			width: 20,
			height: 20
		} }));
		pg(ie, {
			get colorMode() {
				return H(e);
			},
			get nodeTypes() {
				return H(t);
			},
			get nodes() {
				return ae();
			},
			set nodes(e) {
				oe(e);
			},
			get edges() {
				return se();
			},
			set edges(e) {
				ce(e);
			},
			get viewport() {
				return le();
			},
			set viewport(e) {
				ue(e);
			},
			class: "tinyflow-logo",
			ondrop: l,
			ondragover: c,
			isValidConnection: d,
			onconnectend: h,
			onconnectstart: y,
			onconnect: b,
			connectionRadius: 50,
			onpaneclick: T,
			onedgeclick: (e) => {
				L(a, !0), L(o, e.edge, !0);
			},
			onbeforeconnect: (e) => ({
				...e,
				id: ZE()
			}),
			ondelete: _,
			onclick: (e) => {
				let t = e.target;
				t.classList.contains("svelte-flow__edge-interaction") || t.classList.contains("panel-content") || t.closest(".panel-content") || (L(a, !1), L(o, null));
			},
			get defaultEdgeOptions() {
				return H(n);
			},
			children: (e, t) => {
				var n = Zk(), r = z(n);
				zg(r, {});
				var i = B(r, 2);
				jg(i, {});
				var c = B(i, 2);
				Yg(c, {});
				var l = B(c, 2), u = (e) => {
					rg(e, {
						children: (e, t) => {
							var n = Xk(), r = B(R(n), 4), i = R(r);
							{
								let e = /* @__PURE__ */ P(() => H(o)?.data?.condition);
								uE(i, {
									rows: 3,
									placeholder: "请输入边条件",
									style: "width: 100%",
									get value() {
										return H(e);
									},
									onchange: (e) => {
										H(o) && s(H(o).id, { condition: e.currentTarget.value });
									}
								});
							}
							A(r);
							var c = B(r, 2), l = R(c);
							ay(l, {
								variant: "destructive",
								onclick: () => {
									H(o) && v(H(o).id), L(a, !1);
								},
								children: (e, t) => {
									j(), K(e, ii("删除"));
								},
								$$slots: { default: !0 }
							}), ay(B(l, 2), {
								variant: "default",
								onclick: () => {
									L(a, !1);
								},
								children: (e, t) => {
									j(), K(e, ii("保存"));
								},
								$$slots: { default: !0 }
							}), A(c), A(n), K(e, n);
						},
						$$slots: { default: !0 }
					});
				};
				J(l, (e) => {
					H(a) && e(u);
				}), K(e, n);
			},
			$$slots: { default: !0 }
		});
	}
	return Ok(B(ie, 2), {}), A(re), Yr("pointerdown", re, E), Yr("keydown", re, C), Jr("paste", re, w), K(e, re), N(ne);
}
Xr(["pointerdown", "keydown"]), Z(eA, { onInit: {} }, [], [], { mode: "open" });
//#endregion
//#region src/components/TinyflowComponent.svelte
function tA(e, t) {
	M(t, !0);
	let n = X(t, "options", 7), r = X(t, "onInit", 7), { data: i } = n();
	if (typeof i == "string") try {
		i = JSON.parse(i.trim());
	} catch {
		console.error("Invalid JSON data:", i);
	}
	let a = i;
	return Zv(Xv()).init(a?.nodes || [], a?.edges || [], a?.viewport), it("tinyflow_options", n()), mg(e, {
		children: (e, t) => {
			eA(e, { get onInit() {
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
customElements.define("tinyflow-component", Z(tA, {
	options: {},
	onInit: {}
}, [], []));
//#endregion
export { Jv as Tinyflow };

//# sourceMappingURL=index.js.map