import { createBinaryTree, TreeNode } from "./utilities";

/**
 * @problem
 * [437. Path Sum III](https://leetcode.com/problems/path-sum-iii)
 */
function pathSum(root: TreeNode, targetSum: number): number {
  let count = 0;
  const h = new Map<number, number>([[0, 1]]);

  const preorder = (node: TreeNode, curr: number) => {
    if (!node) return;

    curr += node.val;
    count += h.get(curr - targetSum) ?? 0;

    h.set(curr, (h.get(curr) ?? 0) + 1);

    preorder(node.left, curr);
    preorder(node.right, curr);

    h.set(curr, h.get(curr) - 1);
  };
  preorder(root, 0);
  return count;
}

export function pathSumIIIDBG() {
  const tests = [
    {
      input: {
        root: createBinaryTree([10, 5, -3, 3, 2, null, 11, 3, -2, null, 1]),
        targetSum: 8,
      },
      result: 3,
    },
    {
      input: {
        root: createBinaryTree([
          5,
          4,
          8,
          11,
          null,
          13,
          4,
          7,
          2,
          null,
          null,
          5,
          1,
        ]),
        targetSum: 22,
      },
      result: 3,
    },
    {
      input: {
        root: createBinaryTree([1, -2, -3, 1, 3, -2, null, -1]),
        targetSum: -1,
      },
      result: 4,
    },
  ];

  tests.forEach((test, index) => {
    const count = pathSum(test.input.root, test.input.targetSum);
    const success = count === test.result;
    if (success) {
      console.log(`${index} success`);
    } else {
      console.log(`${index} fail`);
      console.log(`expected ${test.result}`);
      console.log(`got ${count}`);
    }
  });
}
