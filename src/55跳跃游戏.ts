// function canJump(nums: number[]): boolean {
//   const dp = new Array(nums.length).fill(false); //初始化dp
//   dp[0] = true; //第一项能到达
//   for (let i = 1; i < nums.length; i++) {
//     for (let j = 0; j < i; j++) {
//       //当前位置j能达到，并且当前位置j加上能到达的位置如果超过了i，那dp[i]更新为ture，便是i位置也可以到达
//       if (dp[j] && nums[j] + j >= i) {
//         dp[i] = true;
//         break;
//       }
//     }
//   }
//   return dp[nums.length - 1];
// };

function canJump(nums: number[]): boolean {
  let k = 0
  for (let i = 0; i < nums.length; i++) {
    if (i > k) return false
    k = Math.max(k, i + nums[i])
  }
  return true
};

