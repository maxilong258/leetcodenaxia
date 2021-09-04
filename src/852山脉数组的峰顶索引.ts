// function peakIndexInMountainArray(arr: number[]): number {
//   let map = new Map()
//   let max = 0
//   let maxindex = 0
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i]
//       maxindex = i
//     }
//   }
//   return maxindex
// };

function peakIndexInMountainArray(arr: number[]): number {
  let l = 0
  let r = arr.length
  while (l < r) {
    let m = Math.floor(l + (r - l) / 2)
    if (arr[m] > arr[m - 1]) l = m + 1
    else r = m
  }
  return l - 1
};