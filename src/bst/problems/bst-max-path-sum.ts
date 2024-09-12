import { TreeNode } from "../bst.structure";

function maxPathSum(root: TreeNode | null): number {
  let maxSum = -Infinity;

  const maxGain = (node: TreeNode | null): number => {
    if (!node) return 0;

    const leftGain = Math.max(maxGain(node.left), 0);
    const rightGain = Math.max(maxGain(node.right), 0);

    const currentPathSum = node.val + leftGain + rightGain;

    maxSum = Math.max(maxSum, currentPathSum);

    return node.val + Math.max(leftGain, rightGain);
  };

  maxGain(root);
  return maxSum;
}
