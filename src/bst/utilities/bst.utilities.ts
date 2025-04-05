import 'reflect-metadata';
import { TreeNode } from ".";


function _printTree(
  node: TreeNode | null,
  prefix: string = "",
  isRight: boolean = true,
  hasLeftSibling: boolean = false
): void {
  if (node === null) return;
  const currentPrefix = prefix + (isRight ? (hasLeftSibling ? "├── " : "└── ") : hasLeftSibling == isRight ?  "└── ": "├── ");
  console.log(currentPrefix + node.val);
  const childPrefix = prefix + (hasLeftSibling ? "│   " : "    ");
  if (node.left || node.right) {
    if (node.right) {
      _printTree(node.right, childPrefix, true, node.left !== null);
    }
    if (node.left) {
      _printTree(node.left, childPrefix, false, false);
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
    if (node.right) {
      _printTree(node.right, childPrefix, true, node.left !== null);
    }
    if (node.left) {
      _printTree(node.left, childPrefix, false, false);
    }
  }
}

export function createBinaryTree(values: (number | null)[]): TreeNode | null {
  if (values.length === 0 || values[0] == null) return null;

  const root = new TreeNode(values[0]);
  const queue: (TreeNode | null)[] = [root];
  let i = 1;

  while (i < values.length) {
    const current = queue.shift();
    if (!current) continue;

    const leftVal = values[i++];
    if (leftVal != null) {
      current.left = new TreeNode(leftVal);
      queue.push(current.left);
    }

    if (i >= values.length) break;

    const rightVal = values[i++];
    if (rightVal != null) {
      current.right = new TreeNode(rightVal);
      queue.push(current.right);
    }
  }

  return root;
}