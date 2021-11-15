function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  const res: any = []
  const stack: any = []
  return realPathSum(root, targetSum) 
  function realPathSum(root: TreeNode | null, targetSum: number): number[][] {
    if (root === null) return res
    dfs(root, targetSum)
    return res
  }
  function dfs(root: TreeNode | null, targetSum: number) {
    if (root === null) return 
    stack.push(root.val)
    targetSum -= root.val
    if (root.left === null && root.right === null && targetSum === 0) res.push(Array.from(stack))
    dfs(root.left, targetSum)
    dfs(root.right, targetSum)
    stack.pop()
  }
};