function hasPalindromePermutation(theString) {
  // Check if any permutation of the input is a palindrome
  const charCount = theString.split("").reduce((acc, val) => {
    if (acc[val]) {
      acc[val] += 1;
    } else {
      acc[val] = 1;
    }
    return acc;
  }, {});

  const odds = Object.values(charCount).filter(val => val % 2 !== 0);

  // if even
  if (theString.length % 2 === 0 && odds.length > 0) {
    return false;
  }

  // if odd
  if (theString.length % 2 !== 0 && odds.length !== 1) {
    return false;
  }

  return true;
}

// Tests

let desc = "permutation with odd number of chars";
assertEqual(hasPalindromePermutation("aabcbcd"), true, desc);

desc = "permutation with even number of chars";
assertEqual(hasPalindromePermutation("aabccbdd"), true, desc);

desc = "no permutation with odd number of chars";
assertEqual(hasPalindromePermutation("aabcd"), false, desc);

desc = "no permutation with even number of chars";
assertEqual(hasPalindromePermutation("aabbcd"), false, desc);

desc = "empty string";
assertEqual(hasPalindromePermutation(""), true, desc);

desc = "one character string ";
assertEqual(hasPalindromePermutation("a"), true, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
