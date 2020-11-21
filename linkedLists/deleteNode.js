/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

const assert = require("assert");

var deleteNode = function (node, prevNode = {}) {
	if (!node.next) {
		prevNode.next = null;
		return;
	}

	node.val = node.next.val;

	deleteNode(node.next, node);
};
