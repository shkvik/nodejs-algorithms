import { createBinaryTree, TreeNode } from "./utilities";

/**
 * @problem
 * [872. Leaf-Similar Trees](https://leetcode.com/problems/leaf-similar-trees)
 */
function leafSimilar(root1: TreeNode, root2: TreeNode): boolean {
  const getLeafs = (root: TreeNode): number[] => {
    if (!root.left && !root.right) {
      return [root.val];
    }
    const left = root.left ? getLeafs(root.left) : [];
    const right = root.right ? getLeafs(root.right) : [];
    return [...left, ...right];
  }
  const root1Leafs = getLeafs(root1).join('#');
  const root2Leafs = getLeafs(root2).join('#');
  return root1Leafs === root2Leafs;
};

export function leafSimilarDBG() {
  const tests = [
    {
      input: {
        root1: createBinaryTree([3, 5, 1, 6, 2, 9, 8, null, null, 7, 4]),
        root2: createBinaryTree([3, 5, 1, 6, 7, 4, 2, null, null, null, null, null, null, 9, 8])
      },
      result: true
    },
    {
      input: {
        root1: createBinaryTree([1, 2, 3]),
        root2: createBinaryTree([1, 3, 2])
      },
      result: false
    },
    {
      input: {
        root1: createBinaryTree([1]),
        root2: createBinaryTree([1])
      },
      result: true
    },
  ];

  tests.forEach((test, index) => {
    const output = leafSimilar(test.input.root1, test.input.root2);
    const success = output === test.result;
    if (success) {
      console.log(`${index} success`);
    } else {
      console.log(`${index} fail`);
      console.log(`expected ${test.result}`);
      console.log(`got ${output}`);
    }
  });
}
