function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (l1 === null) return l2
  if (l2 === null) return l1
  const res = l1.val < l2.val ? l1 : l2
  res.next = mergeTwoLists(res.next, l1.val >= l2.val ? l1 : l2)
  return res
}