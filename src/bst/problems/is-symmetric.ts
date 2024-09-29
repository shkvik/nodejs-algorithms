import { printTree, TreeNode } from "../utilities";

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true;
  const isMirror = (t1: TreeNode, t2: TreeNode): boolean => {
    if (t1 === null && t2 === null) return true;
    if (t1 === null || t2 === null) return false;
    
    return (t1.val === t2.val) 
      && isMirror(t1.left, t2.right)
      && isMirror(t1.right, t2.left);
  }
  return isMirror(root, root);
};
