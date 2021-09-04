function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const head = mergeKListHandler(lists, 0, lists.length - 1)
  return head
};

function mergeKListHandler(list: Array<ListNode | null>, start: number, end: number):ListNode | null {
  if (end - start > 1) {
    const mid = Math.floor((start + end) / 2)
    const node1 = mergeKListHandler(list, start, mid)
    const node2 = mergeKListHandler(list, mid + 1, end)
    return mergeTwoLists23(node1, node2)
  }
  if (end - start === 1) {
    return mergeTwoLists23(list[start], list[end])
  }
  if (end - start === 0) {
    return list[start]
  }
  return null
} 


function mergeTwoLists23(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (l1 === null) return l2
  if (l2 === null) return l1
  const res = l1.val < l2.val ? l1 : l2
  res.next = mergeTwoLists23(res.next, l1.val >= l2.val ? l1 : l2)
  return res
}