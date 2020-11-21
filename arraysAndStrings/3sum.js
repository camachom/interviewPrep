var twoSum = function (nums, target) {
	let idx = 0;
	const solutions = [];
	const availableNums = {};
	while (idx < nums.length) {
		const diff = target - nums[idx];
		const targetIdx = availableNums[diff];

		if (targetIdx > 0) {
			solutions.push([diff, nums[idx]]);
			availableNums[diff] -= 1;
		} else {
			availableNums[nums[idx]]
				? (availableNums[nums[idx]] += 1)
				: (availableNums[nums[idx]] = 1);
		}

		idx++;
	}

	return solutions;
};

// console.log(twoSum([3, 4, 5, 2, 3], 6));

var threeSum = function (nums) {
	// a + b + c = 0
	let idx = 0;
	const solutions = [];
	const solutionsSet = {};

	while (idx < nums.length) {
		const target = nums[idx] * -1;
		const possibleSolution = twoSum(nums.slice(idx + 1), target);

		if (possibleSolution.length) {
			possibleSolution.map((solution) => {
				solution.push(nums[idx]);
				const sortedSolution = solution.sort((a, b) => a - b);
				if (!solutionsSet[`${sortedSolution[0]},${sortedSolution[2]}`]) {
					solutions.push(sortedSolution);
					solutionsSet[`${sortedSolution[0]},${sortedSolution[2]}`] = true;
				}
			});
		}

		idx++;
	}

	return solutions;
};
