function longestCommonSubsequence(text1: string, text2: string): number {
  let m = text1.length
  let n = text2.length
  const dp = new Array(m).fill(null).map(item => new Array(n).fill(null))
  return dfs(m - 1, n - 1)
  function dfs(i: number, j: number): number {
    if (i < 0 || j < 0) return 0
    if (dp[i][j] !== null) return dp[i][j]
    if (text1.charAt(i) === text2.charAt(j)) dp[i][j] = dfs(i - 1, j - 1) + 1
    else dp[i][j] = Math.max(dfs(i - 1, j), dfs(i, j - 1))
    return dp[i][j]
  }
}