function twoSum(nums: number[], target: number): number[] {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const num1 = nums[i]
    const num2 = target - nums[i]
    if (map.has(num2)) {
      return [map.get(num2), i]
    } else {
      map.set(num1, i)
    }
  }
  return [-1, -1]
}