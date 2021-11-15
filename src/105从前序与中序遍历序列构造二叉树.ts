function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  const map = new Map()
  let n = preorder.length
  for (let i = 0; i < n; i++) {
    map.set(inorder[i], i)
  }
  return recRuildTree(0, n - 1, 0, n - 1)
  function recRuildTree(preorder_left: number, preorder_right: number, inorder_left: number, inorder_right: number) {
    if (preorder_left > preorder_right) return null
    let preorder_root = preorder_left
    let inorder_root = map.get(preorder[preorder_root])
    const root = new TreeNode(preorder[preorder_root])
    let size_left_subtree = inorder_root - inorder_left
    root.left = recRuildTree(preorder_left + 1, preorder_left + size_left_subtree, inorder_left, inorder_root - 1)
    root.right = recRuildTree(preorder_left + size_left_subtree + 1, preorder_right, inorder_root + 1, inorder_right)
    return root
  }
}