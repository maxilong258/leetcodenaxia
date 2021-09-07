function levelOrder(root: Node | null): number[][] {
	const res: any = []
  if (root === null) return res
  const queue = []
  queue.push(root)
  while (queue.length) {
    let len = queue.length
    const level = []
    for (let i = 0; i < len; i++) {
      const cur: any = queue.shift()
      level.push(cur.val)
      queue.push(...cur.children)
    }
    res.push(level)
  }
  return res
};