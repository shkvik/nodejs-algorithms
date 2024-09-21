import { ListNode } from "./linked_list.structure";
import { createLinkedList, linkedListToArray } from "./utilities";

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const dummy = new ListNode(0);
  let current = dummy;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  // Если остались элементы в одном из списков, присоединяем их
  current.next = l1 ? l1 : l2;

  return dummy.next;
}


function mergeTwoListsDBG() {
  const tests = [
    {
      input: {
        l1: createLinkedList([1, 2, 4]),
        l2: createLinkedList([1, 3, 4])
      },
      result: [1, 1, 2, 3, 4, 4]
    },
    {
      input: {
        l1: createLinkedList([]),
        l2: createLinkedList([])
      },
      result: []
    },
    {
      input: {
        l1: createLinkedList([]),
        l2: createLinkedList([0])
      },
      result: [0]
    }
  ];

  tests.forEach((test, index) => {
    const mergedList = mergeTwoLists(test.input.l1, test.input.l2);
    const mergedArray = linkedListToArray(mergedList);
    const success = JSON.stringify(mergedArray) === JSON.stringify(test.result);
    if (success) {
      console.log(`${index} success`);
    } else {
      console.log(`${index} fail`);
      console.log(`expected ${JSON.stringify(test.result)}`);
      console.log(`got ${JSON.stringify(mergedArray)}`);
    }
  });
}