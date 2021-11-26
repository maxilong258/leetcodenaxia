function isStraight(nums: number[]): boolean {
  nums = nums.sort((a, b) => a - b)
  let joker = 0
  for (let i = 0; i < 5; i++) {
    if (nums[i] === 0) joker++
    else if (nums[i] === nums[i + 1]) return false
  }
  return nums[4] - nums[joker] < 5
};