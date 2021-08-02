function findMedianSortedArrays(nums1: number[], nums2: number[]): number | undefined {
  if (nums1.length > nums2.length) {
    let temp = nums1
    nums1 = nums2
    nums2 = temp
  }
  let len1 = nums1.length
  let len2 = nums2.length
  let len = len1 + len2
  let start = 0
  let end = len1
  let partlen1: number
  let partlen2: number
  while (start <= end) {
    partlen1 = Math.floor((start + end) / 2)
    partlen2 = Math.floor((len + 1) / 2) - partlen1
    let l1 = partlen1 === 0 ? -Infinity : nums1[partlen1 - 1]
    let l2 = partlen2 === 0 ? -Infinity : nums2[partlen2 - 1]
    let r1 = partlen1 === len1 ? Infinity : nums1[partlen1]
    let r2 = partlen2 === len2 ? Infinity : nums2[partlen2]
    if (l1 > r2) {
      end = partlen1 - 1
    } else if (l2 > r1) {
      start = partlen1 + 1
    } else {
      return len % 2 === 0 ? (Math.max(l1, l2) + Math.min(r1, r2)) / 2 : Math.max(l1, l2)
    }
  }
};

// 二分查找方法 不会