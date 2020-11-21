const minIdx = (array, idx) => {
  let minIdx = idx;
  while (idx < array.length) {
    if (array[idx] < array[minIdx]) {
      minIdx = idx;
    }
    idx++;
  }

  return minIdx;
};

const selectionSort = nums => {
  for (var i = 0; i < nums.length; i++) {
    // find index of min
    const min = minIdx(nums, i);
    // swap values
    const temp = nums[min];
    nums[min] = nums[i];
    nums[i] = temp;
  }

  return nums;
};

console.log(selectionSort([3, 8, 3, 7, 22, 8, 11, 11]));
