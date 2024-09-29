import { printTree, TreeNode } from "./utilities";

function isValidBST(root: TreeNode | null, min?: number, max?: number): boolean {
  const currentVal = root?.val;
  const leftVal = root?.left?.val;
  const rightVal = root?.right?.val;

  if (leftVal !== undefined) {
    if (currentVal! <= leftVal) return false;
    if (min && min >= leftVal) return false;
    if (root?.left && !isValidBST(root.left, min, currentVal)) return false;
  }
  if (rightVal !== undefined) {
    if (currentVal! >= rightVal) return false;
    if (max && max <= rightVal) return false;
    if (root!.right && !isValidBST(root!.right, currentVal, max)) return false;
  }

  return true;
}

export function isValidBSTDBG(){
  const tests = [
    {
      input: new TreeNode(2, new TreeNode(1), new TreeNode(3)),
      result: true
    },
    {
      input: new TreeNode(5, new TreeNode(1), new TreeNode(4, new TreeNode(3), new TreeNode(6))),
      result: false
    },
    {
      input: null,
      result: true
    }
  ];
  
  tests.forEach((test, index) => {
    const result = isValidBST(test.input);
    if (result === test.result) {
      console.log(`${index} success got ${result}`);
    } else {
      console.log(`${index} fail`);
      console.log(`expected ${test.result}`);
      console.log(`got ${result}`);
    }
    printTree(test.input);
    console.log()
  });
}