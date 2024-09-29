import { printTree, TreeNode } from "../utilities";

export namespace Recursion {
  function maxDepth(root: TreeNode | null): number {
    if (!root) return 0;

    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);

    return Math.max(leftDepth, rightDepth) + 1;
  }

  export function maxDepthDBG() {
    const tests = [
      {
        input: new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7))),
        result: 3
      },
      {
        input: new TreeNode(1, null, new TreeNode(2)),
        result: 2
      },
      {
        input: null,
        result: 0
      }
    ];

    tests.forEach((test, index) => {
      const result = maxDepth(test.input);
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
}

export namespace BFS {
  function maxDepth(root: TreeNode | null): number {
    if (root === null) {
      return 0;
    }

    const queue: [TreeNode, number][] = [[root, 1]];
    let maxDepth = 0;

    while (queue.length > 0) {
      const [node, depth] = queue.shift()!;
      maxDepth = Math.max(maxDepth, depth);

      if (node.left) {
        queue.push([node.left, depth + 1]);
      }
      if (node.right) {
        queue.push([node.right, depth + 1]);
      }
    }

    return maxDepth;
  }

  function maxDepthDBG() {
    const tests = [
      {
        input: new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7))),
        result: 3
      },
      {
        input: new TreeNode(1, null, new TreeNode(2)),
        result: 2
      },
      {
        input: null,
        result: 0
      }
    ];

    tests.forEach((test, index) => {
      const result = maxDepth(test.input);
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
}

export namespace Stack {
  function maxDepth(root: TreeNode | null): number {
    if (root === null) return 0;

    const stack: { node: TreeNode, depth: number }[] = [];
    stack.push({ node: root, depth: 1 });

    let maxDepth = 0;

    while (stack.length > 0) {
      const { node, depth } = stack.pop()!;

      maxDepth = Math.max(maxDepth, depth);

      if (node.left !== null) {
        stack.push({ node: node.left, depth: depth + 1 });
      }
      if (node.right !== null) {
        stack.push({ node: node.right, depth: depth + 1 });
      }
    }

    return maxDepth;
  }

}