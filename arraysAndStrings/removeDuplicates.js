/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let uniqueIdx = 0;
  let duplicateIdx = 1;

  while (duplicateIdx < nums.length) {
    if (nums[duplicateIdx] === nums[uniqueIdx]) {
      duplicateIdx++;
      continue;
    }

    uniqueIdx++;
    nums[uniqueIdx] = nums[duplicateIdx];
    duplicateIdx++;
  }

  return uniqueIdx + 1;
};

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
