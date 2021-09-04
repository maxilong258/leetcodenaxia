/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// function reverseList(head: ListNode | null): ListNode | null {
//   let prev = null
//   let next: ListNode
//   let curr = head
//   while (curr !== null) {
//     next = curr.next
//     curr.next = prev
//     prev = curr
//     curr = next
//   }
//   return prev
// };

function reverseList(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
    return head
  }
  let new_head = reverseList(head.next)
  head.next.next = head
  head.next = null
  return new_head
}