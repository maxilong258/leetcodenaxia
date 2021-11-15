function dicesProbability(n: number): number[] {
  let dp: number[] = new Array(6).fill(1 / 6)
  for (let i = 2; i <= n; i++) {
    const temp: number[] = new Array(5 * i + 1)
    for (let j = 0; j < dp.length; j++) {
      for (let k = 0; k < 6; k++) {
        temp[j + k] = (temp[j + k] || 0) + dp[j] / 6
      }
    }
    dp = temp
  }
  return dp
};