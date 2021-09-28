function subsetsWithDup(nums: number[]): number[][] {
  nums.sort((a, b) => a - b)
  const t: number[] = []
  const res: number[][] = []
  backtracking(nums, 0, false);
  return res; 
  function backtracking(nums: number[], index: number, choosePre: boolean) {
    if (index === nums.length) {
      res.push(Array.from(t))
      return
    }   
    backtracking(nums, index + 1, false);
    if (!choosePre && index > 0 && nums[index - 1] === nums[index]) {
        return;
    }
    t.push(nums[index]) 
    backtracking(nums, index + 1, true)
    t.pop()
  }
}