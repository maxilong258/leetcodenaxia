function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	let res: TreeNode | any
  dfs(root, p, q)
  return res;

  function dfs(root: TreeNode | null, p: TreeNode | null | any, q: TreeNode | null | any): boolean {
    if (root === null) return false;
    const lson = dfs(root.left, p, q);
    const rson = dfs(root.right, p, q);
    if ((lson && rson) || ((root.val === p.val || root.val === q.val) && (lson || rson))) {
      res = root;
    } 
    return lson || rson || (root.val === p.val || root.val === q.val);
  }

};