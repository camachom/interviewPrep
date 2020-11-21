/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

var isPalindrome = function (head) {
	const elements = [];

	let currentNode = head;
	while (currentNode) {
		elements.push(currentNode.val);

		currentNode = currentNode.next;
	}

	let startIdx = 0;
	let endIdx = elements.length - 1;

	while (startIdx < endIdx) {
		if (elements[startIdx] !== elements[endIdx]) {
			return false;
		}

		startIdx++;
		endIdx--;
	}

	return true;
};
