function rob(root: TreeNode | null): number {
  const memo = new Map()
  return dfs(root)
  function dfs(root: TreeNode | null): number {
    if (root === null) return 0
    if (memo.has(root)) return memo.get(root)
    let money = root.val
    if (root.left !== null) money += (dfs(root.left.left) + dfs(root.left.right))
    if (root.right !== null) money += (dfs(root.right.left) + dfs(root.right.right))
    let res = Math.max(money, dfs(root.left) + dfs(root.right))
    memo.set(root, res)
    return res
  }
}