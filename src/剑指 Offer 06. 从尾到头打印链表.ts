function reversePrint(head: ListNode | null): number[] {
  const res: any = []
  if (head === null) return res
  let curr: any = head
  while (curr !== null) {
    res.unshift(curr.val)
    curr = curr.next
  }
  return res
};