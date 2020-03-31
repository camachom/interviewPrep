// https://leetcode.com/problems/string-to-integer-atoi/

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  let digits = str.trim().split(' ')[0];
  let sign = 1;
  let startIdx = 0;
  let endIdx = 0;

  for (var i = 0; i < digits.length; i++) {
    const digit = digits[i];

    if (i === 0 && digit === '-') {
      sign = -1;
      startIdx = true;
      continue;
    }

    if (i === 0 && digit === '+') {
      sign = 1;
      startIdx = true;
      continue;
    }

    if (digits.charCodeAt(i) < 48 || digits.charCodeAt(i) > 57) {
      endIdx = i;
      break;
    }
  }

  const answer = (Number(digits.substring(startIdx, endIdx || digits.length)) || 0) * sign;

  if (answer >= Math.pow(2, 31)) {
    return Math.pow(2, 31) - 1;
  } else if (answer <= Math.pow(-2, 31)) {
    return Math.pow(-2, 31);
  } else {
    return answer;
  }
};
