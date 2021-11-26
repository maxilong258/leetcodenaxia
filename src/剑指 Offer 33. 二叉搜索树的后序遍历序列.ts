function verifyPostorder(postorder: number[]): boolean {
  return recur(0, postorder.length - 1)
  function recur(i: number, j: number): boolean {
    if (i >= j) return true
    let p = i
    while (postorder[p] < postorder[j]) p++
    let m = p
    while (postorder[p] > postorder[j]) p++
    return p === j && recur(i, m - 1) && recur(m, j - 1)
  }
};