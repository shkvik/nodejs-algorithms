import { ListNode } from "./linked_list.structure";
import { createLinkedList, linkedListToArray } from "./utilities";

/**
 * @problem 
 * [328. Odd Even Linked List](https://leetcode.com/problems/odd-even-linked-list)
 */
function oddEvenList(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }
  if (!head.next) {
    return head;
  }
  let odd = head;
  let even = head.next;
  let evenHead = even;

  while (even && even.next) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }
  odd.next = evenHead;
  return head;
};

export function oddEvenListDBG() {
  const tests = [
    {
      input: createLinkedList([1, 2, 3, 4, 5]),
      result: [1, 3, 5, 2, 4]
    },
    {
      input: createLinkedList([2, 1, 3, 5, 6, 4, 7]),
      result: [2, 3, 6, 7, 1, 5, 4]
    },
    {
      input: createLinkedList([]),
      result: []
    },
    {
      input: createLinkedList([1]),
      result: [1]
    },
    {
      input: createLinkedList([1, 2]),
      result: [1, 2]
    }
  ];

  tests.forEach((test, index) => {
    const oddEven = oddEvenList(test.input);
    const resultArray = linkedListToArray(oddEven);
    const success = JSON.stringify(resultArray) === JSON.stringify(test.result);
    if (success) {
      console.log(`${index} success`);
    } else {
      console.log(`${index} fail`);
      console.log(`expected ${JSON.stringify(test.result)}`);
      console.log(`got ${JSON.stringify(resultArray)}`);
    }
  });
}