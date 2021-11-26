function reverseList234(head: ListNode | null): ListNode | null {
  let prev = null
  let next = null
  let curr = head
  while (curr !== null) {
    next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }
  return prev
};

function isPalindrome(head: ListNode | null): boolean {
  let runner: any = head
  let chaser: any = head
  while (runner !== null && runner.next !== null) {
    runner = runner.next.next
    chaser = chaser.next
  }
  if (runner !== null) chaser = chaser.next
  chaser = reverseList234(chaser)
  runner = head
  while (chaser !== null) {
    if (chaser.val !== runner.val) return false
    chaser = chaser.next
    runner = runner.next
  }
  return true
};