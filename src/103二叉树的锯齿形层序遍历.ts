function zigzagLevelOrder(root: TreeNode | null): number[][] {
  const res: any = []
  if (root === null) return res
  let isOrderLeft = true
  const queue = []
  queue.push(root)
  while (queue.length) {
    let len = queue.length
    const level = []
    for (let i = 0; i < len; i++) {
      const cur: any = queue.shift()
      if (isOrderLeft) level.push(cur.val)
      else level.unshift(cur.val)
      if (cur.left !== null) queue.push(cur.left)
      if (cur.right !== null) queue.push(cur.right)
    }
    res.push(level)
    isOrderLeft = !isOrderLeft
  }
  return res
};