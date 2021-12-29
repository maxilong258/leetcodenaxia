
function maxPathSum(root: TreeNode | null): number {
  let res = -Infinity
  dfs(root)
  return res
  function dfs(r: TreeNode | null): number {
    if (r === null) return 0
    let left = Math.max(0, dfs(r.left))
    let right = Math.max(0, dfs(r.right))
    res = Math.max(res, r.val + left + right)
    return Math.max(left, right) + r.val
  }
};

// function maxPathSum(root: TreeNode | null): number {
//   let max = -Infinity
//   return realMaxPathSum(root)
//   function realMaxPathSum(root: TreeNode | null): number {
//     /**
//     对于任意一个节点, 如果最大和路径包含该节点, 那么只可能是两种情况:
//     1. 其左右子树中所构成的和路径值较大的那个加上该节点的值后向父节点回溯构成最大路径
//     2. 左右子树都在最大路径中, 加上该节点的值构成了最终的最大路径
//     **/
//     getMax(root);
//     return max;
//   }
    
//   function getMax(r: TreeNode | null) {
//     if(r == null) return 0;
//     let left = Math.max(0, getMax(r.left)); // 如果子树路径和为负则应当置0表示最大路径不包含子树
//     let right = Math.max(0, getMax(r.right));
//     max = Math.max(max, r.val + left + right); // 判断在该节点包含左右子树的路径和是否大于当前最大路径和
//     return Math.max(left, right) + r.val;
//   }
// };