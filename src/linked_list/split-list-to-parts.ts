import { ListNode } from "./linked_list.structure";


/*

Input: head = [1,2,3,4,5,6,7,8,9,10], k = 3
Output: [[1,2,3,4],[5,6,7],[8,9,10]]

 */
function splitListToParts(head: ListNode, k: number) {

  const result = new Array<ListNode>(k).fill(null);
  let length = 0;
  let current = head;

  while (current !== null) {
    length++;
    current = current.next;
  }

  let carry = length % k;
  const baseSize = Math.floor(length / k);

  current = head;
  let prev: ListNode | null = null;

  for (let i = 0; i < k; i++) {
    if (!current) {
      result[i] = null;
    } else {
      result[i] = current;
      let partSize = baseSize + (carry > 0 ? 1 : 0);
      carry--;

      for (let j = 0; j < partSize; j++) {
        prev = current;
        current = current!.next;
      }
      if (prev !== null) {
        prev.next = null;
      }
    }
  }
  return result;
}


export function splitListToPartsDBG() {
  class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
      this.val = (val === undefined ? 0 : val);
      this.next = (next === undefined ? null : next);
    }
  }

  const tests = [
    {
      input: {
        root: new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4)))),
        k: 5
      },
      expected: [
        new ListNode(1),
        new ListNode(2),
        new ListNode(3),
        new ListNode(4),
        null
      ]
    },
    {
      input: {
        root: new ListNode(1, new ListNode(2, new ListNode(3))),
        k: 2
      },
      expected: [
        new ListNode(1, new ListNode(2)),
        new ListNode(3)
      ]
    },
  ];

  tests.forEach((test, index) => {
    const result = splitListToParts(test.input.root, test.input.k);
    const success = JSON.stringify(result) === JSON.stringify(test.expected);
    if (success) {
      console.log(`Test ${index} success`);
    } else {
      console.log(`Test ${index} fail`);
      console.log(`expected: ${JSON.stringify(test.expected)}`);
      console.log(`got: ${JSON.stringify(result)}`);
    }
  });

}