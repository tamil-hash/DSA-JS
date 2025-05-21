const { calcPerformance, n } = require("./calcPerformance");

/**
 * time complexity - O(1)
 * @param {*} n
 * @returns total of n
 */
const add2 = (n) => {
	return (n * (n + 1)) / 2;
};

calcPerformance(() => {
	add2(n);
}, "add2");
