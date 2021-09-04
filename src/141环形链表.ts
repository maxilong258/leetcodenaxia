function hasCycle(head: ListNode | null | any): boolean {
  if (head === null) return false
  let runner = head.next
  let chaser = head
  while (runner !== null) {
    if (runner === chaser) return true
    chaser = chaser.next
    runner = runner.next
    if (runner !== null) runner = runner.next
  }
  return false
}