function getKthFromEnd(head: ListNode | null, k: number): ListNode | null {
  let runner: any = head
  let chaser: any = head
  while (k !== 0) {
    runner = runner.next
    k--
  }
  if (runner === null) return head
  while (runner !== null) {
    runner = runner.next
    chaser = chaser.next
  }
  return chaser
}