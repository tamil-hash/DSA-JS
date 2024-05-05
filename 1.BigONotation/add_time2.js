const { calcPerf, n } = require("./calcPerformace");

const add2 = (n) => {
	return (n * (n + 1)) / 2;
};

calcPerf(() => {
	add2(n);
}, "add2");
