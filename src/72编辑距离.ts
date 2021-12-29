function minDistance(word1: string, word2: string): number {
  let m = word1.length
  let n = word2.length
  const memo = new Array(m + 1).fill(null).map(item => new Array(n + 1).fill(null))
  return dfs(m, n)
  function dfs(i: number, j: number): number {
    if (i === 0) return j
    if (j === 0) return i
    if (memo[i][j] !== null) return memo[i][j]
    if (word1[i - 1] === word2[j - 1]) memo[i][j] = dfs(i - 1, j - 1)
    else memo[i][j] = Math.min(dfs(i - 1, j), dfs(i, j - 1), dfs(i - 1, j - 1)) + 1
    return memo[i][j]
  }
};