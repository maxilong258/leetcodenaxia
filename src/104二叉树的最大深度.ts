function maxDepth(root: TreeNode | null): number {
  if (root === null) return 0
  let res = 0
  const queue = []
  queue.push(root)
  while (queue.length) {
    let len = queue.length 
    for (let i = 0; i < len; i++) {
      const cur: any = queue.shift()
      if (cur.left) queue.push(cur.left)
      if (cur.right) queue.push(cur.right)
    }
    res++
  }
  return res
}

// dfs
// function maxDepth(root: TreeNode | null): number {
//   return root === null ? 0 : Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
// }