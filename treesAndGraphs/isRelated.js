// Since there are so few people alive, we’re trying to play matchmaker for our favorite characters. Given the fluid nature of relationships, we need a way to tell if two people share a common house or ancestor in their lineage.
//
//                House Stark
//                     |
// House Tully      Rickard
//    /   \          /  \
// Lysa  Catelyn   Ned Lyanna
//  |       \      /      |
// Robin      Sansa      Jon
//
// familyMembers1 = [
//     (‘House Tully’, ‘Lysa’), (‘Lysa’, ‘Robin’), (‘House Tully’, ‘Catelyn’), (‘Catelyn’, ‘Sansa’), (‘Ned’, ‘Sansa’), (‘Rickard’, ‘Ned’),
//     (‘House Stark’, ‘Rickard’), (‘Rickard’, ‘Lyanna’), (‘Lyanna’, ‘Jon’)
// ]
//
// Write a function that takes the graph, as well as two of the individuals in our dataset as inputs and returns true if they share at least one ancestor or house in their lineage.
//
// Sample input and output:
//
// isRelated(familyMembers1, ‘Sansa’, ‘Jon’) => true
// isRelated(familyMembers1, ‘Sansa’, ‘Robin’) => true
// isRelated(familyMembers1, ‘Catelyn’, ‘Ned’) => false
// isRelated(familyMembers1, ‘Rickard’, ‘Jon’) => true
// isRelated(familyMembers1, ‘House Tully’, ‘House Stark’) => false

let familyMembers1 = [
  ["House Tully", "Lysa"],
  ["Lysa", "Robin"],
  ["House Tully", "Catelyn"],
  ["Catelyn", "Sansa"],
  ["Ned", "Sansa"],
  ["Rickard", "Ned"],
  ["House Stark", "Rickard"],
  ["Rickard", "Lyanna"],
  ["Lyanna", "Jon"]
];

const isRelated = (familyGroups, person1, person2) => {
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

  const ancestors = new Set();
  let peopleToCheck = [...parentsByChild[person1], ...parentsByChild[person2]];

  while (peopleToCheck.length > 0) {
    const ancestor = peopleToCheck.pop();
    if (ancestors.has(ancestor)) {
      return true;
    }

    ancestors.add(ancestor);
    peopleToCheck = peopleToCheck.concat(parentsByChild[ancestor]);
  }

  return false;
};

console.log(isRelated(familyMembers1, "Sansa", "Jon"));
console.log(isRelated(familyMembers1, "Sansa", "Robin"));
console.log(isRelated(familyMembers1, "Catelyn", "Ned"));
console.log(isRelated(familyMembers1, "Rickard", "Jon"));
console.log(isRelated(familyMembers1, "House Tully", "House Stark"));
