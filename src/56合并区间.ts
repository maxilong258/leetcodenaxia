function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0])
  let index = -1
  const res = new Array(intervals.length).fill(0).map(item => new Array(2).fill(0))
  for (let i = 0; i < intervals.length; i++) {
    if (index === -1 || res[index][1] < intervals[i][0]) {
      index++
      res[index] = intervals[i]
    } else {
      res[index][1] = Math.max(res[index][1], intervals[i][1])
    }
  }
  return res.slice(0, index + 1)
};