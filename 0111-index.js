/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
   if (!root) {
   return 0;
  }
  const left = minDepth(root.left);
  const right = minDepth(root.right);
  return (left && right ? Math.min(left, right) : left + right) + 1;
};


