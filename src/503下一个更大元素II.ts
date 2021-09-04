function nextGreaterElements(nums: number[]): number[] {
  let n = nums.length
  const res = new Array(n).fill(-1)
  const stack = []
  for (let i = 0; i < n * 2 - 1; i++) {
    while (stack.length !== 0 && nums[stack[stack.length - 1]] < nums[i % n]) {
      res[stack[stack.length - 1]] = nums[i % n]
      stack.pop()
    }
    stack.push(i % n)
  }
  return res
}