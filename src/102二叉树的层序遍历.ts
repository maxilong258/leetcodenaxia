
// Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}


function levelOrder102(root: TreeNode | null): number[][] {
  const res:number[][] = []
  if (root === null) return res
  const queue = []
  queue.push(root)
  while (queue.length) {
    let len = queue.length
    const level = []
    for (let i = 0; i < len; i++) {
      const cur: any = queue.shift()
      level.push(cur.val)
      if (cur.left) queue.push(cur.left)
      if (cur.right) queue.push(cur.right)
    }
    res.push(level)
  }
  return res
}