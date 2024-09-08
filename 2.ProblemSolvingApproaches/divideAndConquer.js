// search a number in the sorted array and return index if not found return ``-1``

// solution 1
// straight forward

// const search = (arr, num) => {
// 	const len = arr.length;

// 	for (let i = 0; i < len; i++) {
// 		if (arr[i] === num) {
// 			return i;
// 		}
// 	}
// 	return -1;
// };


// solution 2
// using divide and conquer method binary search
/**
 * Pseudo code
 * 
 */
const search = (arr, num) => {
  const clonedArr = [...arr];
  const len = clonedArr.length;

  let f = -1
  while(len > 0){
    
  }
}


console.log(search([1, 2, 3, 4, 5, 6, 8, 10, 13, 16, 65], 16));
console.log(search([1, 2, 3, 4, 5, 6, 8, 10, 13, 16, 65], 18));
