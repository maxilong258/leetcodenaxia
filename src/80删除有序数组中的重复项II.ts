function removeDuplicates80(nums: number[]): number {
  if (nums.length <= 2) return nums.length
  let i = 2
  let j = 2
  while (j < nums.length) {
    if (nums[i - 2] !== nums[j]) {
      nums[i] = nums[j]
      i++
    }
    j++
  }
  return i
}