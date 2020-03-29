/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let startIdx = 0;
  let endIdx = s.length;

  let substring = "";

  while (startIdx < endIdx) {
    if (s.slice(startIdx, endIdx).includes(t)) {
      substring = s.slice(startIdx, endIdx);
      startIdx++;
    } else {
      endIdx--;
    }
  }

  return substring;
};

console.log(minWindow("ADOBECODEBANC", "ABC"));
