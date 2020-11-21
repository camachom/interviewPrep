/**
 * @param {string} s
 * @return {number}
 */
var assert = require("assert");

var firstUniqChar = function (s) {
  const dict = {};

  s.split("").forEach((letter) => {
    const count = dict[letter];
    if (count) {
      dict[letter] = count + 1;
    } else {
      dict[letter] = 1;
    }
  });

  for (let index = 0; index < s.length; index++) {
    const element = s[index];

    if (dict[element] === 1) {
      return index;
    }
  }

  return -1;
};

assert.equal(firstUniqChar("hello"), 0);
assert.equal(firstUniqChar("hhhhhaaaaolll"), 9);
