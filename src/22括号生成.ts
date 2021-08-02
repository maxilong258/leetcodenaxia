function generateParenthesis(n: number): string[] {
  const list: string[] = []
  backtracking(n, list, 0, 0, '')
  return list
}
function backtracking(n: number, result: string[], left: number, right: number, str: string) {
  if (right > left) return
  if (left == n && right == n) {
    result.push(str) 
    return
  }
  if (left < n) backtracking(n, result, left + 1, right, str + '(' )
  if (right < left) backtracking(n, result, left, right + 1, str + ')' )
}