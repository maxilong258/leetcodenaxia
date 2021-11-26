function rob(nums: number[]): number {
  const memo = new Array(nums.length + 1).fill(null)
  return dfs(nums.length - 1)
  function dfs(n: number): number {
    if (n === 0) return nums[0]
    if (n === 1) return Math.max(nums[0], nums[1])
    if (memo[n] !== null) return memo[n]
    memo[n] = Math.max(dfs(n - 2) + nums[n], dfs(n - 1))
    return memo[n]
  }
}