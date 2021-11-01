//正向dp
// function uniquePaths(m: number, n: number): number {
//   const dp = new Array(m).fill(0).map(item => new Array(n).fill(0))
//   for (let i = 0; i < m; i++) dp[i][0] = 1
//   for (let j = 0; j < n; j++) dp[0][j] = 1
//   for (let i = 1; i < m; i++) {
//     for (let j = 1; j < n; j++) {
//       dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
//     }
//   }
//   return dp[m - 1][n - 1]
// }

//bottom up DFS
function uniquePaths(m: number, n: number): number {
  const dp = new Array(m).fill(null).map(item => new Array(n).fill(null))
  return dfs(m - 1, n - 1)
  function dfs(i: number, j: number): number {
    if (i < 0 || i >= m || j < 0 || j >= n) return 0
    if (i === 0 && j === 0) return 1
    if (dp[i][j] !== null) return dp[i][j]
    dp[i][j] += dfs(i - 1, j)
    dp[i][j] += dfs(i, j - 1)
    return dp[i][j]
  }
}