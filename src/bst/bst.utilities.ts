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