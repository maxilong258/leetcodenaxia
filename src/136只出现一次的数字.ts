// function singleNumber(nums: number[]): number {
//   const map = new Map()
//   for (let i = 0; i < nums.length; i++) {
//     map.set(nums[i], (map.get(nums[i]) || 0) + 1)
//   }
//   for (let k of map.keys()) {
//     if (map.get(k) === 1) return k
//   }
//   return -1
// };

function singleNumber(nums: number[]): number {
  let single = 0
  for (let num of nums) single ^= num
  return single
};