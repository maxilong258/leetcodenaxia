// function maxSubArray(nums: number[]): number {
//   let res = nums[0]
//   for (let i = 1; i < nums.length; i++) {
//     nums[i] += Math.max(nums[i - 1], 0)
//     res = Math.max(nums[i], res)
//   }
//   return res
// }

function maxSubArray(nums: number[]): number {
  const dp = new Array(nums.length).fill(null)
  dp[0] = nums[0]
  let res = dp[0]
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
    res = Math.max(res, dp[i])
  }
  return res
};