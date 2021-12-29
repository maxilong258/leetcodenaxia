function largestRectangleArea(heights: number[]): number {
  const stack: any = []
  stack.push(-1)
  let res = 0
  for (let i = 0; i <= heights.length; i++) {
    let curr = i < heights.length ? heights[i] : 0
    while (stack[stack.length - 1] !== -1 && heights[stack[stack.length - 1]] > curr) {
      let height = heights[stack.pop()]
      let width = i - stack[stack.length - 1] - 1
      res = Math.max(res, height * width)
    }
    stack.push(i)
  }
  return res
};