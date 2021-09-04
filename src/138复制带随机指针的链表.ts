class Node138 {
  val: number
  next: Node | null
  random: Node | null
  constructor(val?: number, next?: Node, random?: Node) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
    this.random = (random===undefined ? null : random)
  }
}
function copyRandomList(head: Node138 | null | any ): Node138 | null | any {
  const cachedNode = new Map()
  return realCopyRandomList(head)
  function realCopyRandomList(head: Node138 | null | any): Node138 | null | any {
    if (head === null) return null
    if (!cachedNode.has(head)) {
      const headNew = new Node138(head.val)
      cachedNode.set(head, headNew);
      headNew.next = realCopyRandomList(head.next)
      headNew.random = realCopyRandomList(head.random)
    }
    return cachedNode.get(head)
  }
}

// function copyRandomList(head: Node | null, cachedNode = new Map): Node | null {
//   if (head === null) {
//     return null;
//   }
//   if (!cachedNode.has(head)) {
//     cachedNode.set(head, {val: head.val}), Object.assign(cachedNode.get(head), {next: copyRandomList(head.next, cachedNode), random: copyRandomList(head.random, cachedNode)})
//   }
//   return cachedNode.get(head)
// }