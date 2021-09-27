function findFrequentTreeSum(root: TreeNode | null): number[] {
  const map = new Map()
  let maxv = -Infinity
  return realFindFrequentTreeSum(root)
  function realFindFrequentTreeSum(r: TreeNode | null): number[] {
    dfs(r)
    const res = []
    for (let k of map.keys()) {
      if (maxv === map.get(k)) res.push(k)
    }
    return res
  }
  function dfs(r: TreeNode | null): number {
    if (r === null) return 0
    let left = dfs(r.left)
    let right = dfs(r.right)
    let sum = left + right + r.val
    let value = map.get(sum) || 0
    map.set(sum, value + 1)
    maxv = Math.max(maxv, value + 1)
    return sum
  }
};