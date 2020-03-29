// /**
//  * @param {string} num1
//  * @param {string} num2
//  * @return {string}
//  */
//
// const digitsToNumbers = {
//   "1": 1,
//   "2": 2,
//   "3": 3,
//   "4": 4,
//   "5": 5,
//   "6": 6,
//   "7": 7,
//   "8": 8,
//   "9": 9,
//   "0": 0
// };
//
// const convertDigitsToNums = nums => {
//   let integer = 0;
//   let power = 0;
//
//   for (var i = nums.length - 1; i >= 0; i--) {
//     integer += Math.pow(10, power) * digitsToNumbers[nums[i]];
//     power++;
//   }
//
//   return integer;
// };
//
// var multiply = function(num1, num2) {
//   return convertDigitsToNums(num1) * convertDigitsToNums(num2) + "";
// };

const multiply = (num1, num2) => {
  const answer = Array(num1.length + num2.length).fill(0);

  for (var i = num1.length - 1; i >= 0; i--) {
    for (var j = num2.length - 1; j >= 0; j--) {
      const mult = Number(num1[i]) * Number(num2[j]) + answer[i + j + 1];

      const result = mult % 10;
      const carry = Math.floor(mult / 10);

      answer[i + j + 1] = result;
      answer[i + j] += carry;
    }
  }

  for (var i = 0; i < answer.length; i++) {
    if (answer[i] !== 0) {
      return answer.slice(i).join("");
    }
  }

  return "0";
};

console.log(multiply("123", "456"));
