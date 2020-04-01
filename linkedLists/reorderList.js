/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// var reorderList = function(head) {
//   let currentNode = head;
//   let resultNode;
//   let previousNode;
//
//   while (currentNode) {
//     console.log(currentNode.val);
//
//     if (resultNode) {
//       resultNode.next = currentNode;
//       resultNode = resultNode.next;
//       currentNode = currentNode.next;
//     } else {
//       resultNode = currentNode;
//       currentNode = currentNode.next;
//     }
//
//     if (!currentNode || !currentNode.next) {
//       resultNode.next = currentNode;
//     } else {
//       // go to the end of the list
//       while (currentNode.next) {
//         previousNode = currentNode;
//         currentNode = currentNode.next;
//       }
//
//       // make the next node the last node
//       const tempRef = resultNode.next;
//       resultNode.next = currentNode;
//       currentNode = tempRef;
//       // end the list to avoid loops
//       previousNode.next = null;
//
//       resultNode = resultNode.next;
//     }
//   }
// };

const reorderList = head => {
  if (!head || !head.next || !head.next.next) {
    return head;
  }

  let fast = head.next;
  let slow = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  const secondHalf = slow.next;
  slow.next = null;

  const reversedList = reverseList(secondHalf);
  let l1 = head;
  let l2 = reversedList;

  while (l2) {
    // set the two new nodes in correct order
    const temp = l1.next;
    l1.next = l2;
    l2 = l2.next;
    l1.next.next = temp;
    // continue working through lists
    l1 = temp;
  }
  return head;
};

const reverseList = l => {
  // reverse list
  let curr = l;
  let prev;

  while (curr) {
    const temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  return prev;
};

// Given 1->2->3->4, reorder it to 1->4->2->3.
const testHead = new ListNode(1);
let currNode = testHead;
for (var i = 2; i <= 4; i++) {
  currNode.next = new ListNode(i);
  currNode = currNode.next;
}

console.log(reorderList(testHead));
