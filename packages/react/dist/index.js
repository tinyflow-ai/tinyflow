import e, { forwardRef as t, useEffect as n, useImperativeHandle as r, useRef as i } from "react";
import { Tinyflow as a } from "@tinyflow-ai/ui";
//#region src/Tinyflow.tsx
var o = t((t, o) => {
	let s = i(null), c = i(null), l = i(!0), u = i(t.onDataChange), d = i(t.onNodeExecute);
	u.current = t.onDataChange, d.current = t.onNodeExecute;
	let f = i({
		onDataChange: (e) => u.current?.(e),
		onNodeExecute: (e) => d.current?.(e)
	});
	r(o, () => ({
		getData: () => c.current ? c.current.getData() : (console.warn("Tinyflow instance is not initialized"), null),
		getInstance: () => c.current ? c.current : (console.warn("Tinyflow instance is not initialized"), null)
	}));
	let { data: p, style: m, className: h, provider: g, customNodes: _, hiddenNodes: v, defaultTheme: y, formRefTypeEnable: b } = t;
	return n(() => {
		if (s.current) {
			let e = new a({
				element: s.current,
				data: p,
				provider: g,
				customNodes: _,
				onNodeExecute: f.current.onNodeExecute,
				hiddenNodes: v,
				onDataChange: f.current.onDataChange,
				defaultTheme: y,
				formRefTypeEnable: b
			});
			return c.current = e, () => {
				e.destroy(), c.current = null;
			};
		}
	}, []), n(() => {
		if (l.current) {
			l.current = !1;
			return;
		}
		c.current?.setOptions({
			data: p,
			provider: g,
			customNodes: _,
			hiddenNodes: v,
			defaultTheme: y,
			formRefTypeEnable: b
		});
	}, [
		p,
		g,
		_,
		v,
		y,
		b
	]), /* @__PURE__ */ e.createElement("div", {
		ref: s,
		style: {
			height: "600px",
			...m
		},
		className: h
	});
});
//#endregion
export { o as Tinyflow };

//# sourceMappingURL=index.js.map