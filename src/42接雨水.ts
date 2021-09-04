function trap(height: number[]): number {
  let res = 0
  const stack = []
  for (let i = 0; i < height.length; i++) {
    while (stack.length !== 0 && height[stack[stack.length - 1]] < height[i]) {
      let curr: any = stack.pop()
      if (stack.length === 0) break
      let left = stack[stack.length - 1]
      let right = i
      let h = Math.min(height[left], height[right]) - height[curr]
      res += (right - left - 1) * h
    }
    stack.push(i)
  }
  return res
};