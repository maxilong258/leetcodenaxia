function maxArea(height: number[]): number {
  let l = 0
  let r = height.length - 1
  let ans = 0
  while (l < r) {
    let area = (r - l) * Math.min(height[l], height[r])
    if (ans < area) ans = area
    if (height[l] < height[r]) l++
    else r--
  }
  return ans
}