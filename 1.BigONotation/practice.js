/**
 * time complexity - O(n)
 * space complexity - O(1)
 * @param {*} n
 */
function countUpAndDown(n) {
	console.log("Going up!");
	for (var i = 0; i < n; i++) {
		console.log(i);
	}
	console.log("At the top!\nGoing down...");
	for (var j = n - 1; j >= 0; j--) {
		console.log(j);
	}
	console.log("Back down. Bye!");
}

/**
 * time complexity - O(n^2)
 * space complexity - O(1)
 * @param {*} n
 */
function printAllPairs(n) {
	for (var i = 0; i < n; i++) {
		for (var j = 0; j < n; j++) {
			console.log(i, j);
		}
	}
}

/**
 * time complexity - O(log n)
 * space complexity - O(1)
 * @param {*} n
 * @returns count
 */
function numberOfHalves(n) {
	var count = 0;
	while (n > 1) {
		n /= 2;
		count++;
	}
	return count;
}

/**
 *  time complexity - O(n)
 * space complexity - O(1)
 * @param {*} n
 * @returns
 */
function totalNumberOfHalves(n) {
	var total = 0;
	for (var i = 0; i < n; i++) {
		total += numberOfHalves(n);
	}
	return total;
}

/**
 * time complexity - O(n)
 * space complexity - O(1)
 * @param {number} n
 */
function logAtLeast5(n) {
	for (let i = 0; i < Math.max(5, n); i++) {
		console.log(1);
	}
}

/**
 * time complexity - O(1)
 * space complexity - O(1)
 * @param {*} n
 */
function logAtMost5(n) {
	for (let i = 0; i < Math.min(5, n); i++) {
		console.log(1);
	}
}

/**
 * Question 1: Simplify the big O expression as much as possible - O(n + 10)
 * Answer: O(n)
 */

/**
 * Question 2: Simplify the big O expression as much as possible - O(100 * n)
 * Answer: O(n)
 */

/**
 * Question 3: Simply the following big O expression as much as possible - O(25)
 * Answer: O(1)
 */

/**
 * Question 4: Simply the following big O expression as much as possible -  O(n^2 + n^3)
 * Answer: O(n^3)
 */

/**
 * Question 5: Simply the following big O expression as much as possible - O(n + n + n + n)
 * Answer: O(n)
 */

/**
 * Question 6: Determine the time and space complexity for the following function
 * Answer: time complexity: O(n), space complexity: O(1)
 */
function logUpTo(n) {
	for (var i = 1; i <= n; i++) {
		console.log(i);
	}
}

/**
 * Question 7: Determine the time and space complexity for the following function
 * Answer: time complexity: O(1), space complexity: O(1)
 */
function logAtMost10(n) {
	for (var i = 1; i <= Math.min(n, 10); i++) {
		console.log(i);
	}
}

/**
 * Question 8: Determine the time and space complexity for the following function
 * Answer: time complexity: O(n), space complexity: O(1)
 */
function logAtLeast10(n) {
    for (var i = 1; i <= Math.max(n, 10); i++) {
        console.log(i);
    }
}

/**
 * Question 9: Determine the time and space complexity for the following function
 * Answer: time complexity: O(n), space complexity: O(n)
 */
function onlyElementsAtEvenIndex(array) {
    var newArray = Array(Math.ceil(array.length / 2));
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            newArray[i / 2] = array[i];
        }
    }
    return newArray;
}

/**
 * Question 10: Determine the time and space complexity for the following function
 * Answer: time complexity: O(n^2), space complexity: O(n)
 */
function subtotals(array) {
    var subtotalArray = Array(array.length);
    for (var i = 0; i < array.length; i++) {
        var subtotal = 0;
        for (var j = 0; j <= i; j++) {
            subtotal += array[j];
        }
        subtotalArray[i] = subtotal;
    }
    return subtotalArray;
}


/**
 * Logarithms
 * O(log n) - sits between O(1) and O(n) 
 * For ex: when the array is only looped to its half.
 * 
 * O(n log n) - sits between O(n) and O(n^2)
 * For ex: when the array which is nested looped but is only looped to its half.
 */