const { calcPerformance, n } = require("./calcPerformance");

const add1 = (n) => {
	let o = 0;
	for (let i = 1; i <= n; i++) {
		o += i;
	}
	return o;
};

calcPerformance(() => {
	add1(n);
}, "add1");
