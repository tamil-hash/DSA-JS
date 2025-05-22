// solution 1
// const sumZero = (sortedArr) => {
// 	const len = sortedArr.length;
// 	for (let i = 0; i < len - 1; i++) {
// 		for (let j = i + 1; j < len; j++) {
// 			if (sortedArr[i] + sortedArr[j] === 0) return [sortedArr[i], sortedArr[j]];
// 		}
// 	}
// };

// solution 2
// multi pointers pattern
// const sumZero = (sortedArr) => {
// 	let left = 0;
// 	let right = sortedArr.length - 1;

// 	while (left < right) {
// 		const sum = sortedArr[left] + sortedArr[right];
// 		if (sum === 0) {
// 			return [sortedArr[left], sortedArr[right]];
// 		}
// 		if (sum > 0) {
// 			right--;
// 		} else if (sum < 0) {
// 			left++;
// 		} else {
// 			left++;
// 			right--;
// 		}
// 	}
// };

// console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3,3]
// console.log(sumZero([-2, 0, 1,2, 3])); //undefined
// console.log(sumZero([1, 2, 3])); //undefined

// count unique values from sorted array
// solution 1
// const countUniqueValues = (arr) => {
// 	return new Set(arr).length;
// }

// solution 2
// using multi pointers pattern
const countUniqueValues = (arr) => {
	const arrLen = arr.length;
	if(arrLen === 0) return 0;
	let i = 0;
	for (let j = 1; j < arrLen; j++) {
		if (arr[i] !== arr[j]) {
			i++;
			arr[i] = arr[j];
		}
	}
	return i + 1;
};

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
