function majorityElement(nums: number[]): number[] {
  const map = new Map()
  const len = nums.length
  const res = []
  for (let i = 0; i < len; i++) {
    if (map.has(nums[i])) map.set(nums[i], map.get(nums[i]) + 1) 
    else map.set(nums[i], 1)
  }
  for (let k of map.keys()) {
    if (map.get(k) > (len / 3)) {
      res.push(k)
    }
  }
  return res
};