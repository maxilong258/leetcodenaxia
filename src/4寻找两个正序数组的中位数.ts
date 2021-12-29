
// 划分数组 我不会 长大后再学习
// function findMedianSortedArrays(nums1: number[], nums2: number[]): number | undefined {
//   if (nums1.length > nums2.length) {
//     let temp = nums1
//     nums1 = nums2
//     nums2 = temp
//   }
//   let len1 = nums1.length
//   let len2 = nums2.length
//   let len = len1 + len2
//   let start = 0
//   let end = len1
//   let partlen1: number
//   let partlen2: number
//   while (start <= end) {
//     partlen1 = Math.floor((start + end) / 2)
//     partlen2 = Math.floor((len + 1) / 2) - partlen1
//     let l1 = partlen1 === 0 ? -Infinity : nums1[partlen1 - 1]
//     let l2 = partlen2 === 0 ? -Infinity : nums2[partlen2 - 1]
//     let r1 = partlen1 === len1 ? Infinity : nums1[partlen1]
//     let r2 = partlen2 === len2 ? Infinity : nums2[partlen2]
//     if (l1 > r2) {
//       end = partlen1 - 1
//     } else if (l2 > r1) {
//       start = partlen1 + 1
//     } else {
//       return len % 2 === 0 ? (Math.max(l1, l2) + Math.min(r1, r2)) / 2 : Math.max(l1, l2)
//     }
//   }
// };

// 二分查找
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let m = nums1.length
  let n = nums2.length
  if (m > n) return findMedianSortedArrays(nums2, nums1)
  let left = Math.floor((m + n + 1) / 2)
  let right = Math.floor((m + n + 2) / 2)
  return (getKth(0, m - 1, 0, n - 1, left) + getKth(0, m - 1, 0, n - 1, right)) / 2
  function getKth(start1: number, end1: number, start2: number, end2: number, k: number): number {
    let len1 = end1 - start1 + 1
    let len2 = end2 - start2 + 1
    if (len1 === 0) return nums2[start2 + k - 1]
    if (k === 1) return Math.min(nums1[start1], nums2[start2] || Infinity)
    let i = start1 + Math.min(len1, Math.floor(k / 2)) - 1
    let j = start2 + Math.min(len2, Math.floor(k / 2)) - 1
    if (nums1[i] > nums2[j]) return getKth(start1, end1, j + 1, end2, k - (j - start2 + 1))
    else return getKth(i + 1, end1, start2, end2, k - (i - start1 + 1))
  }
};