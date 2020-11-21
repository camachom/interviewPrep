const assert = require("assert");

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

const largestElement = (root) => {
	if (!root) {
		throw new Error("Must have at least one node");
	}

	if (root.right) {
		return largestElement(root.right);
	}

	return root;
};

// const root = new BinaryTreeNode(20);
// const left = root.insertLeft(10);
// const right = root.insertRight(30);

// left.insertLeft(5);
// left.insertRight(15);

// right.insertLeft(25);
// right.insertRight(35);

// console.log(largestElement(root));

const findParentLargest = (root) => {
	let node = root;
	let parent = root;

	while (node) {
		if (node.right) {
			parent = node;
			node = node.right;
		} else {
			break;
		}
	}

	return parent;
};

const secondLargest = (root) => {
	if (!root) {
		return {};
	}
	const largest = largestElement(root);

	if (largest.left) {
		return largestElement(largest.left).value;
	}

	return findParentLargest(root).value;
};

const desc = "largest has a left child";
const treeRoot = new BinaryTreeNode(50);
const leftNode = treeRoot.insertLeft(30);
leftNode.insertLeft(10);
leftNode.insertRight(40);
const rightNode = treeRoot.insertRight(70);
rightNode.insertLeft(60);
assert.equal(secondLargest(treeRoot), 60, desc);
