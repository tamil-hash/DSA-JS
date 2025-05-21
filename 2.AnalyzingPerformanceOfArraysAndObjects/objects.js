/**
 * Big O of objects
 */

const a = {
	name: "Tamil",
	age: "25",
	notNeeded: "false",
};

/**
 * doing Operations with key will always have Big O Notation - O(1) because we directly get access to the key's value
 * Insertion - O(1)
 * Removal - O(1)
 * Access - O(1)
 */

a.company = "Raw Engineering";

delete a.notNeeded;

console.log(a.name);

/**
 * doing operation with value will always have Big O Notation - O(n)
 * because we don't have direct access to the value and we need to search one by one values in the object.
 * Searching - O(n)
 */

function searchLetter(letter) {
	return Object.values(a).filter((value) => value.match(letter));
}

console.log(searchLetter("Raw"));

console.log(Object.keys(a));
console.log(Object.entries(a));
