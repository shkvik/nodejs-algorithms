import { TreeNode } from "../bst.structure";

function serialize(root: TreeNode): string {
  const preorderSerialize = (node: TreeNode) => {
    if (!node) return [];
    return [
      node.val.toString(),
      ...preorderSerialize(node.left),
      ...preorderSerialize(node.right)
    ]
  }
  return preorderSerialize(root).join(',')
};


function deserialize(data: string): TreeNode | null {
  if (!data) return null;
  const values = data.split(',').map(Number);

  const buildBST = (values: number[], bound: number) => {
    if (values.length === 0 || values[0] > bound) return null;
    const val = values.shift()!;
    const node = new TreeNode(val);
    node.left = buildBST(values, val);
    node.right = buildBST(values, bound);
    return node;
  }
  return buildBST(values, Infinity);
}

export function TTTDBG() {

  const tests = [
    {
      input: new TreeNode(
        2,
        new TreeNode(1),
        new TreeNode(3)
      ),
      serialized: "2,1,3",
    },
    {
      input: new TreeNode(
        5,
        new TreeNode(3, new TreeNode(2), new TreeNode(4)),
        new TreeNode(7, null, new TreeNode(8))
      ),
      serialized: "5,3,7,2,4,8",
    },
    {
      input: null,
      serialized: "",
    }
  ];

  tests.forEach((test, index) => {
    const serialized = serialize(test.input);
    const successSerialize = serialized === test.serialized;
    console.log(`Test ${index} Serialize: ${successSerialize ? "success" : "fail"}`);
    if (!successSerialize) {
      console.log(`expected: ${test.serialized}`);
      console.log(`got: ${serialized}`);
    }

    const deserialized = deserialize(serialized);
    const reSerialized = serialize(deserialized);
    const successDeserialize = reSerialized === test.serialized;
    console.log(`Test ${index} Deserialize: ${successDeserialize ? "success" : "fail"}`);
    if (!successDeserialize) {
      console.log(`expected: ${test.serialized}`);
      console.log(`got: ${reSerialized}`);
    }
  });
}