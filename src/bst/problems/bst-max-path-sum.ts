import { printTree, TreeNode } from "../utilities";


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


export function maxPathSumDBG() {
  const tests = [
    {
      input: new TreeNode(1, new TreeNode(2), new TreeNode(3)),
      result: 6
    },
    {
      input: new TreeNode(-10, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7))),
      result: 42
    },
    {
      input: new TreeNode(2, new TreeNode(-1)),
      result: 2
    }
  ];

  tests.forEach((test, index) => {
    const result = maxPathSum(test.input);
    if (result === test.result) {
      console.log(`${index} success`);
    } else {
      console.log(`${index} fail`);
      console.log(`expected ${test.result}`);
      console.log(`got ${result}`);
    }
    printTree(test.input);
    console.log()
  });
}