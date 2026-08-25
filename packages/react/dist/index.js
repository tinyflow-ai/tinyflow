import e, { forwardRef as t, useEffect as n, useImperativeHandle as r, useRef as i } from "react";
import { Tinyflow as a } from "@tinyflow-ai/ui";
//#region src/Tinyflow.tsx
var o = t((t, o) => {
	let s = i(null), c = i(null);
	r(o, () => ({
		getData: () => c.current ? c.current.getData() : (console.warn("Tinyflow instance is not initialized"), null),
		getInstance: () => c.current ? c.current : (console.warn("Tinyflow instance is not initialized"), null)
	}));
	let { data: l, style: u, className: d, provider: f, customNodes: p, onNodeExecute: m, hiddenNodes: h, onDataChange: g, defaultTheme: _, formRefTypeEnable: v } = t;
	return n(() => {
		if (s.current) {
			let e = new a({
				element: s.current,
				data: l,
				provider: f,
				customNodes: p,
				onNodeExecute: m,
				hiddenNodes: h,
				onDataChange: g,
				defaultTheme: _,
				formRefTypeEnable: v
			});
			return c.current = e, () => {
				e.destroy(), c.current = null;
			};
		}
	}, [
		l,
		f,
		p,
		m,
		h,
		g,
		_,
		v
	]), /* @__PURE__ */ e.createElement("div", {
		ref: s,
		style: {
			height: "600px",
			...u
		},
		className: d
	});
});
//#endregion
export { o as Tinyflow };

//# sourceMappingURL=index.js.map