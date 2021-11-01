function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  let m = obstacleGrid.length
  let n = obstacleGrid[0].length
  const dp = new Array(m).fill(null).map(item => new Array(n).fill(null))
  return dfs(obstacleGrid, m - 1, n - 1)
  function dfs(matrix: number[][], i: number, j: number): number {
    if (i < 0 || i >= m || j < 0 || j >= n || matrix[i][j] === 1) return 0
    if (i === 0 && j === 0) return 1
    if (dp[i][j] !== null) return dp[i][j]
    dp[i][j] += dfs(matrix, i - 1, j)
    dp[i][j] += dfs(matrix, i, j - 1)
    return dp[i][j]
  }
}