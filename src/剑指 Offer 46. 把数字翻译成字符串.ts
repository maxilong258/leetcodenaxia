function translateNum(num: number): number {
  let s = String(num)
  const memo = new Array(s.length + 1).fill(null)
  return dfs(s.length)
  function dfs(n: number): number {
    if (n <= 1) return 1
    if (memo[n] !== null) return memo[n]
    let x = s.charAt(n - 1)
    let y = s.charAt(n - 2)
    memo[n] += dfs(n - 1)
    let yx = (y.charCodeAt(0) - '0'.charCodeAt(0)) * 10 + (x.charCodeAt(0) - '0'.charCodeAt(0))
    if (yx >= 10 && yx <= 25) memo[n] += dfs(n - 2)
    return memo[n]
  }
};