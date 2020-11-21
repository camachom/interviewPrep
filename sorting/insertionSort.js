const insert = (nums, rightIndex, value) => {
  for (var i = rightIndex; i > 0 && nums[i] > value; i--) {
    nums[i + 1] = nums[i];
  }

  nums[i + 1] = value;
};

const insertionSort = nums => {
  for (var i = 1; i < nums.length; i++) {
    insert(nums, i - 1, nums[i]);
  }

  return nums;
};

console.log(insertionSort([-99, 0, 5, 23, 5]));
