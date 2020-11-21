/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let digits = n.toString(10);
  const numbersChecked = new Set();
  let continueChecking = true;

  while (continueChecking) {
    digits = digits
      .split("")
      .map((digit) => {
        return Math.pow(parseInt(digit), 2);
      })
      .reduce((acc, curr) => {
        acc += curr;
        return acc;
      }, 0)
      .toString(10);

    if (numbersChecked.has(digits)) {
      return false;
    } else if (parseInt(digits) === 1) {
      continueChecking = false;
    } else {
      numbersChecked.add(digits);
    }
  }

  return true;
};

const hello = "djsjdjdsjs"
console.log(isHappy(19));
