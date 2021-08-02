class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

function addTwoNumbers(l1: ListNode | null | undefined, l2: ListNode | null | undefined): ListNode | null {
  const dummy = new ListNode()
  let carry = 0
  let cur = dummy
  while (l1 || l2 || carry) {
    let s = (l1?.val || 0) + (l2?.val || 0) + carry
    carry = Math.floor(s / 10)
    cur.next = new ListNode(s % 10)
    cur = cur.next
    l1 = l1?.next
    l2 = l2?.next
  }
  return dummy.next
}