function isValidBST(root: TreeNode | null): boolean {
  return helper98(root, -Infinity, Infinity)
};
function helper98(root: TreeNode | null, lower: number, upper: number): boolean {
  if (root === null) return true
  if (root.val <= lower || root.val >= upper) return false
  return helper98(root.left, lower, root.val) && helper98(root.right, root.val, upper)
}

//中序遍历
// function isValidBST(root: TreeNode | null): boolean {
//   let pre = -Infinity
//   return realIsValidBST(root)
//   function realIsValidBST(root: TreeNode | null): boolean {
//     if (root === null) return true
//     if (!realIsValidBST(root.left)) return false
//     if (pre >= root.val) return false
//     pre = root.val
//     return realIsValidBST(root.right)
//   }
// };
