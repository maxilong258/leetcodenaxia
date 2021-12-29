function maximalRectangle(matrix: string[][]): number {
  if (matrix.length === 0 || matrix[0].length === 0) return 0
  let col = matrix.length
  let row = matrix[0].length
  const heights = new Array(row).fill(0)
  let res = 0
  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      if (matrix[i][j] === '1') heights[j] += 1
      else heights[j] = 0
    }
    res = Math.max(res, largestRectangleArea(heights))
  }
  return res
};
function largestRectangleArea85(heights: number[]): number {
  const stack: any = []
  stack.push(-1)
  let res = 0
  for (let i = 0; i <= heights.length; i++) {
    let curr = i < heights.length ? heights[i] : 0
    while (stack[stack.length] !== -1 && heights[stack[stack.length - 1]] > curr) {
      let temp = stack.pop()
      let width = i - stack[stack.length - 1] - 1
      res = Math.max(res, width * heights[temp])
    }
    stack.push(i)
  }
  return res
}