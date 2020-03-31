/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const anagrams = {};
  strs.forEach(word => {
    const key = word
      .split("")
      .sort()
      .join("");

    if (anagrams[key]) {
      anagrams[key].push(word);
    } else {
      anagrams[key] = [word];
    }
  });

  return Object.values(anagrams);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
