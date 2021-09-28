function subsets(nums: number[]): number[][] {
  const res: number[][] = []
  const cur: number[] = []
  backtracking(nums, 0)
  return res

  function backtracking(nums: number[], index: number) {
    if (index === nums.length) {
      res.push(Array.from(cur))
      return
    }
    cur.push(nums[index])
    backtracking(nums, index + 1)
    cur.pop()
    backtracking(nums, index + 1)
  }
};