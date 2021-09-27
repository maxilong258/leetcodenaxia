function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  const res: any = []
  const queue: any = []
  return realPathSum(root, targetSum) 
  function realPathSum(r: TreeNode | null, t: number): number[][] {
    if (r === null) return res
    dfs(r, t)
    return res
  }
  function dfs(r: TreeNode | null, t: number) {
    if (r === null) return 
    queue.push(r.val)
    t -= r.val
    if (r.left === null && r.right === null && t === 0) res.push(Array.from(queue))
    dfs(r.left, t)
    dfs(r.right, t)
    queue.pop()
  }
}