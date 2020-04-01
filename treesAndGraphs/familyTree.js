// We’re working on assembling a Game of Thrones family tree.
//
// Example:
//
//      Mad King         Rickard
//      /     \          /    \
// Daenerys  Rhaegar  Lyanna  Ned  Catelyn
//               \    /         \  /
//                 Jon          Arya
//
//
// Write a function that returns three collections:
// -People who have no parents represented in our data
// -People who only have 1 parent represented
// -People who have 2 parents represented
//
// Sample input:
//
// familyGroups = [
//     (‘Ned’, ‘Arya’), (‘Rhaegar’, ‘Jon’), (‘Lyanna’, ‘Jon’), (‘Catelyn’, ‘Arya’),
//     (‘Mad King’, ‘Rhaegar’), (‘Rickard’, ‘Lyanna’), (‘Mad King’, ‘Daenerys’), (‘Rickard’, ‘Ned’)]
//
// Sample output:
// [[‘Mad King’, ‘Rickard’, Catelyn], -- No parents
// [‘Daenerys’, ‘Rhaegar’, ‘Lyanna’, ‘Ned’], -- One parent
// [‘Jon’, ‘Arya’]] -- Two parents

const familyGroups = [
  ["Ned", "Arya"],
  ["Rhaegar", "Jon"],
  ["Lyanna", "Jon"],
  ["Catelyn", "Arya"],
  ["Mad King", "Rhaegar"],
  ["Rickard", "Lyanna"],
  ["Mad King", "Daenerys"],
  ["Rickard", "Ned"]
];

const familyTree = familyGroups => {
  // build a child -> parents hash
  const parentsByChild = familyGroups.reduce((acc, [parent, child]) => {
    if (acc[child]) {
      acc[child] += 1;
    } else {
      acc[child] = 1;
    }

    return acc;
  }, {});

  // include people without parents
  familyGroups.forEach(([parent, child]) => {
    if (!parentsByChild[parent]) {
      parentsByChild[parent] = 0;
    }
  });

  // build output
  let parentCollection = [[], [], []];
  for (const child of Object.keys(parentsByChild)) {
    if (parentsByChild[child] === 0) {
      parentCollection[0].push(child);
    } else if (parentsByChild[child] === 1) {
      parentCollection[1].push(child);
    } else {
      parentCollection[2].push(child);
    }
  }

  return parentCollection;
};

console.log(familyTree(familyGroups));
