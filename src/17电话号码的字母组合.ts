function letterCombinations(digits: string): string[] {
  const k = digits.length
  const map = ['','','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz']
  if (!k) return []
  if (k === 1) return map[Number(digits)].split('')
  const res: string[] = []
  const path: string[] = []
  backtracking(digits, k, 0)
  return res

  function backtracking(n: string, k: number, a: number) {
    if (path.length === k) {
      res.push(path.join(''))
      return
    }
    for (let v of map[Number(n[a])]) {
      path.push(v)
      backtracking(n, k, a + 1) 
      path.pop()
    }
  }
}