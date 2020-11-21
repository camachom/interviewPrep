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
 * @return {number[][]}
 */
var levelOrder = function (root) {
	if (!root) {
		return [];
	}

	const nodes = [[root.val]];
	let parents = [root];
	let siblings = [];

	while (parents.length > 0) {
		console.log("parents", parents);
		console.log("siblings", siblings);

		// get all the siblings
		parents.forEach((node) => {
			if (node && node.left) {
				siblings.push(node.left);
			}
			if (node && node.right) {
				siblings.push(node.right);
			}
		});

		// push all the sibling values into nodes
		if (siblings.length > 0) {
			nodes.push(
				siblings.map((n) => {
					if (n) {
						return n.val;
					}
				})
			);
		}

		// now the siblings are the new parents
		parents = siblings;
		siblings = [];
	}
	return nodes;
};

const orderHelper = (node, level, levels) => {
	if (level === levels.length) {
		levels.push([]);
	}

	levels[level].push(node.val);

	if (node.left) {
		orderHelper(node.left, level + 1, levels);
	}

	if (node.right) {
		orderHelper(node.right, level + 1, levels);
	}
};

const recursiveLevelOrder = (root) => {
	if (!root) {
		return [];
	}

	const levels = [];
	orderHelper(root, 0, levels);

	return levels;
};
