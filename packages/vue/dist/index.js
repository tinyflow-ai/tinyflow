import { createElementBlock as e, defineComponent as t, normalizeClass as n, normalizeStyle as r, onMounted as i, onUnmounted as a, openBlock as o, ref as s, watch as c } from "vue";
import { Tinyflow as l } from "@tinyflow-ai/ui";
//#endregion
//#region src/Tinyflow.vue
var u = /* @__PURE__ */ t({
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
	setup(t, { expose: u }) {
		let d = t, f = s(null), p = null, m = () => {
			let { className: e, style: t, ...n } = d, r = { ...n };
			return r.data != null && (r.data = h(r.data)), r;
		};
		function h(e) {
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
			f.value && (p = new l({
				...m(),
				element: f.value
			}));
		}), c(() => m(), (e) => p?.setOptions(e), { deep: !0 }), a(() => {
			p &&= (p.destroy(), null);
		}), u({
			getData: () => p ? p.getData() : (console.warn("Tinyflow instance is not initialized"), null),
			getInstance: () => p || (console.warn("Tinyflow instance is not initialized"), null)
		}), (i, a) => (o(), e("div", {
			ref_key: "divRef",
			ref: f,
			class: n(["tinyflow", t.className]),
			style: r(t.style)
		}, null, 6));
	}
});
//#endregion
export { u as Tinyflow };

//# sourceMappingURL=index.js.map