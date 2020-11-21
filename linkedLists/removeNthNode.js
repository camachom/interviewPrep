/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
	const length = lengthOfList(head);
	const nodeIdxDelete = length - n;

	let currentNode = head;
	let currentNodeIdx = 1;

	while (currentNodeIdx < nodeIdxDelete) {
		currentNode = currentNode.next;
		currentNodeIdx++;
	}

	if (currentNode) {
		currentNode.next = currentNode.next.next;
	}

	return head;
};

const lengthOfList = (head) => {
	let length = 0;
	let node = head;
	while (node) {
		length++;
		node = node.next;
	}

	return length;
};
