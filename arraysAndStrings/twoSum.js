// https://leetcode.com/problems/two-sum/
// assumes sorted array and one solution

var twoSum = function (nums, target) {
	nums.sort((a, b) => a - b);

	let endIdx = nums.length - 1;
	let startIdx = 0;
	while (startIdx <= endIdx) {
		const sum = nums[startIdx] + nums[endIdx];
		if (sum === target) {
			return [nums[startIdx], nums[endIdx]];
		} else if (sum > target) {
			endIdx--;
		} else {
			startIdx++;
		}
	}

	return [];
};

// console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
