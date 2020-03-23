// https://leetcode.com/problems/reverse-integer/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  if (x === 0) {
    return 0;
  }

  const sign = x < 0 ? -1 : 1;
  let number = x * sign;

  let reversedNumber = 0;
  let i = Math.floor(Math.log10(number));
  let j = 0;

  while (i >= 0) {
    reversedNumber += Math.floor(number / 10 ** i) * 10 ** j;
    number -= Math.floor(number / 10 ** i) * 10 ** i;
    i--;
    j++;
  }

  if (Math.abs(reversedNumber) > 2147483647) {
    return 0;
  }

  return reversedNumber * sign;
};

// doent work for negatives but more to get the idea of popping and pushing with numbers
var reverse2 = function(x) {
  let reversedNumber = 0;
  while (x !== 0) {
    const pop = x % 10;
    x = Math.floor(x / 10);
    reversedNumber = reversedNumber * 10 + pop;
  }
  return reversedNumber;
};

console.log(reverse2(-980));
console.log(reverse2(983));
console.log(reverse2(8));
console.log(reverse2(8234));
