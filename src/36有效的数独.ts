function isValidSudoku(board: string[][]): boolean {
  const row = new Map()
  const col = new Map()
  const box = new Map()
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      const curr = board[i][j]
      if (curr !== '.') {
        const boxindex = Math.floor(i / 3) * 3 + Math.floor(j / 3)
        if (row.get(i + '' + curr) || col.get(j + '' + curr) || box.get(boxindex + '' + curr)) return false
        row.set(i + '' + curr, true)
        col.set(j + '' + curr, true)
        box.set(boxindex + '' + curr, true)
      }
    }
  }
  return true
};