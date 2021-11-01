function permute(nums: number[]): number[][] {
  const res = new Array
  dfs(0)
  return res
  function dfs(index: number) {
    if (index === nums.length) {
      const ans = new Array()
      for (let i = 0; i < nums.length; i++) {
        ans.push(nums[i])
      }
      res.push(ans)
      return
    }
    for (let i = index; i < nums.length; i++) {
      swap(index, i)
      dfs(index + 1)
      swap(index, i)
    }
  }
  function swap(i1: number, i2: number) {
    let temp = nums[i1]
    nums[i1] = nums[i2]
    nums[i2] = temp
  }
}