function maxSlidingWindow(nums: number[], k: number): number[] {
  const res: any = []
  if (nums.length === 0 || k === 0) return res
  const deque = []
  for (let j = 0, i = 1 - k; j < nums.length; i++, j++) {
    if (i > 0 && deque[0] === nums[i - 1]) deque.shift()
    while (deque.length !== 0 && deque[deque.length - 1] < nums[j]) deque.pop()
    deque.push(nums[j])
    if (i >= 0) res[i] = deque[0]
  }
  return res
};