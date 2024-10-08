import { ListNode } from "./linked_list.structure";
import { createLinkedList, linkedListToArray } from "./utilities";

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const dummyHead = new ListNode(0);
  let current = dummyHead;
  let carry = 0;

  while (l1 !== null || l2 !== null || carry !== 0) {
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;
    const total = val1 + val2 + carry;
    carry = Math.floor(total / 10);
    const newNode = new ListNode(total % 10);
    current.next = newNode;
    current = current.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return dummyHead.next;
}

function addTwoNumbers2(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const castList = (root: ListNode) => {
    const result = [];
    let current: ListNode = root;
  
    while(current){
      result.push(current.val);
      current = current.next;
    }
    return result;
  }
  
  const createList = (arr: number[]) => {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
      current.next = new ListNode(arr[i]);
      current = current.next;
    }
    return head;
  }
  const list1 = Number(castList(l1).reverse().join(''));
  const list2 = Number(castList(l2).reverse().join(''));
  const list3 = String(list1 + list2).split('').reverse().map(Number);

  return createList(list3)
  
}



export function addTwoNumbersDBG() {
  const tests = [
    {
      input: {
        l1: createLinkedList([2, 4, 3]),
        l2: createLinkedList([5, 6, 4])
      },
      result: [7, 0, 8] // 342 + 465 = 807
    },
    {
      input: {
        l1: createLinkedList([0]),
        l2: createLinkedList([0])
      },
      result: [0] // 0 + 0 = 0
    },
    {
      input: {
        l1: createLinkedList([9, 9, 9, 9, 9, 9, 9]),
        l2: createLinkedList([9, 9, 9, 9])
      },
      result: [8, 9, 9, 9, 0, 0, 0, 1] // 9999999 + 9999 = 10009998
    }
  ];

  tests.forEach((test, index) => {
    const result = addTwoNumbers(test.input.l1, test.input.l2);
    const resultArray = linkedListToArray(result);
    const success = JSON.stringify(resultArray) === JSON.stringify(test.result);
    if (success) {
      console.log(`Test ${index} success`);
    } else {
      console.log(`Test ${index} fail`);
      console.log(`expected ${JSON.stringify(test.result)}`);
      console.log(`got ${JSON.stringify(resultArray)}`);
    }
  });
}