import { printTree, TreeNode } from "./bst";


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

// tests.forEach((test, index) => {
//   const result = insertIntoBST(test.input.root, test.input.val);
//   const success = JSON.stringify(result) === JSON.stringify(test.result);
//   if (success) {
//     console.log(`${index} success`);
//   } else {
//     console.log(`${index} fail`);
//     console.log(`expected ${test.result}`);
//     console.log(`got ${result}`);
//   }
//   printTree(result)
// });

const tree = new TreeNode(
  50,
  new TreeNode(
    30,
    new TreeNode(
      20,
      new TreeNode(
        10,
        null,
        new TreeNode(15)
      ),
      new TreeNode(
        25,
        null,
        new TreeNode(27)
      )
    ),
    new TreeNode(
      40,
      new TreeNode(
        35,
        new TreeNode(32),
        new TreeNode(37)
      ),
      new TreeNode(45)
    )
  ),
  new TreeNode(
    70,
    new TreeNode(
      60,
      new TreeNode(
        55,
        null,
        new TreeNode(57)
      ),
      new TreeNode(65)
    ),
    new TreeNode(
      90,
      new TreeNode(
        85,
        new TreeNode(82),
        new TreeNode(87)
      ),
      new TreeNode(
        95,
        null,
        new TreeNode(97)
      )
    )
  )
);

printTree(tree);