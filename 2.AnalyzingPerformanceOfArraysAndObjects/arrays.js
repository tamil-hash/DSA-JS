/**
 * Big O of arrays
 */

const a = [1, 2, 3, 4, 5, 6];

/**
 * Insertion at the end - O(1)
 * Removal at the end - O(1)
 * Accessing - O(1)
 */
a.push(7);
console.log(a);

a.pop();
console.log(a);

console.log(a[2]);

/**
 * Insertion at the beginning - O(n)
 * Removal at the beginning - O(n)
 * search - O(n)
 */

a.unshift(0);
console.log(a);

a.shift();
console.log(a);

console.log(a.find((num) => num === 3));

/**
 * Array Operations
 * push, pop - O(1)
 * shift, unshift, concat, splice, slice, map, filter, reduce, forEach - O(n)
 * sort - O(n log n)
 */
