function numTrees(n: number): number {
  const dp = new Array(n + 1).fill(null)
  return dfs(n)
  function dfs(n: number): number {
    if (n <= 1) return 1
    if (dp[n] !== null) return dp[n]
    let res = 0
    for (let i = 1; i <= n; i++) {
      let left = dfs(i - 1)
      let right = dfs(n - i)
      res += left * right
    }
    dp[n] = res
    return res
  }
}