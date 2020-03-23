https://leetcode.com/explore/interview/card/facebook/5/array-and-strings/3010/

/**
 * @param {string} s
 * @return {number}
 */

var romanToDecimal = {
  I:             1,
  V:             5,
  X:             10,
  L:             50,
  C:             100,
  D:             500,
  M:             1000
}

var romanToInt = function(s) {
  let answer = 0;
  let idx = 0;

  while (idx < s.length) {
    const curerntDigit = s[idx];
    const nextDigit = s[idx + 1];

    if (curerntDigit === 'I') {
      if (nextDigit === 'V') {
        answer += 4;
        idx += 2;
        continue
      }
      if (nextDigit === 'X') {
        answer += 9;
        idx += 2;
        continue
      }
    }

    if (curerntDigit === 'X') {
      if (nextDigit === 'L') {
        answer += 40;
        idx += 2;
        continue
      }
      if (nextDigit === 'C') {
        answer += 90;
        idx += 2;
        continue
      }
    }

    if (curerntDigit === 'C') {
      if (nextDigit === 'D') {
        answer += 400;
        idx += 2;
        continue
      }
      if (nextDigit === 'M') {
        answer += 900;
        idx += 2;
        continue
      }
    }

    answer += romanToDecimal[curerntDigit];
    idx++;
  }

  return answer;
};

console.log(romanToInt("III"));
console.log(romanToInt("IV"));
console.log(romanToInt("LVIII"));
