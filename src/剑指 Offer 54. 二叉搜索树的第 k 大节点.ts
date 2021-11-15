function kthLargest(root: TreeNode | null, k: number): number {
  let res: number | any = null
  dfs(root)
  return res
  function dfs(root: TreeNode | null) {
    if (root === null) return
    dfs(root.right)
    if (k === 0) return
    if (--k === 0) res = root.val
    dfs(root.left)
  }
};