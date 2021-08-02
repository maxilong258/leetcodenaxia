function threeSumClosest(nums: number[], target: number): number {
  nums.sort((a, b) => { return a - b })
  let len = nums.length
  let sum: number = 0
  let gep: number = Infinity
  for (let i = 0; i < len - 2; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      let start = i + 1
      let end = len - 1
      while (start < end) {
        if (nums[i] + nums[start] + nums[end] === target) {
          return target
        } else if (nums[i] + nums[start] + nums[end] > target) {
          let newgep = Math.abs((nums[i] + nums[start] + nums[end]) - target)
          if (newgep < gep) {
            gep = newgep
            sum = nums[i] + nums[start] + nums[end]
          }
          end--
        } else {
          let newgep = Math.abs(target - (nums[i] + nums[start] + nums[end]))
          if (newgep < gep) {
            gep = newgep
            sum = nums[i] + nums[start] + nums[end]
          }
          start++
        }
      }
    }
  }
  return sum
}