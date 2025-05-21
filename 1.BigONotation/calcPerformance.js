module.exports.calcPerformance = (fn, fnName) => {
	const t1 = performance.now();
	fn();
	const t2 = performance.now();
	console.log(`${fnName}: Time elapsed: ${(t2 - t1) / 1000} seconds`);
	performance.clearMeasures();
};

module.exports.n = 100000000;
