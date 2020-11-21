/**
 * @param {number[]} digits
 * @return {number[]}
 */

const assert = require("assert");

var plusOne = function (digits) {
  const digitsString = digits.join("");
  const num = parseInt(digitsString) + 1;

  return num
    .toString(10)
    .split("")
    .map((digit) => {
      return parseInt(digit);
    });
};

const plusOne2 = (digits) => {
  let sum = 1;
  for (let index = digits.length - 1; index >= 0; index--) {
    const element = digits[index];

    if (element + sum >= 10) {
      digits[index] = (element + sum) % 10;
    } else {
      digits[index] = element + sum;
      sum = 0;
    }
  }

  if (sum > 0) {
    digits.unshift(1);
  }

  return digits;
};

assert.deepStrictEqual(plusOne2([1, 2, 3]), [1, 2, 4]);
assert.deepStrictEqual(plusOne2([3, 5, 9]), [3, 6, 0]);
