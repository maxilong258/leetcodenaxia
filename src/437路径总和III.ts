// 前缀和
// function pathSum437(root: TreeNode | null, targetSum: number): number {
//   const map = new Map()
//   map.set(0, 1)
//   return dfs(root, targetSum, 0)
//   function dfs(r: TreeNode | null, t: number, curr: number): number {
//     if (r === null) return 0
//     let res = 0
//     curr += r.val
//     res += (map.get(curr - t) || 0)
//     map.set(curr, (map.get(curr) || 0) + 1)
//     res += dfs(r.left, t, curr)
//     res += dfs(r.right, t, curr)
//     map.set(curr, map.get(curr) - 1)
//     return res
//   }
// };


function pathSum(root: TreeNode | null, targetSum: number): number {
  if (root === null) return 0
  let res = 0
  dfs(root, targetSum)
  res += pathSum(root.left, targetSum)
  res += pathSum(root.right, targetSum)
  return res
  function dfs(r: TreeNode | null, t: number) {
    if (r === null) return
    if (r.val === t) res++
    dfs(r.left, t - r.val)
    dfs(r.right, t - r.val)
  } 
};