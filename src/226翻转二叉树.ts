function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) return root
  let left = invertTree(root.left)
  let right = invertTree(root.right)
  root.right = left
  root.left = right
  return root
};