/**
 * @param {number} n
 * @return {boolean}
 */
const assert = require("assert");

var isPowerOfThree = function (n) {
	let currentNum = 1;
	while (currentNum < n) {
		currentNum *= 3;
	}

	currentNum === n;
};

assert.equal(isPowerOfThree(27), true);
assert.equal(isPowerOfThree(-38), false);
assert.equal(isPowerOfThree(0), false);
assert.equal(isPowerOfThree(333), true);
assert.equal(isPowerOfThree(121), false);
