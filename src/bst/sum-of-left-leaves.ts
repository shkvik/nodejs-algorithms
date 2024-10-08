import { TreeNode } from "./utilities";

function sumOfLeftLeaves(root: TreeNode | null): number {
  let result = 0;
  const traversal = (node: TreeNode, isLeft: boolean) => {
    if (!node) return 0;

    result += isLeft && !node?.left && !node?.right ? node.val : 0;

    traversal(node.left, true);
    traversal(node.right, false);
  }
  traversal(root, false);
  return result;

};