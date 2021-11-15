function lowestCommonAncestor235(root: TreeNode | null | any, p: TreeNode | null | any, q: TreeNode | null | any): TreeNode | null {
	if (root.val < p.val && root.val < q.val) return lowestCommonAncestor235(root.right, p, q)
  if (root.val > p.val && root.val > q.val) return lowestCommonAncestor235(root.left, p, q)
  return root
};