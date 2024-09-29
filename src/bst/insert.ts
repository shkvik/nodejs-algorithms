import { printTree, TreeNode } from "./utilities";

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  if (!root) {
    return new TreeNode(val);
  }
  if (val < root.val) {
    root.left = insertIntoBST(root.left, val);
  } else {
    root.right = insertIntoBST(root.right, val);
  }
  return root;
}


function testInsertIntoBST() {
  const tests = [
    {
      input: {
        root: new TreeNode(4, new TreeNode(2), new TreeNode(7)),
        val: 5
      },
      result: new TreeNode(4, new TreeNode(2), new TreeNode(7, new TreeNode(5)))
    },
    {
      input: {
        root: new TreeNode(4, new TreeNode(2), new TreeNode(7)),
        val: 1
      },
      result: new TreeNode(4, new TreeNode(2, new TreeNode(1)), new TreeNode(7))
    }
  ];

  tests.forEach((test, index) => {
    const result = insertIntoBST(test.input.root, test.input.val);
    const success = JSON.stringify(result) === JSON.stringify(test.result);
    if (success) {
      console.log(`${index} success`);
    } else {
      console.log(`${index} fail`);
      console.log(`expected ${test.result}`);
      console.log(`got ${result}`);
    }
    printTree(result)
  });

}