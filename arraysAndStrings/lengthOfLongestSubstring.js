// https://leetcode.com/problems/longest-substring-without-repeating-characters/
/**
 * @param {string} s
 * @return {number}
 */

 // brute force approach, but using a has to check for uniques
var lengthOfLongestSubstring = function(s) {
  let longestSubstring = 0;
  let usedChars = {};

  for (var startIdx = 0; startIdx < s.length; startIdx++) {
    for (var currentIdx = startIdx; currentIdx < s.length; currentIdx++) {
      const char = s[currentIdx];
      if (!usedChars[char]) {
        usedChars[char] = true;

        const subStringLength = s.substring(startIdx, currentIdx + 1).length;
        if (longestSubstring < subStringLength) {
          longestSubstring = subStringLength;
        }
      } else {
        usedChars = {};
        break;
      }
    }
  }

  return longestSubstring;
};

// sliding window approach
var lengthOfLongestSubstring2 = s => {
  let longestSubstring = 0;
  let usedChars = {};
  let startIdx = 0;
  let currentIdx = 0;

  while (startIdx < s.length && currentIdx < s.length) {
    const char = s[currentIdx];
    if (!usedChars[char] && usedChars[char] !== 0) {
      usedChars[char] = currentIdx;

      const subStringLength = s.substring(startIdx, currentIdx + 1).length;
      if (longestSubstring < subStringLength) {
        longestSubstring = subStringLength;
      }
      currentIdx++;
    } else {
      startIdx = usedChars[char] + 1;
      usedChars = {};
      currentIdx = startIdx;
    }
  }

  return longestSubstring;
};

console.log(lengthOfLongestSubstring2("abcabcbb"));
console.log(lengthOfLongestSubstring2("bbbbbbb"));
console.log(lengthOfLongestSubstring2("pwwkew"));
console.log("dvdf", lengthOfLongestSubstring2("dvdf"));
console.log("au", lengthOfLongestSubstring2("au"));
console.log(" ", lengthOfLongestSubstring2(" "));
