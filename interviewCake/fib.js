const assert = require("assert");

class Fib {
	constructor() {
		this.memo = {};
	}

	getFib(num) {
		if (num === 0) {
			return 0;
		}

		if (num === 1) {
			return 1;
		}

		if (this.memo[num]) {
			console.log("memo", this.memo);
			return this.memo[num];
		}

		const result = this.getFib(num - 1) + this.getFib(num - 2);
		this.memo[num] = result;
		return result;
	}
}

const fib = (n) => {
	if (n === 0 || n === 1) {
		return n;
	}

	let nMinus1 = 0;
	let nMinus2 = 1;
	let current;

	let counter = 0;
	while (counter < n) {
		current = nMinus1 + nMinus2;
		nMinus2 = nMinus1;
		nMinus1 = current;

		counter++;
	}

	return current;
};

assert.equal(fib(2), 1);
assert.equal(fib(3), 2);
assert.equal(fib(4), 3);
assert.equal(fib(5), 5);
