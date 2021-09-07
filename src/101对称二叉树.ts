function isSymmetric(root: TreeNode | null): boolean {
  return check101(root, root)
};

function check101(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null && q === null) return true
  if ((p === null || q === null) || (p.val !== q.val)) return false
  return check101(p.left, q.right) && check101(p.right, q.left)
}

// function isSymmetric(root: TreeNode | null): boolean {
//   return check(root, root)
// }
// function check(p: TreeNode, q: TreeNode): boolean {
//   const queue = []
//   queue.push(p)
//   queue.push(q)
//   while (queue.length) {
//     const u = queue.shift()
//     const v = queue.shift()
//     if (u === null && v === null) continue
//     if ((u === null || v === null) || (u.val != v.val)) return false
//     queue.push(u.left)
//     queue.push(v.right)
//     queue.push(u.right)
//     queue.push(v.left)
//   }
//   return true
// }