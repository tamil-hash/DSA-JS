// 1. write a function called maxSubArraySum which accepts an array of integers
// and  a number called num. The function should calculate the maximum sum of num
// consecutive  elements in an array.

// solution 1
// const maxSubArraySum = (arr, num) => {
// 	const arrLen = arr.length;

// 	if (num > arrLen) {
// 		return null;
// 	}

// 	let largeNumber = -Infinity;
// 	for (let i = 0; i <= arrLen - num; i++) {
// 		let count = arr[i];
// 		if (num > 1) {
// 			for (let j = i + 1; j < i + num; j++) {
// 				count += arr[j];
// 			}
// 		}
// 		if (count > largeNumber) {
// 			largeNumber = count;
// 		}
// 	}
// 	return largeNumber;
// };

// solution 2
// using sliding window pattern
const maxSubArraySum = (arr, num) => {
	const arrLen = arr.length;
	if (num > arrLen) {
		return null;
	}
	let max = 0;

	for (let i = 0; i < num; i++) {
		max += arr[i];
	}
	let temp = 0;

	for (let i = num; i < arrLen; i++) {
		temp -= arr[i - num];
		temp += arr[i];
		if (temp > max) {
			max = temp;
		}
	}
	return max;
};

console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubArraySum([4, 2, 1, 6], 1));
console.log(maxSubArraySum([4, 2, 1, 6, 2], 4));
console.log(maxSubArraySum([], 4));
console.log(maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
