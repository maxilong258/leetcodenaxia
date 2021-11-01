function rob(root) {
  if (root === null) return 0
  let withRootcount = 0
  let withoutRootCount = 0
  let hasRoot = true
  const queue = new Array()
  queue.push(root)
  while (queue.length) {
    let len = queue.length
    for (let i = 0; i < len; i++) {
      const curr = queue.shift()
      if (hasRoot) withRootcount += curr.val
      else withoutRootCount += curr.val
      if (curr.left !== null) queue.push(curr.left)
      if (curr.right !== null) queue.push(curr.right)
    }
    hasRoot = !hasRoot
  }
  return Math.max(withRootcount, withoutRootCount)
};