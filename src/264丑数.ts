function nthUglyNumber(n: number): number {
  const factors = [2, 3, 5]
  const visited = new Set()
  const heap = new MinHeap()
  visited.add(1)
  heap.offer(1)
  let uglyN = 0
  for (let i = 0; i < n; i++) {
    let curr = heap.poll()
    uglyN = curr
    for (let factor of factors) {
      let next = curr * factor
      if (!visited.has(next)) {
        visited.add(next)
        heap.offer(next)
      }
    }
  }
  return uglyN
};