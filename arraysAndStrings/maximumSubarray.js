/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let globalSum = nums[0];
  let localSum = nums[0];

  for (var i = 1; i < nums.length; i++) {
    localSum = Math.max(nums[i], nums[i] + localSum);

    if (localSum > globalSum) {
      globalSum = localSum;
    }
  }

  return globalSum;
};
