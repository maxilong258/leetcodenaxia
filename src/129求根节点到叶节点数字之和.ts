function sumNumbers(root: TreeNode | null): number {
  let res = 0
  dfs(root, '')
  return res
  function dfs(r: TreeNode | null, s: string) {
    if (r === null) return 
    if (r.left === null && r.right === null) {
      res += Number(s + r.val)
      return 
    }
    dfs(r.left, s + r.val)
    dfs(r.right, s + r.val)
  }
}