import { printTree, TreeNode } from "../utilities";

function findDuplicateSubtrees(root: TreeNode | null): TreeNode[] {
  const map = new Map<string, number>();
  const result: TreeNode[] = [];
  const idMap = new Map<string, number>();
  let idCounter = 1;

  const getId = (node: TreeNode | null): number => {
    if (!node) return 0;

    // Хешируем структуру узла, используя идентификаторы левого и правого поддеревьев
    const leftId = getId(node.left);
    const rightId = getId(node.right);
    const key = `${node.val},${leftId},${rightId}`;

    if (!idMap.has(key)) {
      idMap.set(key, idCounter++);
    }

    const id = idMap.get(key)!;

    const count = map.get(id.toString()) || 0;
    if (count === 1) {
      result.push(node);
    }
    map.set(id.toString(), count + 1);

    return id;
  };

  getId(root);
  return result;
}

function areTreesEqual(tree1: TreeNode | null, tree2: TreeNode | null): boolean {
  if (!tree1 && !tree2) return true;
  if (!tree1 || !tree2) return false;
  if (tree1.val !== tree2.val) return false;
  
  return areTreesEqual(tree1.left, tree2.left) && areTreesEqual(tree1.right, tree2.right);
}


function sortTrees(trees: TreeNode[]): TreeNode[] {
  return trees.sort((a, b) => a.val - b.val);
}

export function testFindDuplicateSubtrees() {
  const tests = [
    {
      input: new TreeNode(1, 
        new TreeNode(2, new TreeNode(4)), 
        new TreeNode(3, new TreeNode(2, new TreeNode(4)), new TreeNode(4))),
      result: [new TreeNode(2, new TreeNode(4)), new TreeNode(4)]
    },
    {
      input: new TreeNode(1, 
        new TreeNode(2), 
        new TreeNode(3, new TreeNode(2), new TreeNode(3))),
      result: [new TreeNode(2)]
    }
  ];

  tests.forEach((test, index) => {
    const result = findDuplicateSubtrees(test.input);
    const expected = test.result;

    // Сортируем по значению корня, чтобы упорядочить сравнение
    const sortedResult = sortTrees(result);
    const sortedExpected = sortTrees(expected);

    // Проверяем, совпадают ли длины
    if (sortedResult.length !== sortedExpected.length) {
      console.log(`${index} fail: expected length ${sortedExpected.length}, but got ${sortedResult.length}`);
      return;
    }

    // Проверяем каждое дерево в результатах
    let success = true;
    for (let i = 0; i < sortedExpected.length; i++) {
      if (!areTreesEqual(sortedResult[i], sortedExpected[i])) {
        success = false;
        console.log(`${index} fail: expected tree ${JSON.stringify(sortedExpected[i])}, but got ${JSON.stringify(sortedResult[i])}`);
      }
    }

    if (success) {
      console.log(`${index} success`);
    }
    console.log('input')
    printTree(test.input)
  });
}
