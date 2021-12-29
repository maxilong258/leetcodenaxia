// function sortColors(nums: number[]): void {
//   let i = 0
//   let j = 0
//   for (let k = 0; k < nums.length; k++) {
//     if (nums[k] === 1) {
//       let temp = nums[k]
//       nums[k] = nums[j]
//       nums[j] = temp
//       j++
//     } else if (nums[k] === 0) {
//       let temp = nums[k]
//       nums[k] = nums[i]
//       nums[i] = temp
//       if (i < j) {
//         let temp = nums[k]
//         nums[k] = nums[j]
//         nums[j] = temp
//       }
//       i++
//       j++
//     }
//   }
// };

function sortColors(nums: number[]): void {
  let l = 0
  let r = nums.length - 1
  let i = 0
  while (i <= r) {
    if (nums[i] === 0) {
      let temp = nums[l]
      nums[l] = nums[i]
      nums[i] = temp
      i++
      l++
    } else if (nums[i] === 2) {
      let temp = nums[r]
      nums[r] = nums[i]
      nums[i] = temp
      r--
    } else {
      i++
    }
  }
}