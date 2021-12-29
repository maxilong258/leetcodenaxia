function maxCoins(nums: number[]): number {
  let n = nums.length
  const temp = new Array(n + 2)
  temp[0] = 1
  temp[n + 1] = 1
  for (let i = 0; i < n; i++) {
    temp[i + 1] = nums[i]
  }
  const dp = new Array(n + 2).fill(null).map(item => new Array(n + 2).fill(null))
  for (let len = 3; len <= n + 2; len++) {
    for (let i = 0; i <= n + 2 - len; i++) {
      let res = 0
      for (let k = i + 1; k < i + len - 1; k++) {
        let left = dp[i][k]
        let right = dp[k][i + len - 1]
        res = Math.max(res, left + temp[i] * temp[k] * temp[i + len - 1] + right)
      }
      dp[i][i + len - 1] = res
    }
  }
  return dp[0][n + 1]
}