function movingCount(m: number, n: number, k: number): number {
  const visited = new Array(m).fill(false).map(item => new Array(n).fill(false))
  return dfs(0, 0, 0, 0)
  function dfs(i: number, j: number, si: number, sj: number): number {
    if (i >= m || j >= n || k < si + sj || visited[i][j]) return 0
    visited[i][j] = true
    return 1 + dfs(i + 1, j, (i + 1) % 10 != 0 ? si + 1 : si - 8, sj) + dfs(i, j + 1, si, (j + 1) % 10 != 0 ? sj + 1 : sj - 8)
  }
}