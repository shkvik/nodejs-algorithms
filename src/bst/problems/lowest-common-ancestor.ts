import { printTree } from "..";
import { TreeNode } from "../bst.structure";

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  if (root === null || root === p || root === q) {
    return root;
  }

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (left !== null && right !== null) {
    return root;
  }

  return left !== null ? left : right;
}


export function lowestCommonAncestorDBG() {
  const root = new TreeNode(3, 
    new TreeNode(5, 
      new TreeNode(6), 
      new TreeNode(2, new TreeNode(7), new TreeNode(4))
    ), 
    new TreeNode(1, new TreeNode(0), new TreeNode(8))
  );

  const tests = [
    {
      input: {
        root,
        p: root.left, // Узел с значением 5
        q: root.right // Узел с значением 1
      },
      result: 3
    },
    {
      input: {
        root,
        p: root.left, // Узел с значением 5
        q: root.left?.right?.right // Узел с значением 4
      },
      result: 5
    }
  ];

  tests.forEach((test, index) => {
    const result = lowestCommonAncestor(test.input.root, test.input.p, test.input.q);
    if (result?.val === test.result) {
      console.log(`${index} success`);
    } else {
      console.log(`${index} fail`);
      console.log(`expected ${test.result}`);
      console.log(`got ${result?.val}`);
    }
    printTree(root)
  });
}