import { ListNode } from "./linked_list.structure";
import { createLinkedList, linkedListToArray } from "./utilities";

/**
 * @problem 
 * [2095. Delete the Middle Node of a Linked List](https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list)
 */
function deleteMiddle(head: ListNode | null): ListNode | null {
  var slow = head;
  var fast = head;
  var prev = null;

  if (!head || !head.next) {
    return null;
  }
  while (fast && fast.next) {
    fast = fast.next.next;
    prev = slow;
    slow = slow.next;
  }

  prev.next = slow.next;

  return head;
};

export function deleteMiddleDBG() {
  const tests = [
    {
      input: createLinkedList([1, 3, 4, 7, 1, 2, 6]),
      result: [1, 3, 4, 1, 2, 6]
    },
    {
      input: createLinkedList([1, 2, 3, 4]),
      result: [1, 2, 4]
    },
    {
      input: createLinkedList([2, 1]),
      result: [2]
    },
    {
      input: createLinkedList([1]),
      result: []
    },
    {
      input: createLinkedList([]),
      result: []
    }
  ];

  tests.forEach((test, index) => {
    const output = deleteMiddle(test.input);
    const outputArray = linkedListToArray(output);
    const success = JSON.stringify(outputArray) === JSON.stringify(test.result);
    if (success) {
      console.log(`${index} success`);
    } else {
      console.log(`${index} fail`);
      console.log(`expected ${JSON.stringify(test.result)}`);
      console.log(`got ${JSON.stringify(outputArray)}`);
    }
  });
}
