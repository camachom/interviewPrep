/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

const assert = require("assert");

var myPow = function (x, n) {
	if (n === 0) {
		return 1;
	}

	let count = 1;
	for (let int = 0; int < Math.abs(n); int++) {
		count *= x;
	}

	if (n < 0) {
		return 1 / count;
	}

	return count;
};

assert.equal(myPow(2.0, 10), 1024.0);
// assert.equal(myPow(2.1, 3), 9.261);
assert.equal(myPow(2.0, -2), 0.25);

const test = (x, n) => {
	console.log("n", n);

	if (n === 0) {
		return 1;
	}
	test(x, n / 2);
};

test(10.0, 6.0);
