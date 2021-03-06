/* src/components/AllocationChart.svelte generated by Svelte v3.29.0 */
import {
	SvelteComponent,
	attr,
	binding_callbacks,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal
} from "../../web_modules/svelte/internal.js";

import * as d3 from "../../web_modules/d3.js";
import { onMount } from "../../web_modules/svelte.js";

function create_fragment(ctx) {
	let div;

	return {
		c() {
			div = element("div");
			attr(div, "height", /*height*/ ctx[0]);
			attr(div, "width", /*width*/ ctx[1]);
			attr(div, "class", "chart");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			/*div_binding*/ ctx[5](div);
		},
		p(ctx, [dirty]) {
			if (dirty & /*height*/ 1) {
				attr(div, "height", /*height*/ ctx[0]);
			}

			if (dirty & /*width*/ 2) {
				attr(div, "width", /*width*/ ctx[1]);
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div);
			/*div_binding*/ ctx[5](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let el;
	let { values } = $$props;
	let { height } = $$props;
	let { margin } = $$props;
	let { width } = $$props;

	const maths = (w, h, values) => {
		const radius = Math.min(w, h) / 2 - margin;
		const pie = d3.pie().value(d => d.value);
		const data = pie(d3.entries(values));

		// Rotate 45 degrees forward
		data.forEach(wedge => {
			wedge.endAngle = wedge.endAngle + Math.PI / 4;
			wedge.startAngle = wedge.startAngle + Math.PI / 4;
		});

		return { data, pie, radius };
	};

	const elPath = () => d3.select(el);
	const svgPath = () => elPath().select("svg");
	const gPath = () => svgPath().select("g");
	const whateverPath = () => gPath().selectAll("whatever");
	const adjustSize = (path, w, h) => path.attr("width", w).attr("height", h);
	const transformSize = (path, w, h) => path.attr("transform", `translate(${w / 2},${h / 2})`);

	const enter = (path, data, radius) => {
		path.data(data).enter().append("path").attr("d", d3.arc().innerRadius(0).outerRadius(radius)).attr("fill", d => color(d.data.key)).attr("stroke", "black").style("stroke-width", "0px");
	};

	const renderGraph = (data, radius) => {
		adjustSize(svgPath(), width, height);
		transformSize(gPath(), width, height);
		enter(whateverPath(), data, radius);
	};

	onMount(() => {
		elPath().append("svg").append("g");

		if (width && height) {
			const { data, radius } = maths(width, height, percentages);
			renderGraph(data, radius);
		}
	});

	function div_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			el = $$value;
			$$invalidate(2, el);
		});
	}

	$$self.$$set = $$props => {
		if ("values" in $$props) $$invalidate(3, values = $$props.values);
		if ("height" in $$props) $$invalidate(0, height = $$props.height);
		if ("margin" in $$props) $$invalidate(4, margin = $$props.margin);
		if ("width" in $$props) $$invalidate(1, width = $$props.width);
	};

	let percentages;
	let colors;
	let color;

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*values*/ 8) {
			$: $$invalidate(6, percentages = values.map(value => value.percentageUSD
			? value.percentageUSD
			: value.percentage));
		}

		if ($$self.$$.dirty & /*values*/ 8) {
			$: $$invalidate(7, colors = values.map(({ color }) => color));
		}

		if ($$self.$$.dirty & /*percentages, colors*/ 192) {
			$: $$invalidate(8, color = d3.scaleOrdinal().domain(percentages).range(colors));
		}

		if ($$self.$$.dirty & /*width, height, percentages*/ 67) {
			$: (() => {
				// TODO: Why does this not resize down??
				if (width && height) {
					const { data, radius } = maths(width, height, percentages);
					renderGraph(data, radius);
				}
			})();
		}
	};

	return [height, width, el, values, margin, div_binding];
}

class AllocationChart extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			values: 3,
			height: 0,
			margin: 4,
			width: 1
		});
	}
}

export default AllocationChart;