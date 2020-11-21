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
 * @return {boolean}
 */

const assert = require("assert");

const compareTree = (root1, root2) => {
	if (root1.val !== root2.val) {
		return false;
	}

	if (root1.left || root2.right) {
		if (root1.left && !root2.right) {
			return false;
		}

		if (root2.right && !root1.left) {
			return false;
		}

		if (root1.left.val !== root2.right.val) {
			return false;
		}
	}

	if (root1.right || root2.left) {
		if (root1.right && !root2.left) {
			return false;
		}

		if (root2.left && !root1.right) {
			return false;
		}

		if (root1.right.val !== root2.left.val) {
			return false;
		}
	}

	return true;
};

var isSymmetric = function (root) {
	if (!root) {
		return true;
	}
	console.log("!!!!!!!!!!!!!!!!");
	console.log(root.val);
	console.log("!!!!!!!!!!!!!!!!");

	if (!root.left && !root.right) {
		return true;
	}

	if (root.left && root.right) {
		const symmetrical = compareTree(root.left, root.right);
		console.log("!!!!!!!!!!!!!!!!");
		console.log("symmetrical", symmetrical);
		console.log("!!!!!!!!!!!!!!!!");

		let left;
		let right;
		if (symmetrical) {
			left = isSymmetric(root.left);
			right = isSymmetric(root.right);

			return left && right;
		}

		return false;
	}

	return true;
};

function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

const root = new TreeNode(
	1,
	new TreeNode(2, null, new TreeNode(2, null, null)),
	new TreeNode(2, null, new TreeNode(2, null, null))
);

assert.equal(isSymmetric(root), false);

const tree1 = new TreeNode(
	6,
	new TreeNode(3, null, null),
	new TreeNode(4, null, null)
);

const tree2 = new TreeNode(
	6,
	new TreeNode(3, null, null),
	new TreeNode(5, null, null)
);

assert.equal(compareTree(tree1, tree2), false);

const tree3 = new TreeNode(
	6,
	new TreeNode(4, null, null),
	new TreeNode(3, null, null)
);

const tree4 = new TreeNode(
	6,
	new TreeNode(3, null, null),
	new TreeNode(4, null, null)
);

assert.equal(compareTree(tree3, tree4), true);

const tree5 = new TreeNode(6, new TreeNode(3, null, null), null);

const tree6 = new TreeNode(
	6,
	new TreeNode(3, null, null),
	new TreeNode(4, null, null)
);

assert.equal(compareTree(tree5, tree6), false);
