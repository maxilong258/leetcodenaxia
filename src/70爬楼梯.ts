function climbStairs(n: number): number {
  const memo = new Array(n + 1).fill(null)
  return dfs(n)
  function dfs(n: number): number {
    if (n <= 1) return 1
    if (memo[n] !== null) return memo[n]
    memo[n] += dfs(n - 1) + dfs(n - 2)
    return memo[n]
  }
}