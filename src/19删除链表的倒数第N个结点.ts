// class ListNode {
//   val: number
//   next: ListNode | null
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
//   }
// }

// function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
//   return removeNode (head, n) === n ? head.next : head

// function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
//   return removeNode (head, n) === n ? head.next : head

//   function removeNode(node: ListNode, n: number) {
//     if (node.next == null) return 1
//     let m = removeNode(node.next, n)
//     if (m === n) {
//       if (m === 1) node.next = null
//       else node.next = node.next.next
//     }
//     return m + 1
//   }
// };

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (head === null) return head
  let runner: any = head
  let chaser: any = head
  while (n > 0) {
    runner = runner.next
    n--
  }
  if (runner === null) {
    return head.next
  }
  while (runner.next !== null) {
    runner = runner.next
    chaser = chaser.next
  }
  chaser.next = chaser.next.next
  return head
}