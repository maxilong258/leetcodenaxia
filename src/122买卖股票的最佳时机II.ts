function maxProfit(prices: number[]): number {
  const n = prices.length
  let res = 0
  for (let i = 1; i < n; i++) {
    res += Math.max(0, prices[i] - prices[i - 1])
  }
  return res
};