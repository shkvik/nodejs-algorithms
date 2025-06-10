import { TreeNode } from "./utilities";

function goodNodes(root: TreeNode): number {
  let result = 0;
  const dfs = (node: TreeNode, far: number) => {
    if (node.val >= far) {
      result++;
    }
    if (node.right) {
      dfs(node.right, Math.max(node.val, far));
    }
    if (node.left) {
      dfs(node.left, Math.max(node.val, far));
    }
  }
  dfs(root, -Infinity)
  return result;
};