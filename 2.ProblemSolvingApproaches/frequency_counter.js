console.log("frequeny  counter with array/n================")

const frequencyCounter = (value) => {
	let fc = {};
	for (const single of value) {
		fc[single] = (fc[single] || 0) + 1;
	}
	return fc;
};

const sameMethod1 = (arr1, arr2) => {
	if (arr1.length !== arr2.length) {
		return false;
	}

	let fc1 = frequencyCounter(arr1),
		fc2 = frequencyCounter(arr2);

	for (const key in fc1) {
		if (!(key * key) in fc2) {
			return false;
		} else if (fc1[key] !== fc2[key * key]) {
			return false;
		}
	}
	return true;
};

const sameMethod2 = (arr1, arr2) => {
	if (arr1.length !== arr2.length) {
		return false;
	}

	let fc2 = frequencyCounter(arr2);

	for (const key of arr1) {
		if(!fc2[key * key]){
      return false;
    }
    fc2[key * key] -= 1;
	}
	return true;
};

const same = (...args) => {
  if(true){
    return sameMethod2(...args);
  }else{
    return sameMethod1(...args);
  }
}

console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([1, 2, 3], [1, 9]));
console.log(same([1, 2, 1], [4, 4, 1]));



console.log("frequeny  counter with string/n================")

const validAnagram = (str1, str2) => {
  if(str1.length !== str2.length) {
    return false;
  }
  const fc1 = frequencyCounter(str1);

  for(const key of str2){
    if(!fc1[key]){
      return false;
    }
    fc1[key] -= 1;
  }
  return true;
}

console.log(validAnagram('', '')) // true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram("rat","car")) // false
console.log(validAnagram('awesome', 'awesom')) // false
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')) // false
console.log(validAnagram('qwerty', 'qeywrt')) // true
console.log(validAnagram('texttwisttime', 'timetwisttext')) // true