function fourSum(nums: number[], target: number): number[][] {
  const len = nums.length
  if (len < 4) return []
  nums.sort((a, b) => { return a - b })
  const res = []
  for (let i = 0; i < len - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue
    for (let j = i + 1; j < len - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue
      let start = j + 1, end = len - 1
      while (start < end) {
        const sum = nums[i] + nums[j] + nums[start] + nums[end]
        if (sum < target) {
          start++
          continue
        }
        if (sum > target) {
          end--
          continue
        }
        res.push([nums[i], nums[j], nums[start], nums[end]])
        while (start < end && nums[start] === nums[++start]);
        while (start < end && nums[end] === nums[--end]);
      }
    }
  }
  return res
};