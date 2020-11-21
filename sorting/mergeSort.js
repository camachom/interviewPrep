const mergeSort = array => {
  if (array.length < 2) {
    return array;
  }

  const pivot = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, pivot));
  const right = mergeSort(array.slice(pivot));

  let i = 0;
  let j = 0;
  const merged = [];
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      merged.push(left[i]);
      i++;
    } else {
      merged.push(right[j]);
      j++;
    }
  }

  return merged.concat(left.slice(i), right.slice(j));
};

const merge = (array, start, pivot, end) => {
  const left = array.slice(start, pivot + 1);
  const right = array.slice(pivot + 1, end + 1);

  let i = 0;
  let j = 0;
  let k = start;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      array[k] = left[i];
      i++;
    } else {
      array[k] = right[j];
      j++;
    }
    k++;
  }

  while (i < left.length) {
    array[k] = left[i];
    k++;
    i++;
  }

  while (j < right.length) {
    array[k] = right[j];
    k++;
    j++;
  }
};

const realMergeSort = (array, start = 0, end = array.length) => {
  if (start < end) {
    const pivot = Math.floor((start + end) / 2);
    realMergeSort(array, start, pivot);
    realMergeSort(array, pivot + 1, end);

    merge(array, start, pivot, end);
  }
};

const arr = [-9, 28, -9, 23, 8, 37, 2];
realMergeSort(arr);
console.log(arr);
