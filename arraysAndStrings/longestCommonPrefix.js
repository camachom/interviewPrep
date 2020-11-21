// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"

// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Note:

// All given inputs are in lowercase letters a-z.

/**
 * @param {string[]} strs
 * @return {string}
 */

const assert = require("assert");

// horizontal scanning

const findCommonPrefix = (a, b) => {
	let prefix = "";
	let idx = 0;

	while (idx < a.length && idx < b.length && a[idx] === b[idx]) {
		prefix += a[idx];
		idx++;
	}

	return prefix;
};

const longestCommonPrefix = (strings) => {
	if (strings.length <= 0) {
		return "";
	}

	let currentPrefix = strings[0];

	for (let index = 1; index < strings.length; index++) {
		currentPrefix = findCommonPrefix(currentPrefix, strings[index]);
	}

	return currentPrefix;
};

assert.equal(longestCommonPrefix(["dog", "racecar", "car"]), "");
assert.equal(longestCommonPrefix(["flower", "flow", "flight"]), "fl");

// vertical scanning

const longestCommonPrefix2 = (strings) => {
	if (strings.length <= 0) {
		return "";
	}

	let currentPrefix = "";

	for (let verticalIdx = 0; verticalIdx < strings[0].length; verticalIdx++) {
		const potentialPrefix = strings[0][verticalIdx];
		for (let index = 0; index < strings.length; index++) {
			const word = strings[index];

			if (verticalIdx >= word.length) {
				return currentPrefix;
			}

			if (word[verticalIdx] !== potentialPrefix) {
				return currentPrefix;
			}
		}

		currentPrefix += potentialPrefix;
	}

	return currentPrefix;
};

assert.equal(longestCommonPrefix2(["abcd", "abc"]), "abc");
assert.equal(longestCommonPrefix2(["dog", "racecar", "car"]), "");
assert.equal(longestCommonPrefix2(["flower", "flow", "flight"]), "fl");

// divide and conquer

const commonPrefix = (a, b) => {
	const min = Math.min(a.length, b.length);
	let idx = 0;

	while (idx < min) {
		if (a[idx] !== b[idx]) {
			return a.substring(0, idx);
		}
		idx++;
	}

	return a.substring(0, min);
};

const longestCommonPrefix3 = (strings) => {
	if (!strings || strings.length <= 0) {
		return "";
	}

	return comparePrefixes(strings);
};

const comparePrefixes = (strings, start = 0, end = strings.length - 1) => {
	if (start === end) {
		return strings[start];
	}

	const mid = Math.floor((start + end) / 2);
	const leftPrefix = comparePrefixes(strings, start, mid);
	const rightPrefix = comparePrefixes(strings, mid + 1, end);

	return commonPrefix(leftPrefix, rightPrefix);
};

assert.equal(longestCommonPrefix3(["abcd", "abc"]), "abc");
assert.equal(longestCommonPrefix3(["dog", "racecar", "car"]), "");
assert.equal(longestCommonPrefix3(["flower", "flow", "flight"]), "fl");
