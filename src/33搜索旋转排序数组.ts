function search(nums: number[], target: number): number {
  let l = 0
  let r = nums.length
  while (l <= r) {
    let mid = Math.floor(l + (r - l) / 2)
    if (nums[mid] === target) return mid
    if (nums[0] <= nums[mid]) {
      if (nums[0] <= target && nums[mid] > target) {
        r = mid - 1
      } else {
        l = mid + 1
      }
    } else {
      if (nums[mid] < target && nums[nums.length - 1] >= target) {
        l = mid + 1
      } else {
        r = mid - 1
      }
    }
  }
  return -1
}