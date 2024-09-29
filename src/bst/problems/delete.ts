import { printTree, TreeNode } from "../utilities";

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (!root) {
    return null;
  }
  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  }
  else if (key > root.val) {
    root.right = deleteNode(root.right, key);
  }
  else {
    if (!root.left) {
      return root.right;
    }
    else if (!root.right) {
      return root.left;
    }

    let minNode = root.right;
    while (minNode.left) {
      minNode = minNode.left;
    }
    root.val = minNode.val;
    root.right = deleteNode(root.right, minNode.val);
  }
  return root;
}

function deleteNodeDBG() {
  const tests = [
    {
      input: { root: new TreeNode(5, new TreeNode(3, new TreeNode(2), new TreeNode(4)), new TreeNode(6, null, new TreeNode(7))), key: 3 },
      result: new TreeNode(5, new TreeNode(4, new TreeNode(2)), new TreeNode(6, null, new TreeNode(7)))
    },
    {
      input: { root: new TreeNode(5, new TreeNode(3), new TreeNode(6, null, new TreeNode(7))), key: 5 },
      result: new TreeNode(6, new TreeNode(3), new TreeNode(7))
    }
  ];

  tests.forEach((test, index) => {
    console.log(`init tree`)
    printTree(test.input.root)
    const result = deleteNode(test.input.root, test.input.key);
    const success = JSON.stringify(result) === JSON.stringify(test.result);
    if (success) {
      console.log(`result`)
      printTree(test.input.root)
      console.log(`${index} success`);
    } else {
      console.log(`${index} fail`);
      console.log(`expected ${test.result}`);
      console.log(`got ${result}`);
    }
    console.log(`-------------------`)
  });
}