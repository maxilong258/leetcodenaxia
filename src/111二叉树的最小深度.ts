// function minDepth(root: TreeNode | null): number {
//   if (root == null) return 0;
//   let left = minDepth(root.left);
//   // 计算右子树的深度
//   let right = minDepth(root.right);
//   // 如果左子树或右子树的深度不为 0，即存在一个子树，那么当前子树的最小深度就是该子树的深度+1
//   // 如果左子树和右子树的深度都不为 0，即左右子树都存在，那么当前子树的最小深度就是它们较小值+1
//   return (left == 0 || right == 0) ? left + right + 1 : Math.min(left, right) + 1;
// };

function minDepth(root: TreeNode | null): number { 
  let res = 0
  if (root === null) return res
  const queue = []
  queue.push(root)
  while (queue.length) {
    let len = queue.length
    for (let i = 0; i < len; i++) {
      const cur: any = queue.shift()
      if (cur.left === null && cur.right === null) return res + 1
      if (cur.left !== null) queue.push(cur.left)
      if (cur.right !== null) queue.push(cur.right)
    }
    res++
  }
  return res
};