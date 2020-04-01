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

var isValidBST = function(root, lower, upper) {
  if (!root) {
    return true;
  }

  if (root.left && root.left.val >= root.val) {
    return false;
  }

  if (root.right && root.right.val <= root.val) {
    return false;
  }

  return isValidBST(root.left, root) && isValidBST(root.right, root);
};

// def find_earliest_ancestor(pairs, node):     parent_graph = defaultdict(list)     for parent, child in pairs:         parent_graph[child].append(parent)          earliest_ancestor, max_distance = None, 0     stack = [(node, 0)]     while stack:         current_node, distance = stack.pop()         for parent in parent_graph[current_node]:             if distance + 1 > max_distance:                 earliest_ancestor, max_distance = parent, distance + 1             stack.append((parent, distance + 1))     return earliest_ancestor
