function leastBricks(wall: number[][]): number {
  let row = wall.length
  const map = new Map()
  for (let i = 0; i < row; i++) {
    let curr = 0
    for (let j = 0; j < wall[i].length - 1; j++) {
      curr += wall[i][j]
      map.set(curr, (map.get(curr) || 0) + 1)
    }
  }
  let max = 0
  for (let v of map.values()) {
    max = Math.max(max, v)
  }
  return row - max
}