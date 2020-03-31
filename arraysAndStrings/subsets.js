/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
  let steps = 0;
  let currentCount = num;
  while (currentCount !== 0) {
    if (currentCount % 2 === 0) {
      currentCount = currentCount / 2
      steps += 1
    } else {
      currentCount = currentCount - 1
      steps += 1
    }
  }
  return steps
};

// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var subsets = function(nums) {
//   let sets = [[]]
//   nums.forEach(num => {
//     const subs = sets.map(set => {
//       return [...set, num]
//     })
//     sets = sets.concat(subs)
//   })
//   return sets
// };
//
// console.log(subsets([1, 2, 3]));

var subsets = function(nums) {
  const powerSet = []
  const backtrack = (first = 0, curr = []) => {
    if (curr.length === lenghtOfSubset) {
      powerSet.push([...curr])
      return
    }
    for (var j = first; j < nums.length; j++) {
      curr.push(nums[j])
      backtrack(j + 1, curr)
      curr.pop()
    }
  }
  for (var lenghtOfSubset = 0; lenghtOfSubset <= nums.length; lenghtOfSubset++) {
    backtrack()
  }
  return powerSet
}

// console.log(subsets([1, 2, 3, 4]));

var subsets2 = function(nums) {
  const powerSet = []
  const backtrack = (first = 0, curr = []) => {
    if (curr.length === lenghtOfSubset) {
      powerSet.push([...curr])
      return
    }
    const addedInts = new Set()
    for (var j = first; j < nums.length; j++) {
      if (!addedInts.has(nums[j])) {
        curr.push(nums[j])
        addedInts.add(nums[j])
      }
      backtrack(j + 1, curr)
      curr.pop()
    }
  }
  for (var lenghtOfSubset = 0; lenghtOfSubset <= nums.length; lenghtOfSubset++) {
    backtrack()
  }
  return powerSet
}

console.log(subsets2([1, 2, 2]));
