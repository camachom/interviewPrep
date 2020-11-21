/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      for (var j = 0; j < i; j++) {
        // find first zero
        if (nums[j] === 0) {
          nums[j] = nums[i];
          nums[i] = 0;
        }
      }
    }
  }

  return nums;
};

const moveZeroes = nums => {
  let firstNonZero = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[firstNonZero] = nums[i];
      firstNonZero++;
      console.log("ids", firstNonZero);
      console.log("firstNonZero", nums[firstNonZero]);
      console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    }
  }

  // for (var j = firstNonZero; j < nums.length; j++) {
  //   nums[j] = 0;
  // }

  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
