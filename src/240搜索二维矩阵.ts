function searchMatrix(matrix: number[][], target: number): boolean {
  const m = matrix.length
  const n = matrix[0].length
  return dfs(0, n - 1)
  function dfs(i: number, j: number): boolean {
    const cur = matrix[i][j]
    if (cur === target) return true
    if (cur > target) {
      if (j === 0) return false
      return dfs(i, j - 1)
    } else {
      if(i >= m - 1) return false
      return dfs(i + 1, j)
    }
  }
}

// function findNumberIn2DArray(matrix: number[][], target: number): boolean {
//   let i = matrix.length - 1
//   let j = 0
//   while (i >= 0 && j < matrix[0].length ) {
//     if (matrix[i][j] > target) i--
//     else if (matrix[i][j] < target) j++
//     else return true
//   }
//   return false
// };

// return matrix.flat().indexOf(target) !== -1