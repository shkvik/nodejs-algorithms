import 'reflect-metadata';
import { TreeNode } from ".";


function _printTree(
  node: TreeNode | null,
  prefix: string = "",
  isRight: boolean = true,
  hasLeftSibling: boolean = false
): void {
  if (node === null) return;

  // Определяем текущий префикс для текущего узла
  const currentPrefix = prefix + (isRight ? (hasLeftSibling ? "├── " : "└── ") : hasLeftSibling == isRight ?  "└── ": "├── ");
  console.log(currentPrefix + node.val);

  // Формируем префикс для потомков
  const childPrefix = prefix + (hasLeftSibling ? "│   " : "    ");

  if (node.left || node.right) {
    // Сначала обрабатываем правый узел, чтобы он был сверху
    if (node.right) {
      _printTree(node.right, childPrefix, true, node.left !== null);
    }
    // Затем обрабатываем левый узел, чтобы он был внизу
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
    // Затем обрабатываем левый узел, чтобы он был ниже
    if (node.left) {
      _printTree(node.left, childPrefix, false, false);
    }
  }
}