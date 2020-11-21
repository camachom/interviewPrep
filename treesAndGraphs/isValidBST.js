/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

// var isValidBST = function(root, min = null, max = null) {
//   if (!root) {
//     return true;
//   }
//
//   if (min !== null && root.val <= min) {
//     return false;
//   }
//
//   if (max !== null && root.val >= max) {
//     return false;
//   }
//
//   return (
//     isValidBST(root.left, min, root.val) &&
//     isValidBST(root.right, root.val, max)
//   );
// };

const isValidBST = root => {
  const nodes = [];
  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();
    nodes.push(node);

    if (node.right) {
      queue.push(node.right);
    }
    if (node.left) {
      queue.push(node.left);
    }
  }

  return nodes;
};
