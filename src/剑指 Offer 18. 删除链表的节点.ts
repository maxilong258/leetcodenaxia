function deleteNode(head: ListNode | null | any, val: number): ListNode | null {
  let prev: any = head
  let curr = head.next
  if (prev.val === val) return prev.next
  while (curr !== null) {
    if (curr.val === val) {
      if (curr.next !== null) {
        curr.val = curr.next.val
        curr.next = curr.next.next
        break
      } else {
        prev.next = null
        break
      }
    }
    prev = curr
    curr = curr.next
  }
  return head
};