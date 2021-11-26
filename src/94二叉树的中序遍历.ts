function inorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = []
  if (root === null) return res
  dfs(root)
  return res
  function dfs(root: TreeNode | null): void {
    if (root === null) return
    dfs(root.left)
    res.push(root.val)
    dfs(root.right)
  } 
}