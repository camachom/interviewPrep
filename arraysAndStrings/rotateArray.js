/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var assert = require("assert");

// var rotate = function (nums, k) {
//   const rotatedArray = [];
//   for (let index = 0; index < nums.length; index++) {
//     const rotatedIndex = (index + k) % nums.length;
//     rotatedArray[rotatedIndex] = nums[index];
//   }

//   return rotatedArray;
// };

// const ans = rotate([1, 2, 3, 4], 3);
// console.log(ans);

const rotate2 = (nums, k) => {
  const rotation = k >= nums.length ? nums.length - 1 : k;

  rotateArray(nums);
  rotateArray(nums, 0, rotation - 1);
  rotateArray(nums, rotation, nums.length - 1);

  return nums;
};

const rotateArray = (array, start = 0, end = array.length - 1) => {
  while (start < end) {
    const temp = array[start];
    array[start] = array[end];
    array[end] = temp;

    start++;
    end--;
  }

  return array;
};

assert.deepStrictEqual([5, 4, 3, 2, 1], rotateArray([1, 2, 3, 4, 5]));
assert.deepStrictEqual([4, 3, 2, 1], rotateArray([1, 2, 3, 4]));

assert.deepStrictEqual([3, 4, 1, 2], rotate2([1, 2, 3, 4], 2));
assert.deepStrictEqual([3, 4, 1, 2], rotate2([1, 2, 3, 4], 2));
assert.deepStrictEqual(rotate2([1, 2, 3, 4, 5], 3), [3, 4, 5, 1, 2]);

assert.deepStrictEqual(rotate2([-1], 2), [-1]);
assert.deepStrictEqual(rotate2([-1, 3], 5), [3, -1]);
