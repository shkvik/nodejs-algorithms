import { ListNode } from "./linked_list.structure";

function deleteDuplicates(head: ListNode): ListNode {
  if (!head) return null;

  let dummy = new ListNode(0, head);
  let prev = dummy;

  while (head !== null) {
    if (head.next !== null && head.val === head.next.val) {
      while (head.next !== null && head.val === head.next.val) {
        head = head.next;
      }
      prev.next = head.next;
    } else {
      prev = prev.next;
    }
    head = head.next;
  }
  return dummy.next;
};