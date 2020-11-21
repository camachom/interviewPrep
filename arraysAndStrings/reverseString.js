/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

const assert = require("assert");

var reverseString = function (s) {
	let startIdx = 0;
	let endIdx = s.length - 1;

	while (startIdx < endIdx) {
		const temp = s[startIdx];

		s[startIdx] = s[endIdx];
		s[endIdx] = temp;

		startIdx++;
		endIdx--;
	}
};

assert.deepStrictEqual(reverseString(["h", "e", "l", "l", "o"]), [
	"o",
	"l",
	"l",
	"e",
	"h",
]);
