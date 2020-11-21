const assert = require("assert");

const twoSum2 = (nums, target = 0) => {
	let start = 0;
	let end = nums.length - 1;

	while (start < end) {
		const localTarget = nums[start] + nums[end];
		if (localTarget === target) {
			return [start + 1, end + 1];
		} else if (localTarget < target) {
			start++;
		} else if (localTarget > target) {
			end--;
		} else {
			throw new Error("no solution");
		}
	}

	throw new Error("no solution");
};

assert.deepEqual(twoSum2([2, 7, 11, 15], 9), [1, 2]);
