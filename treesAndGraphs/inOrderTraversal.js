/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root, nodes = []) {
  if (!root) {
    return nodes;
  }

  if (root.left) {
    inorderTraversal(root.left, nodes);
  }

  if (root.val) {
    nodes.push(root.val);
  }

  if (root.right) {
    inorderTraversal(root.right, nodes);
  }

  return nodes;
};

var inorderTraversal = function(root) {
  const stack = [];
  const nodes = [];
  let currentNode = root;

  while (stack.length > 0 || currentNode) {
    while (currentNode) {
      stack.push(currentNode);
      currentNode = currentNode.left;
    }

    currentNode = stack.pop();
    nodes.push(currentNode.val);
    currentNode = currentNode.right;
  }

  return nodes;
};
