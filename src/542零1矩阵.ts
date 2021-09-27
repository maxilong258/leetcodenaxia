function updateMatrix(mat: number[][]): number[][] {
  const dirs = [[0, 1], [1, 0], [-1, 0], [0, -1]]
  return fuckUpdateMatrix(mat)
  function fuckUpdateMatrix(mat: number[][]): number[][] {
    let m = mat.length
    let n = mat[0].length
    const res: number[][] = new Array(m).fill(0).map(item => new Array(n).fill(0))
    const visited: boolean[][] = new Array(m).fill(false).map(item => new Array(n).fill(false))
    const queue: number[][] = []
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (mat[i][j] === 0) {
          queue.push([i, j])
          visited[i][j] = true
        }
      }
    }
    let cost = 0
    while (queue.length) {
      let len = queue.length
      for (let s = 0; s < len; s++) {
        const cur: any = queue.shift()
        let i = cur[0]
        let j = cur[1]
        if (mat[i][j] === 1) res[i][j] = cost
        for (let dir of dirs) {
          let x = i + dir[0]
          let y = j + dir[1]
          if (x >= 0 && x < m && y >= 0 && y < n && !visited[x][y]) {
            queue.push([x, y])
            visited[x][y] = true
          }
        }
      }
      cost++
    }
    return res
  };
}