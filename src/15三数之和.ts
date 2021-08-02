function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => {return a - b})
  let len = nums.length
  const res = []
  for (let i = 0; i < len - 2; i++) {
    if(i === 0 || nums[i] !== nums[i - 1]) {
      let start = i + 1
      let end = len - 1
      while (start < end) {
        if (nums[i] + nums[start] + nums[end] === 0) {
          res.push([nums[i], nums[start], nums[end]])
          start++
          end--
          while (start < end && nums[start] === nums[start - 1]) {
            start++
          }
          while (start < end && nums[end] === nums[end + 1]) {
            end--
          }
        } else if (nums[i] + nums[start] + nums[end] > 0) {
          end--
        } else {
          start++
        }
      }
    }
  }
  return res
}