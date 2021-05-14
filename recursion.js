/** product: calculate the product of an array of numbers. */

function product(nums, i = 0, prod = nums[0]) {
	if (i >= nums.length - 1) return prod;

	prod *= nums[i + 1];
	return product(nums, i + 1, prod);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0, length = words[0].length) {
	if (i >= words.length) return length;

	if (words[i].length > length) length = words[i].length;
	return longest(words, i + 1, length);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0, letters = "") {
	if (i >= str.length) return letters;

	if (i % 2 === 0) {
		letters += str[i];
	}
	return everyOther(str, i + 1, letters);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i = 0, pal = true) {
	if (i >= Math.floor(str.length / 2) || !pal) return pal;

	if (str[i] === str[str.length - (i + 1)]) {
		return isPalindrome(str, i + 1);
	} else {
		return isPalindrome(str, i, false);
	}
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
	if (i === arr.length) return -1;

	if (arr[i] === val) return i;

	return findIndex(arr, val, i + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = 0, reversed = "") {
	if (i === str.length) return reversed;
	reversed += str[str.length - (i + 1)];
	return revString(str, i + 1, reversed);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, strings = []) {
	for (const key in obj) {
		if (typeof obj[key] === "object") strings = gatherStrings(obj[key], strings);
		if (typeof obj[key] === "string") strings.push(obj[key]);
	}
	return strings;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, beg = 0, end = arr.length - 1) {
	if (beg <= end) {
		const mid = Math.floor((beg + end) / 2);
		if (arr[mid] === val) {
			return mid;
		} else if (arr[mid] < val) {
			return binarySearch(arr, val, mid + 1, end);
		} else if (arr[mid] > val) {
			return binarySearch(arr, val, beg, mid - 1);
		}
	}
	return -1;
}

module.exports = {
	product,
	longest,
	everyOther,
	isPalindrome,
	findIndex,
	revString,
	gatherStrings,
	binarySearch,
};
