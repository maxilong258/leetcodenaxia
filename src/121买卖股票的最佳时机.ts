function maxProfit(prices: number[]): number {
  let minPrice = Infinity
  let res = 0
  for (let i = 0; i < prices.length; i++) {
    if (minPrice > prices[i]) minPrice = prices[i]
    else if (res < prices[i] - minPrice) res = prices[i] - minPrice
  }
  return res
}

//dp
// function maxProfit(prices: number[]): number {
//   let len = prices.length
//   if (len < 2) return 0
//   const dp = new Array(len).fill(null).map(item => new Array(2).fill(null))
//   dp[0][0] = 0
//   dp[0][1] = -prices[0]
//   for (let i = 1; i < len; i++) {
//     dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
//     dp[i][1] = Math.max(dp[i - 1][1], -prices[i])
//   }
//   return dp[len - 1][0]
// }