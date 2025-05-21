const { calcPerformance, n } = require("./calcPerformance");

const add2 = (n) => {
	return (n * (n + 1)) / 2;
};

calcPerformance(() => {
	add2(n);
}, "add2");
