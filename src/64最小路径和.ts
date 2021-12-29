function minPathSum(grid: number[][]): number {
  let m = grid.length
  let n = grid[0].length
  const memo = new Array(m).fill(null).map(item => new Array(n).fill(null))
  return dfs(m - 1, n - 1)
  function dfs(i: number, j: number): number {
    if (i < 0 || i >= m || j < 0 || j >= n) return Infinity
    if (i === 0 && j === 0) return grid[0][0]
    if (memo[i][j] !== null) return memo[i][j]
    memo[i][j] = Math.min(dfs(i - 1, j), dfs(i, j - 1)) + grid[i][j]
    return memo[i][j]
  }
};