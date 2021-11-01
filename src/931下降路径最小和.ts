function minFallingPathSum(matrix: number[][]): number {
  let n = matrix.length
  const memo = new Array(n).fill(null).map(item => new Array(n).fill(null))
  let minFallingPathSum = Infinity
  for (let i = 0; i < n; i++) {
    minFallingPathSum = Math.min(minFallingPathSum, dfs(0, i))
  }
  return minFallingPathSum
  function dfs(i: number, j: number): number {
    if (i === n) return 0
    if (memo[i][j] !== null) return memo[i][j]
    let minPathSum = Infinity
    if (j === 0) minPathSum = Math.min(dfs(i + 1, j + 1), dfs(i + 1, j))
    else if (j === n - 1) minPathSum = Math.min(dfs(i + 1, j), dfs(i + 1, j - 1))
    else minPathSum = Math.min(Math.min(dfs(i + 1, j - 1), dfs(i + 1, j)), dfs(i + 1, j + 1))
    return memo[i][j] = minPathSum + matrix[i][j]
  }
}