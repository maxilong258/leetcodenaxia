function largestRectangleArea(heights: number[]): number {
  let len = heights.length
  const stack = []
  stack.push(-1)
  let maxVal = 0
  for (let i = 0; i <= len; i++) {
    let cur = i < len ? heights[i] : 0
    while (stack[stack.length - 1] !== -1 && heights[stack[stack.length - 1]] > cur) {
      let temp: number | undefined | any = stack.pop()
      let width = i - stack[stack.length - 1] - 1
      maxVal = Math.max(maxVal, width * heights[temp])
    }
    stack.push(i)
  }
  return maxVal
};