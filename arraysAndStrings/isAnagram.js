/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const assert = require("assert");

var isAnagram = function (s, t) {
	const sortedS = s.split("").sort().join("");
	const sortedT = t.split("").sort().join("");

	console.log("s", s);
	console.log("sortedS", sortedS);
	console.log("t", t);
	console.log("sortedT", sortedT);

	return sortedS === sortedT;
};

var anagram2 = (s, t) => {
	const wordCount = {};
	let anagram = true;

	s.split("").forEach((char) => {
		if (wordCount[char]) {
			wordCount[char] = wordCount[char] + 1;
		} else {
			wordCount[char] = 1;
		}
	});

	t.split("").forEach((char) => {
		if (wordCount[char]) {
			wordCount[char] = wordCount[char] - 1;
		} else {
			wordCount[char] = 1;
		}
	});

	return Object.values(wordCount).every((val) => val === 0);
};

assert.equal(anagram2("hello", "olelh"), true);
assert.equal(anagram2("a", "ab"), false);
