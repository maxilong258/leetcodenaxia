function numDecodings(s: string): number {
  const memo = new Array(s.length + 1).fill(null)
  return dfs(s.length)
  function dfs(n: number): number {
    if (n === 0) return 1
    if (n === 1) return s.charAt(n - 1) === '0' ? 0 : 1
    if (memo[n] !== null) return memo[n]
    let x = s.charAt(n - 1)
    let y = s.charAt(n - 2)
    if (x !== '0') memo[n] += dfs(n - 1)
    let yx = (y.charCodeAt(0) - '0'.charCodeAt(0)) * 10 + (x.charCodeAt(0) - '0'.charCodeAt(0))
    if (yx >= 10 && yx <= 26) memo[n] += dfs(n - 2)
    return memo[n]
  }
}