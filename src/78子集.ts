function subsets(nums: number[]): number[][] {
  const res: number[][] = []
  dfs(res, nums, [], 0)
  return res
};

function dfs(res: number[][], nums: number[], cur: number[], index: number) {
  if (index >= nums.length) {
    res.push(Array.from(cur))
    return
  }
  cur.push(nums[index])
  dfs(res, nums, cur, index + 1)
  cur.pop()
  dfs(res, nums, cur, index + 1)
}