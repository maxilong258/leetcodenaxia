function searchRange(nums: number[], target: number): number[] {
  let l = 0
  let r = nums.length
  while (l < r) {
    let mid = Math.floor(l + (r - l) / 2)
    if (nums[mid] < target) l = mid + 1
    else r = mid
  }
  if (nums[l] !== target) return [-1, -1]
  const a = l
  while (nums[l] === target) l++
  return [a, l - 1]
};