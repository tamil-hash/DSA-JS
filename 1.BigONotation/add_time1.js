const { calcPerformance, n } = require("./calcPerformance");

/**
 * time complexity - O(n)
 * @param {*} n 
 * @returns total of n
 */
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
