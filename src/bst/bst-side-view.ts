import { printTree, TreeNode } from "./utilities";

function rightSideView(root: TreeNode | null): number[] {
  const result: number[] = [];
  if (!root) return result;

  const queue: TreeNode[] = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()!;

      if (i === levelSize - 1) {
        result.push(node.val);
      }

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return result;
}

export function rightSideViewDBG(){
  
  const tests = [
    {
      input: new TreeNode(1, new TreeNode(2, null, new TreeNode(5)), new TreeNode(3, null, new TreeNode(4))),
      result: [1, 3, 4]
    },
    {
      input: new TreeNode(1, new TreeNode(2, new TreeNode(4)), new TreeNode(3)),
      result: [1, 3, 4]
    },
    {
      input: null,
      result: []
    }
  ];
  
  tests.forEach((test, index) => {
    const result = rightSideView(test.input);
    if (JSON.stringify(result) === JSON.stringify(test.result)) {
      console.log(`${index} success`);
    } else {
      console.log(`${index} fail`);
      console.log(`expected ${test.result}`);
      console.log(`got ${result}`);
    }
    printTree(test.input)
  });
}