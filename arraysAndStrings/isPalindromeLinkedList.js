// https://leetcode.com/problems/palindrome-linked-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (!head) {
    return true;
  }

  const values = [];
  let node = head;
  while (node) {
    values.push(node.val);
    node = node.next;
  }

  return values.join('') === values.reverse().join('');
};

class Node {
  constructor (val) {
    this.val = val;
    this.next = null;
  }

  setNext(next) {
    this.next = next;
  }
}

const head = new Node(1)
head.setNext(new Node(2));

console.log(head, isPalindrome(head));
