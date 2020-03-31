// https://leetcode.com/problems/palindrome-number/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    return new String(x).split('').reverse().join('') === new String(x).valueOf()
};

console.log(isPalindrome(898));
console.log(isPalindrome(896666));
console.log(isPalindrome(66666));
