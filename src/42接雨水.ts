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

//双指针做法
// function trap(height: number[]): number {
//   let i = 0
//   let j = height.length - 1
//   let res = 0
//   let leftMax = 0
//   let rightMax = 0
//   while (i < j) {
//     if (height[i] < height[j]) {
//       if (height[i] >= leftMax) {
//         leftMax = height[i]
//       } else {
//         res += (leftMax - height[i])
//       }
//       i++
//     } else {
//       if (height[j] >= rightMax) {
//         rightMax = height[j]
//       } else {
//         res += (rightMax - height[j])
//       }
//       j--
//     }
//   }
//   return res
// };