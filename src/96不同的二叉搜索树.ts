function numTrees(n: number): number {
  const memo = new Array(n + 1).fill(null)
  return dfs(n)
  function dfs(n: number): number {
    if (n <= 1) return 1
    if (memo[n] !== null) return memo[n]
    let res = 0
    for (let i = 1; i <= n; i++) {
      let left = dfs(i - 1)
      let right = dfs(n - i)
      res += left * right
    }
    memo[n] = res
    return res
  }
}