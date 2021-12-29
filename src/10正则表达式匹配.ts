// function isMatch(s: string, p: string): boolean {
//   return new RegExp(`^${p}$`).test(s)
// }

function isMatch(s: string, p: string): boolean {
  let m = s.length
  let n = p.length
  const memo = new Array(m + 1).fill(null).map(item => new Array(n + 1).fill(null))
  return dfs(0, 0)
  function dfs(i: number, j: number): boolean {
    if (j === n) return i === m
    if (memo[i][j] !== null) return memo[i][j]
    let res = false
    if (j + 1 < n && p[j + 1] === '*') {
      if (i < m && (s[i] === p[j] || p[j] === '.')) res = dfs(i, j + 2) || dfs(i + 1, j + 1) || dfs(i + 1, j)
      else res = dfs(i, j + 2)
    } else {
      if (i < m && (s[i] === p[j] || p[j] === '.')) res = dfs(i + 1, j + 1)
    }
    memo[i][j] = res
    return res
  }
}