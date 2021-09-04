// function splitArray(nums: number[], m: number): number {
//   let l = 0
//   let r = 0
//   for (let num of nums) {
//     l = Math.max(l, num)
//     r += num
//   }
//   while (l < r) {
//     let cnt = 1
//     let mid = Math.floor(l + (r - l) / 2)
//     let sum = 0
//     for (let num of nums) {
//       if (sum + num > mid) {
//         sum = 0
//         cnt++
//       }
//       sum += num
//     }
//     if (cnt > m) {
//       l = mid + 1
//     } else {
//       r = mid
//     }
//   }
//   return l
// };

function splitArray(nums: number[], m: number): number {
  let l = 0
  let r = 0
  for (let num of nums) {
    l = Math.max(l, num)
    r += num
  }
  while (l < r) {
    let mid = Math.floor(l + (r - l) /2)
    if (check(nums, m, mid)) {
      r = mid
    } else {
      l = mid + 1
    }
  }
  return l
}

function check (nums: number[], m: number, target: number) {
  let cut = 1
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    if (sum + nums[i] > target) {
      sum = nums[i]
      cut++
    } else {
      sum += nums[i]
    }
  }
  return cut <= m
}