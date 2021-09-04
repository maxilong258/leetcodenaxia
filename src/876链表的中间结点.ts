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

 function middleNode(head: ListNode | null | any): ListNode | null {
  let runner = head
  let chaser = head
  while (runner !== null && runner.next !== null) {
    runner = runner.next.next
    chaser = chaser.next
  }
  return chaser
};