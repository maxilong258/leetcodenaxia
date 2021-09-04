function reverseBetween(head: ListNode | null | any, left: number, right: number): ListNode | null {
  let dummy = new ListNode(0)
  dummy.next = head
  let pre: ListNode | null | any = dummy
  for (let i = 1; i < left; i++) {
    pre = pre.next
  }
  head = pre.next
  for (let i = left; i < right; i++) {
    const nex = head.next
    head.next = nex.next
    nex.next = pre.next
    pre.next = nex
  }
  return dummy.next
};