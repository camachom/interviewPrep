function sortScores(unorderedScores, highestPossibleScore) {
  // Sort the scores in O(n) time
  const scores = unorderedScores.reduce((acc, val) => {
    if (acc[val]) {
      acc[val] += 1;
    } else {
      acc[val] = 1;
    }
    return acc;
  }, {});

  const sortedScores = [];
  for (var i = highestPossibleScore; i >= 0; i--) {
    if (scores[i]) {
      for (var j = 0; j < scores[i]; j++) {
        sortedScores.push(i);
      }
    }
  }

  return sortedScores;
}

// Tests

let desc = "no scores";
let actual = sortScores([], 100);
let expected = [];
assertEqual(JSON.stringify(actual), JSON.stringify(expected), desc);

desc = "one score";
actual = sortScores([55], 100);
expected = [55];
assertEqual(JSON.stringify(actual), JSON.stringify(expected), desc);

desc = "two scores";
actual = sortScores([30, 60], 100);
expected = [60, 30];
assertEqual(JSON.stringify(actual), JSON.stringify(expected), desc);

desc = "many scores";
actual = sortScores([37, 89, 41, 65, 91, 53], 100);
expected = [91, 89, 65, 53, 41, 37];
assertEqual(JSON.stringify(actual), JSON.stringify(expected), desc);

desc = "repeated scores";
actual = sortScores([20, 10, 30, 30, 10, 20], 100);
expected = [30, 30, 20, 20, 10, 10];
assertEqual(JSON.stringify(actual), JSON.stringify(expected), desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
