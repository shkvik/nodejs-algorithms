import { ListNode } from "./linked_list.structure";


function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const mergeTwoLists = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
    const dummy = new ListNode();
    let current = dummy;

    while (l1 !== null && l2 !== null) {
      if (l1.val < l2.val) {
        current.next = l1;
        l1 = l1.next;
      } else {
        current.next = l2;
        l2 = l2.next;
      }
      current = current.next;
    }

    if (l1 !== null) current.next = l1;
    if (l2 !== null) current.next = l2;

    return dummy.next;
  };

  if (lists.length === 0) return null;

  while (lists.length > 1) {
    let mergedLists: Array<ListNode | null> = [];

    for (let i = 0; i < lists.length; i += 2) {
      const l1 = lists[i];
      const l2 = i + 1 < lists.length ? lists[i + 1] : null;
      mergedLists.push(mergeTwoLists(l1, l2));
    }

    lists = mergedLists;
  }

  return lists[0];
}