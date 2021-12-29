function fib(n: number): number {
  const memo = new Array(n + 1).fill(null)
  return dfs(n)
  function dfs(n: number): number {
    if (n === 0) return 0
    if (n === 1) return 1
    if (memo[n] !== null) return memo[n]
    memo[n] = (dfs(n - 1) + dfs(n - 2)) % 1000000007
    return memo[n]
  }
};