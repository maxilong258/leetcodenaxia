function numDecodings(s: string): number {
  const dp = new Array(s.length + 1).fill(null)
  return dfs(s, s.length)
  function dfs(s: string, n: number): number {
    if (n === 0) return 1
    if (n === 1) return s.charAt(0) === '0' ? 0 : 1
    if (dp[n] !== null) return dp[n]
    let x = s.charAt(n - 1)
    let y = s.charAt(n - 2)
    if (x !== '0') dp[n] += dfs(s, n - 1)
    let yx = (y.charCodeAt(0) - '0'.charCodeAt(0)) * 10 + (x.charCodeAt(0) - '0'.charCodeAt(0))
    if (yx >= 10 && yx <= 26) dp[n] += dfs(s, n - 2)
    return dp[n]
  }
}