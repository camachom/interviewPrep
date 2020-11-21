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

const root = new BinaryTreeNode(1);
root.insertLeft(2);
root.insertRight(3);

root.left.insertLeft(4);
root.left.insertRight(5);

const getHeight = (node, height = 0, heights = []) => {
	console.log("node", node.value);
	console.log("height", height);

	if (node && !node.right && !node.left) {
		heights.push(height);
		return;
	}

	if (node && node.left) {
		getHeight(node.left, height + 1, heights);
	}

	if (node && node.right) {
		getHeight(node.right, height + 1, heights);
	}
};

const isSuperBalanced = (root) => {
	const leafHeights = [];
	getHeight(root, 0, leafHeights);
	return Math.max(...leafHeights) - Math.min(...leafHeights) <= 1;
};

// console.log(isSuperBalanced(root));

const iterativeSuperBalanced = (root) => {
	const heights = [];
	let parents = [root];
	let siblings = [];

	let currentHeight = 0;

	while (parents.length > 0) {
		parents.forEach((node) => {
			if (node.left) {
				siblings.push(node.left);
			}
			if (node.right) {
				siblings.push(node.right);
			}

			if (!node.right && !node.left) {
				heights.push(currentHeight);
			}
		});

		parents = siblings;
		siblings = [];
		currentHeight++;
	}

	return heights;
};

console.log(iterativeSuperBalanced(root));
