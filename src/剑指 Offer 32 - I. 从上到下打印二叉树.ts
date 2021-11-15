function levelOrder(root: TreeNode | null): number[] {
  const res: any = []
  if (root === null) return res
  const queue = new Array()
  queue.push(root)
  while (queue.length) {
    let len = queue.length
    for (let i = 0; i < len; i++) {
      let curr = queue.shift()
      res.push(curr.val)
      if (curr.left !== null) queue.push(curr.left)
      if (curr.right !== null) queue.push(curr.right)
    }
  }
  return res
}