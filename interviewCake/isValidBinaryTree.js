// Given a binary tree, determine if it is a valid binary search tree (BST).

// Assume a BST is defined as follows:

//     The left subtree of a node contains only nodes with keys less than the node's key.
//     The right subtree of a node contains only nodes with keys greater than the node's key.
//     Both the left and right subtrees must also be binary search trees.

// Example 1:

//     2
//    / \
//   1   3

// Input: [2,1,3]
// Output: true

// Example 2:

//     5
//    / \
//   1   4
//      / \
//     3   6

// Input: [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.

class BinaryTreeNode {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}

	insertLeft(value) {
		this.left = new BinaryTreeNode(value);
		return this.left;
	}

	insertRight(value) {
		this.right = new BinaryTreeNode(value);
		return this.right;
	}
}

const root = new BinaryTreeNode(10);
root.insertLeft(2).insertRight(8);
root.insertRight(8);

const isValidBinaryTree = (node, max, min) => {
	if (!node) {
		return true;
	}

	if (max && node.value >= max) {
		return false;
	}

	if (min && node.value <= min) {
		return false;
	}

	return (
		isValidBinaryTree(node.left, node.value, min) &&
		isValidBinaryTree(node.right, max, node.value)
	);
};

console.log(isValidBinaryTree(root));
