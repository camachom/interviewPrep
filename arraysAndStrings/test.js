var twoSum = function (nums, target) {
	const availableNums = nums.reduce((acc, curr, idx) => {
		acc[curr] = idx;
		return acc;
	}, {});

	let idx = 0;
	const solutions = [];
	while (idx < nums.length) {
		const diff = target - nums[idx];
		const targetIdx = availableNums[diff];

		if (targetIdx >= 0 && targetIdx !== idx) {
			solutions.push([idx, targetIdx]);
		}

		idx++;
	}

	return solutions;
};

var threeSum = function (nums) {
	// a + b + c = 0
	let idx = 0;
	let solutions = [];

	while (idx < nums.length) {
		const target = nums[idx] * -1;
		const possibleSolution = twoSum(nums.slice(idx + 1), target);

		if (possibleSolution.length) {
      possibleSolution.forEach((solution) => solution.push(idx));
      possibleSolution.forEach(solution => solution.map(i) => nums[i])
			solutions.push(possibleSolution);
		}

		idx++;
	}

	return solutions;
};
