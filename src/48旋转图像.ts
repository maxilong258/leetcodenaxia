function rotate(matrix: number[][]): void {
  const len = matrix.length
  for (let i = 0; i < len / 2; i++) {
    const temp = matrix[i]
    matrix[i] = matrix[len - 1 - i]
    matrix[len - 1 - i] = temp
  }
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      const temp = matrix[i][j]
      matrix[i][j] = matrix[j][i]
      matrix[j][i] = temp
    }
  }
};