function reverseKGroup(head: ListNode, k: number): ListNode | null {
  let prev: ListNode | null = null
  let cur: ListNode | null = head
  let next: ListNode | null = null
  let check: ListNode | null = head
  let canProceed = 0
  let count = 0
  while (canProceed < k && check !== null) {
    check = check.next
    canProceed++
  }
  if (canProceed === k) {
    while (count < k && cur !== null) {
      next = cur.next
      cur.next = prev
      prev = cur
      cur = next
      count++
    }
    if (next !== null) {
      head.next = reverseKGroup(next, k)
    }
    return prev
  } else {
    return head
  }
};