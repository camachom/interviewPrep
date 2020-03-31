// https://leetcode.com/explore/interview/card/facebook/5/array-and-strings/3012/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// (0, 1, 2, 5, 3, 3, 0)

var nextPermutation = function(nums) {
  // finds the suffix
  let suffixIdx = nums.length - 1;
  while (suffixIdx > 0 && nums[suffixIdx] <= nums[suffixIdx - 1]) {
    suffixIdx--;
  }

  // already greatest permutations
  if (suffixIdx <= 0) {
    nums.sort((a, b) => a - b);
    return;
  }

  // find first number > than pivot to swap
  const pivot = suffixIdx - 1;
  let j = nums.length - 1;
  while (nums[j] <= nums[pivot]) {
    j--;
  }
  const temp = nums[pivot];
  nums[pivot] = nums[j];
  nums[j] = temp;

  // reverse suffix
  let reverseIdx = nums.length - 1;
  while (suffixIdx < reverseIdx) {
    const tempVal = nums[suffixIdx];
    nums[suffixIdx] = nums[reverseIdx];
    nums[reverseIdx] = tempVal;
    suffixIdx++;
    reverseIdx--;
  }
};

console.log(nextPermutation([0, 1, 2, 5, 3, 3, 0]));
