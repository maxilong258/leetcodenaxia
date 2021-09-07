function rightSideView(root: TreeNode | null): number[] {
  const res: any = []
  if (root === null) return res
  const queue = []
  queue.push(root)
  while (queue.length) {
    let len = queue.length
    res.push(queue[0].val)
    for (let i = 0; i < len; i++) {
      const cur: any = queue.shift()
      if (cur.right) queue.push(cur.right)
      if (cur.left) queue.push(cur.left)
    }
  }
  return res
};