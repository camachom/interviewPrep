/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

 // iterative
var reverseList = function(head) {
  const node = head;
  const prevNode = null;

  while (node) {
    // save next node, so you dont lose it
    const next = node.next;
    // reverse pointer
    node.next = prevNode;
    // increment previous to current node
    prevNode = node;
    // increment node to next node or null at end of list
    node = next;
  }

  return reverseList;
};

// recursive
var reverseList = function(head, prevNode = null) {
  if (!head) {
    return null;
  }

  const next = head.next;
  head.next = prevNode;
  return reverseList(next, head);
};
