/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

const assert = require("assert");

const maxDepth = (root, depth = 1) => {
	console.log("root", root);
	console.log("depth", depth);

	if (!root) {
		return 0;
	}

	if (!root.left && !root.right) {
		return depth;
	}

	let leftDepth = 0;
	let rightDepth = 0;
	if (root.left) {
		leftDepth = maxDepth(root.left, depth + 1);
	}

	if (root.right) {
		rightDepth = maxDepth(root.right, depth + 1);
	}

	return Math.max(leftDepth, rightDepth);
};

function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

const right1 = new TreeNode(3);
const left1 = new TreeNode(89);
const root = new TreeNode(8, left1, right1);

assert.equal(maxDepth(root), 2);
