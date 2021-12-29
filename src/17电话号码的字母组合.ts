function letterCombinations(digits: string): string[] {
  let n = digits.length
  const map = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  if (n === 0) return []
  if (n === 1) 
  const res: any = []
  const path: any = []
  backtracking(0)
  return res
  function backtracking(a: number) {
    if (a === n) {
      res.push(path.join(''))
      return
    }
    for(let item of map[Number(digits[a])]) {
      path.push(item)
      backtracking(a + 1)
      path.pop()
    }
  }
};