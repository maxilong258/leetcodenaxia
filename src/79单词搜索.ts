function exist(board: string[][], word: string): boolean {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (dfs(i, j, 0)) return true
    }
  }
  return false
  function dfs(i: number, j: number, index: number): boolean {
    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] !== word[index]) return false
    if (index === word.length - 1) return true
    board[i][j] = ''
    let res = dfs(i + 1, j, index + 1) || dfs(i - 1, j, index + 1) || dfs(i, j + 1, index + 1) || dfs(i, j - 1, index + 1)
    board[i][j] = word[index]
    return res
  }
};