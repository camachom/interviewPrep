// We’re trying to figure out who the original White Walker was. Zombies have no names so we’ve given each one a unique (string) id.
//
//           14a
//            |
//   2q       4v
//   |     /  |  \
//   3f   5d  8s  9e
//  / \   / \      \
// 15e  6z   7v    11b
//
// Write a function that takes in the white walker family group and a single zombie in our tree. Return that zombie’s furthest ancestor. A zombie cannot be an ancestor of themselves. Return null or -1 if the zombie has no known ancestors.
//
// Sample input and output:
//
// walkerFamily = [
//     ("2q", "3f"), ("3f", "15e"), ("3f", "6z"), ("5d", "6z"), ("5d", "7v"),
//     ("4v", "5d"), ("4v", "8s"), ("4v", "9e"), ("9e", "11b"), ("14a", "4v")
// ]
//
// findEarliestAncestor(walkerFamily, "8s") => 14a
// findEarliestAncestor(walkerFamily, "7v") => 14a
// findEarliestAncestor(walkerFamily, "6z") => 14a
// findEarliestAncestor(walkerFamily, "15e") => 2q
// findEarliestAncestor(walkerFamily, "14a") => null or -1

let walkerFamily = [
  ["2q", "3f"],
  ["3f", "15e"],
  ["3f", "6z"],
  ["5d", "6z"],
  ["5d", "7v"],
  ["4v", "5d"],
  ["4v", "8s"],
  ["4v", "9e"],
  ["9e", "11b"],
  ["14a", "4v"]
];

const findEarliestAncestor = (familyGroups, person) => {
  // build a child -> parents hash
  const parentsByChild = familyGroups.reduce((acc, [parent, child]) => {
    if (acc[child]) {
      acc[child].push(parent);
    } else {
      acc[child] = [parent];
    }

    return acc;
  }, {});

  // include people without parents
  familyGroups.forEach(([parent, child]) => {
    if (!parentsByChild[parent]) {
      parentsByChild[parent] = [];
    }
  });

  // recursively set the depth of each ancestor
  const setAncestorLevel = (person, level = 0, ancestors = {}) => {
    ancestors[person] = level;
    level += 1;

    const parents = parentsByChild[person];
    if (parents && parents.length > 0) {
      parents.forEach(parent => {
        setAncestorLevel(parent, level, ancestors);
      });
    }

    return ancestors;
  };

  let max = 0;
  let earliestAncestor = null;
  for (const [ancestor, depth] of Object.entries(setAncestorLevel(person))) {
    if (depth > max) {
      max = depth;
      earliestAncestor = ancestor;
    }
  }

  return earliestAncestor;
};

console.log(findEarliestAncestor(walkerFamily, "8s"));
console.log(findEarliestAncestor(walkerFamily, "7v"));
console.log(findEarliestAncestor(walkerFamily, "6z"));
console.log(findEarliestAncestor(walkerFamily, "15e"));
console.log(findEarliestAncestor(walkerFamily, "14a"));
