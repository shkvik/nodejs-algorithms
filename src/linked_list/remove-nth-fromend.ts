import { ListNode } from "./linked_list.structure";

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummy = new ListNode(0, head);
  let first: ListNode | null = dummy;
  let second: ListNode | null = dummy;

  // Сдвигаем первый указатель на n+1 шагов вперед
  for (let i = 0; i <= n; i++) {
    if (first === null) return head; // Если n больше длины списка
    first = first.next;
  }

  // Перемещаем оба указателя до конца списка
  while (first !== null) {
    first = first.next;
    second = second!.next;
  }

  // Удаляем n-ый узел с конца
  second!.next = second!.next!.next;

  return dummy.next;
}
