import { printTree, TreeNode } from "./bst";


// Пример использования
const root = new TreeNode(9);
root.left = new TreeNode(5);
root.right = new TreeNode(13);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(7);
root.left.left.left = new TreeNode(2);
root.left.left.right = new TreeNode(4);
root.left.left.right.right = new TreeNode(188);
root.left.left.right.left = new TreeNode(188);
root.left.left.left.left = new TreeNode(1);
root.left.right.left = new TreeNode(6);
root.left.right.right = new TreeNode(8);
root.right.left = new TreeNode(11);
root.right.right = new TreeNode(15);
root.right.left.left = new TreeNode(10);
root.right.left.right = new TreeNode(12);
root.right.right.left = new TreeNode(14);
root.right.right.right = new TreeNode(16);


printTree(root)