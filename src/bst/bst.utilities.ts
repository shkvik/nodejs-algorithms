import 'reflect-metadata';
import { TreeNode } from ".";


function _printTree(
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
    if (node.right) {
      _printTree(node.left, childPrefix, true, node.right !== null);
    }
    if (node.left) {
      _printTree(node.right, childPrefix, false, false);
    }
  }
}

export function printTree(node: TreeNode): void {
  if (node === null) {
    console.log(`BST null`)
    return;
  };
  console.log('BST ' + node.val);
  const childPrefix = "    ";
  if (node.left || node.right) {
    if (node.left) {
      _printTree(node.left, childPrefix, true, node.right !== null);
    }
    if (node.right) {
      _printTree(node.right, childPrefix, false, false);
    }
  }
}