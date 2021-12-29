function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  const res: any = []
  if (root === null) return res
  const stack: any = []
  dfs(root, targetSum)
  return res
  function dfs(r: TreeNode | null, t: number) {
    if (r === null) return
    stack.push(r.val)
    if (r.left === null && r.right === null && r.val === t) res.push(Array.from(stack))
    dfs(r.left, t - r.val)
    dfs(r.right, t - r.val)
    stack.pop()
  }
};