function convertBST(root: TreeNode | null): TreeNode | null {
  let num = 0
  return dfs(root)
  function dfs(r: TreeNode | null): TreeNode | null {
    if (r === null) return null
    dfs(r.right)
    r.val += num
    num = r.val
    dfs(r.left)
    return root
  }
}