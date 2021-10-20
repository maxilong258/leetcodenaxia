function minMoves(nums: number[]): number {
  let min = Math.min(...nums)
  let res = 0
  for (let num of nums) {
    res += num - min
  }
  return res
};