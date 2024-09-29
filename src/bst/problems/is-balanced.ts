import { printTree, TreeNode } from "../utilities";

function isBalanced(root: TreeNode | null): boolean {
  function checkBalance(node: TreeNode | null): number {
    if (!node) {
      return 0;
    }
    const leftHeight = checkBalance(node.left);
    if (leftHeight === -1) return -1;

    const rightHeight = checkBalance(node.right);
    if (rightHeight === -1) return -1;

    if (Math.abs(leftHeight - rightHeight) > 1) {
      return -1;
    }
    return Math.max(leftHeight, rightHeight) + 1;
  }
  return checkBalance(root) !== -1;
}
