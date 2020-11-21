function findRotationPoint(words) {
  // Find the rotation point in the vector
  let startIdx = 0;
  let endIdx = words.length - 1;

  for (var i = 0; i < words.length; i++) {
    const middle = Math.floor((endIdx - startIdx) / 2) + startIdx;

    const current = words[middle];
    const prev = words[middle - 1];
    const next = words[middle + 1];
    // found our answer
    if (prev && prev > current) {
      return middle;
    } else if (next && current > next) {
      return middle + 1;
    }

    const start = words[startIdx];
    const end = words[endIdx];
    if (current < start) {
      endIdx = middle;
    } else {
      startIdx = middle;
    }
  }

  return "no solution";
}

// Tests

let desc = "small array";
let actual = findRotationPoint(["cape", "cake"]);
let expected = 1;
assertEquals(actual, expected, desc);

desc = "medium array";
actual = findRotationPoint(["grape", "orange", "plum", "radish", "apple"]);
expected = 4;
assertEquals(actual, expected, desc);

desc = "large array";
actual = findRotationPoint([
  "ptolemaic",
  "retrograde",
  "supplant",
  "undulate",
  "xenoepist",
  "asymptote",
  "babka",
  "banoffee",
  "engender",
  "karpatka",
  "othellolagkage"
]);
expected = 5;
assertEquals(actual, expected, desc);

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
