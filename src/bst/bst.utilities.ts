import 'reflect-metadata';
import { TreeNode } from ".";


export function printTree(
  node: TreeNode | null,
  prefix: string = "",
  isLeft: boolean = true,
  hasRightSibling: boolean = false
): void {
  if (node === null) return;
  const currentPrefix = prefix + (isLeft ? (hasRightSibling ? "├── " : "└── ") : "└── ");
  console.log(currentPrefix + node.val);
  const childPrefix = prefix + (isLeft ? (hasRightSibling ? "│   " : "    ") : "    ");
  if (node.left || node.right) {
    if (node.left) {
      printTree(node.left, childPrefix, true, node.right !== null);
    }
    if (node.right) {
      printTree(node.right, childPrefix, false, false);
    }
  }
}

export function printTreeV2(
  node: TreeNode | null,
  prefix: string = "",
  isLeft: boolean = true,
  hasRightSibling: boolean = false
): void {
  try {
    if (node === null) return;
    let currentPrefix = prefix + (isLeft ? (hasRightSibling ? "├── " : "└── ") : "└── ")
    if (Reflect.getMetadata('isRoot', node) || false) {
      currentPrefix = 'BST ';
    }
    console.log(currentPrefix + node.val);
    const childPrefix = prefix + (isLeft ? (hasRightSibling ? "│   " : "    ") : "    ");
    if (node.left || node.right) {
      if (node.left) {
        printTree(node.left, childPrefix, true, node.right !== null);
      }
      if (node.right) {
        printTree(node.right, childPrefix, false, false);
      }
    }
  }
  catch (err) {

  }

}


export function testPrintTree(node: TreeNode | null) {
  if(node){
    Reflect.defineMetadata('isRoot', true, node);
    printTreeV2(node);
  } else {
    console.log(`BST null`)
  }
}