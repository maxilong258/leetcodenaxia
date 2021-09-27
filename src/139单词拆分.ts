function wordBreak(s: string, wordDict: string[]): boolean {
  const n = s.length
  let memo: boolean[] = new Array(n + 1).fill(null)
  return dfs(s, n, new Set([...wordDict]))
  function dfs(s: string, len: number, dict: Set<string>): boolean {
    if (len === 0) return true
    if (memo[len] !== null) return memo[len]
    memo[len] = false
    for (let i = 0; i < len; i++) {
      let right = dict.has(s.substring(i, len))
      if (!right) continue
      let left = dfs(s, i, dict)
      if (left) {
        memo[len] = true
        break
      }
    }
    return memo[len]
  }
}