function rotate(nums: number[], k: number): void {
  if (k > nums.length) k = k % nums.length
  nums.reverse()
  let i = 0
  let j = k - 1
  let temp = 0
  while (i < j) {
    temp = nums[j]
    nums[j] = nums[i]
    nums[i] = temp
    i++
    j--
  }
  let a = k
  let b = nums.length - 1
  while (a < b) {
    temp = nums[b]
    nums[b] = nums[a]
    nums[a] = temp
    a++
    b--
  }
};

// function rotate(nums: number[], k: number) {
//   for (let i = 0; i < k; i++) {
//     nums.unshift(nums.pop())
//   }
// };