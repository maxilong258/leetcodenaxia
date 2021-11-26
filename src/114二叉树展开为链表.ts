// function flatten(root: TreeNode | null): void {
//   let curr: TreeNode | null = null
//   dfs(root)
//   function dfs(root: TreeNode | null): void {
//     if (root === null) return
//     dfs(root.right)
//     dfs(root.left)
//     root.right = curr
//     root.left = null
//     curr = root
//   }
// };

function flatten(root: TreeNode | null): void {
  if (root === null) return
  const stack = []
  stack.push(root)
  while (stack.length) {
    const curr: any = stack.pop()
    if (curr.right !== null) stack.push(curr.right)
    if (curr.left !== null) stack.push(curr.left)
    if (stack.length) curr.right = stack[stack.length - 1]
    curr.left = null
  }
};