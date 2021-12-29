function findUnsortedSubarray(nums: number[]): number {
  let len = nums.length
  let l = nums[0]
  let r = nums[len - 1]
  let start = 0
  let end = -1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < l) end = i
    else l = nums[i]
    if (nums[len - i - 1] > r) start = len - i - 1
    else r = nums[len - i - 1]
  }
  return end - start + 1
};