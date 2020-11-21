/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

const assert = require("assert");

var merge = function (nums1, m, nums2, n) {
  const nums1Copy = [...nums1];
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < m && j < n) {
    // compare values
    const nums1Val = nums1Copy[i];
    const nums2Val = nums2[j];

    if (nums2Val < nums1Val) {
      nums1[k] = nums2Val;
      j++;
    } else {
      nums1[k] = nums1Val;
      i++;
    }

    k++;
  }

  while (i < m) {
    nums1[k] = nums1Copy[i];
    i++;
    k++;
  }

  while (j < n) {
    nums1[k] = nums2[j];
    j++;
    k++;
  }

  return nums1;
};

const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;

assert.deepStrictEqual(merge(nums1, m, nums2, n), [1, 2, 2, 3, 5, 6]);
