// https://leetcode.com/problems/longest-palindromic-substring/

/**
 * @param {string} s
 * @return {string}
 */

 const isPalindrome = chars => {

   for (var startIdx = 0; startIdx < chars.length; startIdx++) {
     const endIdx = chars.length - 1 - startIdx;
     if (startIdx === endIdx) {
       return true;
     }

     if (startIdx >= endIdx) {
       return true;
     }

     if (chars[startIdx] !== chars[endIdx]) {
       return false
     }
   }

 }

 // brute force around n^3, too slow and not accepted without dynamic programming
var longestPalindrome = function(s) {
  let palindrome = '';

  for (var i = 0; i < s.length; i++) {
    for (var j = 0; j < s.length; j++) {
      const substring = s.substring(i, j + 1);
      if (isPalindrome(substring) && substring.length > palindrome.length) {
        palindrome = substring;
      }
    }
  }

  return palindrome;
};

// brute force around n^3
var longestPalindrome2 = function(s) {
  if (!s) {
    return '';
  }

  let start = 0;
  let end = 0;

  for (var i = 0; i < s.length; i++) {
    const oddPalindrome = expandAroundCenter(s, i, i)
    if (oddPalindrome > end - start) {
      start = i - Math.floor(oddPalindrome / 2)
      end = i + Math.floor(oddPalindrome / 2)
    }

    const evenPalindrome = expandAroundCenter(s, i, i + 1)
    if (evenPalindrome > end - start) {
      start = i + 1 - (evenPalindrome / 2)
      end = i + (evenPalindrome / 2)
    }
  }

  return s.substring(start, end + 1);
};

var expandAroundCenter = (chars, left, right) => {
  let startIdx = left;
  let endIdx = right;

  while (startIdx >= 0 && endIdx < chars.length && chars[startIdx] === chars[endIdx]) {
    startIdx--;
    endIdx++;
  }

  return endIdx - startIdx - 1;
}

console.log(longestPalindrome2('racecar'));
console.log(longestPalindrome2('abbc'));
