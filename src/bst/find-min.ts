import { TreeNode } from "./utilities";

function findMin(root: TreeNode | null): number | null {
  if (!root) {
    return null;
  }
  while (root.left) {
    root = root.left;
  }
  return root.val;
}
