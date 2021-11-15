function exchange(nums: number[]): number[] {
  let i = 0
  let j = nums.length - 1
  let temp = 0
  while (i < j) {
    while (i < j && nums[i] % 2 === 0) {
      while (i < j && nums[j] % 2 === 0) {
        j--
      }
      temp = nums[i]
      nums[i] = nums[j]
      nums[j] = temp
      j--
    }
    i++
  }
  return nums
};