function numIslands(grid: string[][]): number {
  const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
  return fuckNumIslands(grid)
  function fuckNumIslands(grid: string[][]): number {
    let count = 0
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] === '1') {
          count++
          dfs(grid, i, j)
        }
      }
    }
    return count
  }
  function dfs(grid: string[][], i: number, j: number) {
    grid[i][j] = '0'
    for (let dir of dirs) {
      let x = i + dir[0]
      let y = j + dir[1]
      if (x >= 0 && x < grid.length && y >= 0 && y < grid[0].length && grid[x][y] === '1') dfs(grid, x, y)
    }
  }
};