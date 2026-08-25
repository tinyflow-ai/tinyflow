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
		let d = t, f = s(null), p = null;
		function m(e) {
			if (typeof e != "object" || !e) return e;
			try {
				return structuredClone(e);
			} catch {
				try {
					return JSON.parse(JSON.stringify(e));
				} catch {
					return console.warn("无法复制 Tinyflow data，将使用原始值", e), e;
				}
			}
		}
		let h = () => ({
			data: d.data == null ? d.data : m(d.data),
			provider: d.provider,
			customNodes: d.customNodes,
			hiddenNodes: d.hiddenNodes,
			defaultTheme: d.defaultTheme,
			formRefTypeEnable: d.formRefTypeEnable
		}), g = (e) => d.onDataChange?.(e), _ = (e) => d.onNodeExecute?.(e);
		return i(() => {
			f.value && (p = new l({
				...h(),
				onDataChange: g,
				onNodeExecute: _,
				element: f.value
			}));
		}), c(() => [
			d.data,
			d.provider,
			d.customNodes,
			d.hiddenNodes,
			d.defaultTheme,
			d.formRefTypeEnable
		], () => p?.setOptions(h()), { deep: !0 }), a(() => {
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