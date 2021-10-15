function wordBreak(s: string, wordDict: string[]): boolean {
  const memo = new Array(s.length + 1).fill(null)
  return dfs(s, s.length, new Set(wordDict))
  function dfs(s: string, len: number, dict: Set<string>) {
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
};