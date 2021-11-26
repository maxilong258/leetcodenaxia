function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (nums.length === 0) return null
  const mid = Math.floor(nums.length / 2)
  const root = new TreeNode(nums[mid], sortedArrayToBST(nums.slice(0, mid)), sortedArrayToBST(nums.slice(mid + 1)))
  return root
};