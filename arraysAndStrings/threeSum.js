/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const solutions = [];
  nums.sort((a, b) => a - b);

  for (var i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    solutions.push(...twoSum(nums, nums[i] * -1, i));
  }

  return solutions;
};

var twoSum = function(nums, target, idx) {
  let endIdx = nums.length - 1;
  let startIdx = idx;
  const results = [];

  while (startIdx < endIdx) {
    const sum = nums[startIdx] + nums[endIdx];

    if (sum === target && idx !== startIdx && idx !== endIdx) {
      results.push([nums[idx], nums[startIdx], nums[endIdx]]);

      while (startIdx < endIdx && nums[startIdx] === nums[startIdx + 1]) {
        startIdx++;
      }
      while (startIdx < endIdx && nums[endIdx] === nums[endIdx - 1]) {
        endIdx--;
      }

      startIdx++;
      endIdx--;
    } else if (sum > target) {
      endIdx--;
    } else {
      startIdx++;
    }
  }

  return results;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 0, 0, 0]));
