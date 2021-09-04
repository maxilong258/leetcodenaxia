function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const stack = []
  const map = new Map()
  const res = []
  for (let i = nums2.length - 1; i >= 0; i--) {
    while (stack.length !== 0 && nums2[i] > nums2[stack[stack.length - 1]]) stack.pop()
    map.set(nums2[i], stack.length === 0 ? -1 : nums2[stack[stack.length -1]])
    stack.push(i)
  }
  for (let i = 0; i < nums1.length; i++) {
    res[i] = map.get(nums1[i])
  }
  return res
}